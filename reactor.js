// initially undefined. We can set it to null instead.
let computeFunc;

export function computed(func) {
  const reactor = new Reactor(null);

  // THIS is the function we subscribe to, which updates the reactor
  const fn = () => (reactor.value = func());

  // set computeFunc to fn and store previous value for later
  const prevVal = computeFunc;
  computeFunc = fn;

  fn();

  // set computeFunc back to previous value
  computeFunc = prevVal;

  return reactor;
}

export class Reactor {
  constructor(value) {
    this._val = value;
    this._subscribers = [];
  }

  get value() {
    // If it exists, we add it to the subscribers.
    // Do not call it, unlike a regular subscriber.
    if (computeFunc) this._subscribers.push(computeFunc);

    return this._val;
  }

  set value(newVal) {
    this._val = newVal;
    for (const subscribeFunc of this._subscribers) {
      subscribeFunc(newVal);
    }
  }

  subscribe(func) {
    this._subscribers.push(func);
    func(this._val);
  }
}

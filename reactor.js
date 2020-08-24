export class Reactor {
  constructor(value) {
    // private value for where it's really stored
    this._val = value;
    // private list of functions to be notified
    this._subscribers = [];
  }

  // return value when requested
  get value() {
    return this._val;
  }
  // set value and then notify everyone
  set value(newVal) {
    this._val = newVal;
    for (const subscribeFunc of this._subscribers) {
      subscribeFunc(newVal);
    }
  }

  // add function to subscriber list and immediately invoke
  subscribe(func) {
    this._subscribers.push(func);
    func(this._val);
  }
}

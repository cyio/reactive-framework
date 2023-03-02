# reactive-framework

动手实现 signal/双向绑定

[From Scratch - Reactive Values - DEV Community](https://dev.to/emnudge/from-scratch-reactive-values-c9h)

https://www.youtube.com/watch?v=4FU7vRQUOTY&t=1511s


```sh
vite serve ./
```

问题：
- 用值共享数据，导入是只读，解决办法是导出修改函数或改用对象

添加响应式 https://github.com/cyio/reactive-framework/commit/1f7943c556d7b9d75e4a712cb7a14878b1a0d22c
- 自定义 set/get 方法，结合发布、

添加 computed https://github.com/cyio/reactive-framework/commit/62d9b9da311d3301350c67187c363675a506dc40
- 访问 value 时，收集计算依赖，value 更新时通知

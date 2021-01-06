---
title: useDeepEffect
group:
  title: Lifecycle
  path: /lifecycle
  order: 1
legacy: /lifecycle/use-deep-effect
---

### useDeepEffect

useDeepEffect 会在组件挂载后（插入 DOM 树中）立即调用

#### 演示


<code src="./Demo.tsx">


#### API

```js
useDeepEffect(fn, deps);
```

#### 参数

| 参数 | 说明                              | 类型     | 默认值 |
| ---- | --------------------------------- | -------- | ------ |
| fn   | 在组件挂载后调用的函数 | ()=>void | -      |

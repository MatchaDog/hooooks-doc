---
title: useWillUnMount
group:
    title: Lifecycle
    path: /lifecycle
    order: 3
legacy: /lifecycle/use-will-un-mount
---

### useWillUnMount

在组件卸载及销毁之前直接调用。可以在此方法中执行必要的清理操作

#### 演示

<code src="./Demo.tsx">

#### API

```js
useWillUnMount((fn: () => void));
```

#### 参数

| 参数 | 说明                               | 类型     | 默认值 |
| ---- | ---------------------------------- | -------- | ------ |
| fn   | 在组件卸载及销毁之前直接调用的函数 | ()=>void | -      |

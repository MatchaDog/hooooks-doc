---
title: useDidUpdate
group:
    title: Lifecycle
    path: /lifecycle
    order: 2
legacy: /lifecycle/use-did-update
---

### useDidUpdate

useDidUpdate 在依赖项更新后会被立即调用。首次渲染不会执行此方法

#### 演示

<code src="./Demo.tsx">

#### API

```js
useDidUpdate((fn: () => void), deps?: any[] | undefined);
```

#### 参数

| 参数 | 说明                           | 类型               | 默认值 |
| ---- | ------------------------------ | ------------------ | ------ |
| fn   | 在依赖项更新后会立即调用的函数 | ()=>void           | -      |
| deps | 依赖项                         | any[] \| undefined | -      |

---
title: useUpdate
group:
    title: Effect
    path: /effect
    order: 1
legacy: /effect/use-update
---

### useUpdate

可以强制渲染组件的 hook

#### 演示

<code src="./Demo.tsx">

#### API

```js
const update = useUpdate();
update();
```

#### 返回值

| 参数 | 说明                     | 类型     | 默认值 |
| ---- | ------------------------ | -------- | ------ |
| fn   | 调用此函数以强制渲染组件 | ()=>void | -      |

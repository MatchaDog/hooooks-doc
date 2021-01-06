---
title: useHover
group:
    title: Dom
    path: /dom
    order: 3
legacy: /dom/use-hover
---

### useHover

useHover 帮助你监听元素的 hover 状态

#### 演示

<code src="./Demo.tsx">

#### API

```js
const [hoverState, ref] = useHover();
// 或者
const [hoverState] = useHover((selector: HTMLElement));
```

#### 参数

| 参数     | 说明                 | 类型                            | 默认值 |
| -------- | -------------------- | ------------------------------- | ------ |
| selector | 指定选择器匹配的元素 | HTMLElement \| ()=> HTMLElement | -      |

#### 返回值

| 返回值     | 说明                                  | 类型                           | 默认值 |
| ---------- | ------------------------------------- | ------------------------------ | ------ |
| hoverState | 元素的 hover 状态                     | boolean                        | false  |
| ref        | 钩子会返回 ref，可以通过 ref 绑定元素 | MutableRefObject<HTMLElement\> | -      |

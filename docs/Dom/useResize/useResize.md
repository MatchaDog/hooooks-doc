---
title: useResize
group:
    title: Dom
    path: /dom
    order: 4
legacy: /dom/use-resize
---
### useResize

useResize 帮助你监听一个元素的尺寸

#### 演示

<code src="./Demo.tsx">

#### API

```js
const [size, ref] = useResize();
// 或者
const [size] = useResize((fn: () => void));
```

#### 参数

| 参数     | 说明                 | 类型        | 默认值 |
| -------- | -------------------- | ----------- | ------ |
| selector | 指定选择器匹配的元素 | HTMLElement | -      |

#### 返回值

| 返回值 | 说明                                  | 类型                              | 默认值                  |
| ------ | ------------------------------------- | --------------------------------- | ----------------------- |
| size   | 元素的尺寸改变时返回的宽高            | { width: number, height: number } | { width: 0, height: 0 } |
| ref    | 钩子返回的 ref，可以通过 ref 绑定元素 | MutableRefObject<HTMLElement\>    | -                       |

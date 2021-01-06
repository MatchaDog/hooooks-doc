---
title: useInViewport
group:
    title: Dom
    path: /dom
    order: 5
legacy: /dom/use-in-viewport
---

### useInViewport

useInViewport 帮助你监听元素的曝光状态

#### 演示

<code src="./Demo.tsx">

#### API

```js
const [visible, ref] = useInViewport();
// 或者
const [visible] = useInViewport((ele: HTMLElement));
```

#### 参数

| 参数     | 说明                 | 类型        | 默认值 |
| -------- | -------------------- | ----------- | ------ |
| selector | 指定选择器匹配的元素 | HTMLElement | -      |

#### 返回值

| 返回值  | 说明                                  | 类型                           | 默认值 |
| ------- | ------------------------------------- | ------------------------------ | ------ |
| visible | 元素的曝光状态                        | boolean                        | false  |
| ref     | 钩子返回的 ref，可以通过 ref 绑定元素 | MutableRefObject<HTMLElement\> | -      |

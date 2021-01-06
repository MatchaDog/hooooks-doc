---
title: useClickOutside
group:
    title: Dom
    path: /dom
    order: 3
legacy: /dom/use-click-outside
---

### useClickOutside

useClickOutside 帮助你监听鼠标是否点击在指定元素之外

#### 演示

<code src="./Demo.tsx">

#### API

```js
const ref = useClickOutside((fn: (e: MouseEvent) => void));
// 或者
useClickOutside((fn: (e: MouseEvent) => void), (selector: HTMLElement));
```

#### 参数

| 参数     | 说明                               | 类型                            | 默认值 |
| -------- | ---------------------------------- | ------------------------------- | ------ |
| fn       | 鼠标点击在指定元素之外时触发的事件 | (e: MouseEvent)=>void           | -      |
| selector | 指定选择器匹配的元素               | HTMLElement \| ()=> HTMLElement | -      |

#### 返回值

| 返回值 | 说明                                  | 类型                           | 默认值 |
| ------ | ------------------------------------- | ------------------------------ | ------ |
| ref    | 钩子会返回 ref，可以通过 ref 绑定元素 | MutableRefObject<HTMLElement\> | -      |

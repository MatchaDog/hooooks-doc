---
title: useMutation
group:
    title: Dom
    path: /dom
    order: 6
legacy: /dom/use-mutation
---

### useMutation

useIntersection 帮助你用听监视 DOM 变动

#### 演示 attributes

<code src="./Demo.tsx">

#### API

```js
const ref = useMutation(
    (changes:MutationRecord) => void,
   null,
    options?: MutationObserverInit | undefined,
);
// 或者
useMutation(
    (changes:MutationRecord) => void,
    (ele?: HTMLElement),
    options?: MutationObserverInit | undefined,
);
```

#### 参数

| 参数     | 说明                         | 类型                           | 默认值    |
| -------- | ---------------------------- | ------------------------------ | --------- |
| fn       | dom 变动的回调事件           | (changes:MutationRecord)=>void | -         |
| selector | 指定选择器匹配的元素         | HTMLElement                    | -         |
| options  | 指定所要观察的特定变动的参数 | MutationObserverInit           | undefined | - |

#### 返回值

| 返回值 | 说明                                  | 类型                           | 默认值 |
| ------ | ------------------------------------- | ------------------------------ | ------ |
| ref    | 钩子返回的 ref，可以通过 ref 绑定元素 | MutableRefObject<HTMLElement\> | -      |

---
title: useIntersection
group:
    title: Dom
    path: /dom
    order: 5
legacy: /dom/use-intersection
---

### useIntersection

useIntersection 帮助你监听元素的曝光状态

#### 演示

<code src="./Demo.tsx">

#### API

```js
const [entries, ref] = useIntersection(opts);
// or
const [entries] = useIntersection(opts, element);
```

#### 参数

| 参数     | 说明                                 | 类型                              | 默认值                                    |
| -------- | ------------------------------------ | --------------------------------- | ----------------------------------------- |
| opts     | 一个可以用来配置 observer 实例的对象 | IntersectionObserverEntry \| null | {root: null, rootMargin: 0, threshold: 0} |
| selector | 指定选择器匹配的元素                 | HTMLElement \| ()=> HTMLElement   | -                                         |

#### 返回值

| 返回值  | 说明                                                   | 类型                           | 默认值 |
| ------- | ------------------------------------------------------ | ------------------------------ | ------ |
| entries | 描述目标元素与其根元素容器在某一特定过渡时刻的交叉状态 | IntersectionObserverEntry      | -      |
| ref     | 钩子返回的 ref，可以通过 ref 绑定元素                  | MutableRefObject<HTMLElement\> | -      |

---
title: useEvent
group:
    title: Dom
    path: /dom
    order: 4
legacy: /dom/use-event
---

### useEvent

useEvent 帮助你将指定的监听器注册到 EventTarget 上

#### 演示

<code src="./Demo.tsx">

#### API

```js
const ref = useEvent(eventName, callback, opts);
// 或者
useEvent(eventName, callback, opts, ele);
```

#### 参数

| 参数      | 说明                                           | 类型                                                   | 默认值 |
| --------- | ---------------------------------------------- | ------------------------------------------------------ | ------ |
| eventName | 监听事件类型的字符串                           | K extends keyof HTMLElementEventMap                    | -      |
| callback  | 监听的事件类型触发时，会接收到一个事件通知对象 | (this: HTMLElement, ev: HTMLElementEventMap[K]) => any | -      |
| opts      | 一个指定有关 listener 属性的可选参数对象       | boolean \| AddEventListenerOptions                     | -      |
| ele       | 除 ref 外还可以使用选择器来选择元素            | targetObjectType<T\>                                   | -      |

> eventName 类型继承于 keyof HTMLElementEventMap，cb 中的 eventTarget 也是如此，如果使用 typescript，我们可以写成
> useEvent<T extends HTMLElement, K extends keyof HTMLElementEventMap>(eventName:K,callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,

#### 返回值

| 返回值 | 说明                                  | 类型                           | 默认值 |
| ------ | ------------------------------------- | ------------------------------ | ------ |
| ref    | 钩子会返回 ref，可以通过 ref 绑定元素 | MutableRefObject<HTMLElement\> | -      |

---
title: useTimeout
group:
    title: Effect
    path: /effect
    order: 1
legacy: /effect/use-timeout
---

### useTimeout

可控性更强的「setTimeout」

#### 演示

<code src="./Demo.tsx">

#### API

```js
const [isReady, { set, clear }] = useTimeout(callback, delay, opts);
```

#### 参数

| 参数     | 说明             | 类型                 | 默认值 |
| -------- | ---------------- | -------------------- | ------ |
| callback | 要重复调用的函数 | ()=>void             | -      |
| delay    | 每次延迟的毫秒数 | number               | -      |
| opts     | 额外参数         | {immediate: boolean} | -      |

#### 返回值

| 参数    | 说明                                             | 类型     | 默认值 |
| ------- | ------------------------------------------------ | -------- | ------ |
| isReady | interval 状态 true:运行中 false:待定 null:被清除 | boolean  | null   | - |
| set     | 启动 interval                                    | ()=>void | -      |
| clear   | 清除 interval                                    | ()=>void | -      |

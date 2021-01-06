---
title: useBool
group:
    title: State
    path: /state
    order: 1
legacy: /state/use-bool
---

### useBool

useBool 帮助你操作 boolean 类型的数据

#### 演示

<code src="./Demo.tsx">

#### API

```js
const [currentState, { toggle, setTrue, setFalse }] = useBool((defaultValue: boolean));
```

#### 参数

| 参数         | 说明                 | 类型    | 默认值 |
| ------------ | -------------------- | ------- | ------ |
| defaultValue | 该 bool 变量的初始值 | boolean | false  |

#### 返回值

| 返回值       | 说明                                | 类型                    | 默认值 |
| ------------ | ----------------------------------- | ----------------------- | ------ |
| currentState | 可供操作的 bool 变量                | boolean                 | false  |
| toggle       | 设置该变量为相反的值/直接给变量赋值 | (flag?: boolean) => void | -      |
| setTrue      | 设置变量为 true                     | () => void              | -      |
| setFalse     | 设置变量为 false                    | () => void              | -      |

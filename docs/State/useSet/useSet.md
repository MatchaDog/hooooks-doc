---
title: useSet
group:
    title: State
    path: /state
    order: 1
legacy: /state/use-set
---

### useSet

useSet 帮助你操作 Set 对象

#### 演示

<code src="./Demo.tsx">

#### API

```js
const [currentMap, { add, remove, has, reset }] = useSet<T>(defaultValue: Array<T>);
```

#### 参数

| 参数         | 说明                | 类型     | 默认值 |
| ------------ | ------------------- | -------- | ------ |
| defaultValue | 该 Set 对象的初始值 | Array<T\> | -      |

#### 返回值

| 返回值       | 说明                            | 类型                  | 默认值    |
| ------------ | ------------------------------- | --------------------- | --------- |
| currentState | 返回的 Map 对象的值             | Map<K, V>             | new Set() |
| add          | 为该 Set 对象添加一条数据       | (value: T) => void    | -         |
| remove       | 删除该 Set 对象中的一条指定数据 | (value: T) => void    | -         |
| has          | 获取指定的值                    | (value: T) => boolean | -         |
| reset        | 重置该 Set 对象为默认值         | () => void            | -         |

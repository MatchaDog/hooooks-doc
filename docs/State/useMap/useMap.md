---
title: useMap
group:
    title: State
    path: /state
    order: 1
legacy: /state/use-map
---

### useMap

useMap 帮助你操作 Map 对象

#### 演示

<code src="./Demo.tsx">

#### API

```js
const [currentMap, { has, set, get, setAll, remove, reset, clear }] = useMap<K,V>((defaultValue: [K, V][]));
```

#### 参数

| 参数         | 说明                | 类型     | 默认值 |
| ------------ | ------------------- | -------- | ------ |
| defaultValue | 该 Map 对象的初始值 | [K, V][] | -      |

#### 返回值

| 返回值       | 说明                          | 类型                       | 默认值    |
| ------------ | ----------------------------- | -------------------------- | --------- |
| currentState | 返回的 Map 对象的值           | Map<K, V>                  | new Map() |
| has          | 是否存在指定 key 的键值对     | (key: K) => void           | -         |
| set          | 为该 Map 对象添加一条键值对   | (key: K, value: V) => void | -         |
| get          | 获取指定 key 的值             | (key: K) => void           | -         |
| setAll       | 设置该 Map 对象的值           | (value: [K, V][]) => void  | -         |
| remove       | 删除指定 key 的键值对         | (key: K) => void                 | -         |
| reset        | 重置该 Map 对象为初始化时的值 | () => void                 | -         |
| clear        | 清空该 Map 对象               | () => void                 | -         |

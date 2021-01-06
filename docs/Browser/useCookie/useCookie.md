---
title: useCookie
group:
    title: Browser
    path: /browser
    order: 1
legacy: /browser/use-cookie
---

### useCookie

useCookie 帮助你操作 cookie

#### 演示

<code src="./Demo.tsx">

#### API

```js
const [cookie, { updateCookie, deleteCookie }] = useClipboard((defaultValue: string));
```

#### 参数

| 参数名       | 说明              | 类型   | 默认值 |
| ------------ | ----------------- | ------ | ------ |
| defaultValue | 指定的 cookieName | string | -      |

#### 返回值

| 返回值       | 说明                 | 类型                    | 默认值 |
| ------------ | -------------------- | ----------------------- | ------ |
| cookie       | 当前 cookieName 的值 | string \| null          | null   | null |
| updateCookie | 设置 cookieName 的值 | (value: string) => void | -      |
| deleteCookie | 删除 cookieName 的值 | () => void              | -      |

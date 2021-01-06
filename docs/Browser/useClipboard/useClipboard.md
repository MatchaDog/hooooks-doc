---
title: useClipboard
group:
    title: Browser
    path: /browser
    order: 1
legacy: /browser/use-clipboard
---

### useClipboard

useClipboard 会帮助你操作剪切板

#### 演示

<code src="./Demo.tsx">

#### API

```js
const { readFromClipboard, copy2Clipboard } = useClipboard();
```

#### 返回值

| 返回值            | 说明             | 类型                                                | 默认值 |
| ----------------- | ---------------- | --------------------------------------------------- | ------ |
| readFromClipboard | 从剪切板读取数据 | () => Promise<string\>                     | -      |
| copy2Clipboard    | 复制到剪切板     | (content?: string) => Promise<unknown\> | -      |

> 剪切板操作是基于 *[Navigator.clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard)* 只有在用户事先授予网站或应用对剪切板的访问许可之后，才能使用异步剪切板读写方法。「本地是用不了滴，非https也不行」

> copy2Clipboard保留兜底，哪怕没有授权也可以使用
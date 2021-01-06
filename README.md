
> Hook 是 React 16.8 的新增特性，使用前确保已阅读[相关文档](https://zh-hans.reactjs.org/docs/hooks-intro.html)

### 安装

```bash
yarn add @hupu/hooooks
// or
npm install @hupu/hooooks
```

### 使用

```javascript
import { useDidMount } from "hooooks";

const Demo = () => {
    useDidMount(()=>{
        console.log("component did mount!")
    })
    return <div></div>;
};
```

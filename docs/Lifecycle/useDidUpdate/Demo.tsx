/**
 * title: 基本用法
 * desc: 请点击按钮查看案例
 */

import React, { useState } from "react";
import { useDidUpdate } from "hooooks";
import { Button, message } from "antd";

const Demo = () => {
    const [count, setCount] = useState(0);
    useDidUpdate(() => {
        message.info(count);
    }, [count]);
    return (
        <div>
            <Button
                onClick={() => {
                    setCount((count) => count + 1);
                }}>
                click
            </Button>
            <div>{count}</div>
        </div>
    );
};

export default Demo;

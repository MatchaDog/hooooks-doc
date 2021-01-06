/**
 * title: 基本用法
 * desc: 请查看案例
 */
import React, { useState } from "react";
import { useInterval } from "hooooks";
import { Button, Space } from "antd";

const Demo = () => {
    const [count, setCount] = useState(0);
    const [isReady, { set, clear }] = useInterval(
        () => {
            setCount((count) => count + 1);
        },
        1000,
        { immediate: true },
    );
    return (
        <div>
            {count}
            <div>
                <Space>
                    <Button onClick={clear}>pause</Button>
                    <Button onClick={set}>start</Button>
                </Space>
            </div>
        </div>
    );
};

export default Demo;

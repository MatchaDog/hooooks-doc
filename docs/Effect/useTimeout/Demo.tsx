/**
 * title: 基本用法
 * desc: 请点击按钮查看案例
 */
import React from "react";
import { Button, message, Space } from "antd";
import { useTimeout } from "hooooks";

const Demo = () => {
    const [isReady, { set, clear }] = useTimeout(
        () => {
            message.info("123123");
        },
        5000,
        {
            immediate: true,
        },
    );
    console.log(isReady);
    return (
        <div>
            5s后有message提示
            <div>
                <Space>
                    <Button onClick={clear}>点此清除提示</Button>
                    <Button onClick={set}>点此设置提示</Button>
                </Space>
            </div>
        </div>
    );
};

export default Demo;

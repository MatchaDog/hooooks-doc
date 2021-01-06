/**
 * title: 基本用法
 * desc: 请点击按钮查看案例
 */
import React from "react";
import { Button } from "antd";
import { useUpdate } from "hooooks";

const Demo = () => {
    const update = useUpdate();
    return (
        <div>
            <Button
                onClick={() => {
                    update();
                }}>
                click
            </Button>
            {new Date().getTime()}
        </div>
    );
};

export default Demo;

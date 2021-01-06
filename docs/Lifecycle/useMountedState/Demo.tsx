/**
 * title: 基本用法
 * desc: 请点击按钮查看案例
 */

import React from "react";
import { useMountedState } from "hooooks";
import { Button, message } from "antd";

const Demo = () => {
    const state = useMountedState();
    return (
        <div>
            <Button
                onClick={() => {
                    message.info(state() ? "mounted" : "not mounted");
                }}>
                获取MountedState
            </Button>
        </div>
    );
};

export default Demo;

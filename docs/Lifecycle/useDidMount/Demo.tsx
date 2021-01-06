/**
 * title: 基本用法
 * desc: 请点击按钮查看案例
 */

import React, { useState } from "react";
import { useDidMount } from "hooooks";
import { Button, message } from "antd";

const Demo = () => {
    const [visible, setVisible] = useState(false);
    const MountDemo = () => {
        useDidMount(() => {
            message.success("component did mount!");
        });
        return <div>mount</div>;
    };
    return (
        <div>
            <Button
                onClick={() => {
                    setVisible(true);
                }}>
                click
            </Button>
            {visible && <MountDemo />}
        </div>
    );
};

export default Demo;
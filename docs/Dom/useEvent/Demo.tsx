/**
 * title: 这里模拟的是按钮事件的绑定
 * desc: 请点击按钮查看案例
 */
import React, { FC } from "react";
import { message, Button } from "antd";
import { useEvent } from "hooooks";
const Demo: FC = () => {
    useEvent<HTMLButtonElement, "click">(
        "click",
        () => {
            message.success("点击了！");
        },
        false,
        () => document.querySelector(".aaaaa") as HTMLButtonElement,
    );
    return (
        <div>
            <Button className="aaaaa">click here</Button>
        </div>
    );
};

export default Demo;

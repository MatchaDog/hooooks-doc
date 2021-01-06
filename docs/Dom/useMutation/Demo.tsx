/**
 * title: 监听元素attributes
 * desc: 请点击按钮查看案例
 */
import React, { useRef, useState } from "react";
import { useMutation } from "hooooks";
import { Button, message } from "antd";

const Demo = () => {
    const colorList = useRef<{
        [index: number]: string;
    }>({ 0: "black", 1: "red", 2: "blue", 3: "green" });
    const [count, setCount] = useState(0);
    const ref = useMutation(
        (changes) => {
            message.info(`${changes.attributeName} changes!`);
        },
        null,
        {
            attributes: true,
        },
    );
    return (
        <div>
            <div ref={ref} style={{ color: colorList.current[count] }}>
                这是一句话
            </div>
            <Button
                onClick={() => {
                    setCount((count) => (count === 3 ? 0 : count + 1));
                }}>
                点这儿
            </Button>
        </div>
    );
};

export default Demo;

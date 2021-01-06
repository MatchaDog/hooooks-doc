/**
 * title: 基本用法
 * desc: 请点击按钮查看案例
 */

import React, { useRef, useState } from "react";
import { useWillUnMount, useDidMount } from "hooooks";
import { Button, message } from "antd";

const Demo = () => {
    const [visible, setVisible] = useState(true);
    const CountDown = () => {
        const [time, setTime] = useState("");
        const timerRef = useRef<number>(0);
        useDidMount(() => {
            timerRef.current = window.setInterval(() => {
                setTime(String(new Date()));
            }, 1000);
        });

        useWillUnMount(() => {
            message.success("clear interval");
            window.clearInterval(timerRef.current);
        });

        return <div>{time}</div>;
    };
    return (
        <div>
            <Button
                onClick={() => {
                    setVisible(false);
                }}>
                click
            </Button>
            {visible ? <CountDown></CountDown> : <div>Unmount!</div>}
        </div>
    );
};

export default Demo;
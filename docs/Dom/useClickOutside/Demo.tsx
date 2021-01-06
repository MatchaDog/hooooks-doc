/**
 * title: 基本用法
 * desc: 请点击按钮查看案例
 */
import React, { useState, FC } from "react";
import { useDidMount, useUpdate, useClickOutside } from "hooooks";
import { Button } from "antd";

const Demo: FC = () => {
    const update = useUpdate();
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const ref = useClickOutside<HTMLSpanElement>(() => {
        setCount((count) => count + 1);
    });
    useClickOutside(() => {
        setCount1((count1) => count1 - 1);
    }, ()=>document.querySelector(".current-click-dom") as HTMLElement);

    useDidMount(() => {
        update();
    });

    return (
        <div>
            <span ref={ref}>
                <Button>click here</Button>
            </span>
            {count}
            <br />
            <br />
            <span className="current-click-dom">
                <Button>click here</Button>
            </span>
            {count1}
        </div>
    );
};

export default Demo;

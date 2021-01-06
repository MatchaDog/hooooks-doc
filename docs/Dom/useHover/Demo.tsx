/**
 * title: 基本用法
 * desc: 请点击按钮查看案例
 */
import React, { FC } from "react";
import { useHover } from "hooooks";

const Demo: FC = () => {
    const [state, ref] = useHover<HTMLDivElement>();
    return (
        <div>
            <div ref={ref} style={state ? { color: "red" } : null}>
                请把鼠标放上克
            </div>
        </div>
    );
};

export default Demo;

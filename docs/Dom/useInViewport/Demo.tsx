import React from "react";
import { useInViewport, useDidUpdate } from "hooooks";
import { message } from "antd";
const Demo = () => {
    const [visible, ref] = useInViewport<HTMLDivElement>();
    useDidUpdate(() => {
        if (visible) {
            message.success("看见了！");
        } else {
            message.success("消失了！");
        }
    }, [visible]);
    return (
        <div>
            <div ref={ref}></div>
            {visible && <div>此时被曝光</div>}
        </div>
    );
};
export default Demo;

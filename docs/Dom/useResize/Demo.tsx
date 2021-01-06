/**
 * title: 基本用法
 * desc: 请拉伸浏览器查看效果
 */
import React from "react";
import { useResize } from "hooooks";

const Demo = () => {
    const [size, ref] = useResize<HTMLDivElement>();
    const [size1] = useResize(
        document.querySelector(".current-resize-dom") as HTMLElement,
    );
    return (
        <div>
            <div ref={ref}>
                size width:{size1.width}
                <br />
                size height:{size1.height}
            </div>
            <div className="current-resize-dom">
                size1 width:{size.width}
                <br />
                size1 height:{size.height}
            </div>
        </div>
    );
};

export default Demo;

import React, { useState } from "react";
import { useIntersection, useDidUpdate } from "hooooks";
import { message } from "antd";
const Demo = () => {
    const [entries, ref] = useIntersection<HTMLDivElement>({
        root: null,
        rootMargin: "0px",
        threshold: 1,
    });
    useDidUpdate(() => {
        console.log(entries);
    }, [entries]);

    return (
        <div className="parent" style={{ height: "200px", overflow: "auto" }}>
            <div style={{ height: "1000px" }}>
                <div style={{ height: "150px" }}></div>
                <div ref={ref} style={{ width: "150px", height: "100px", backgroundColor: "red" }}>
                    {entries && entries.intersectionRatio < 1 ? "被遮挡" : "全部出现"}
                </div>
            </div>
        </div>
    );
};
export default Demo;

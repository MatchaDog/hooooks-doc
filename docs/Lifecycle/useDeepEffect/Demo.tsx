/**
 * title: 基本用法
 * desc: 请点击按钮查看案例
 */

import React, { useState, useEffect } from "react";
import { useDeepEffect } from "@hupu/hooooks";
import { Button, message } from "antd";
import { useDeepCompareEffect } from "use-deep-compare";

const Demo = () => {
    const [arr, setArr] = useState([1]);
    const [obj, setObj] = useState({
        a: 1,
        b: { c: [{ g: true }], e: new Set([1, 2, 3, 4, 5]) },
        d: [1, 2, 3, 4, 5, 6],
    });
    console.log(arr, obj);
    const Text = ({ a, o }) => {
        useDeepCompareEffect(() => {
            console.log("useDeepCompareEffect", o);
        }, [o]);
        useDeepCompareEffect(() => {
            console.log("useDeepCompareEffect", a);
        }, [a]);
        useEffect(() => {
            console.log("useEffect", o);
        }, [o]);
        useEffect(() => {
            console.log("useEffect", a);
        }, [a]);
        return <div></div>;
    };

    const click1 = () => {
        setArr((pre) => [...pre, Math.random()]);
    };
    const click2 = () => {
        // setObj((pre) => ({ ...pre, b: { ...pre.b.c, ...pre.b.e, c: [{ g: false }] } }));
        setObj((pre) => ({ ...pre, b: null, d: [] }));
    };

    return (
        <div>
            <Text a={arr} o={obj}></Text>
            <Button onClick={click1}>add value to arr</Button>

            <Button onClick={click2}>add value to obj</Button>
        </div>
    );
};

export default Demo;

import React, { FC, useState } from "react";

import { useCookie, useDidMount } from "hooooks";

import { Button, Input, Space, message } from "antd";

const Demo: FC = () => {
    const [cookie, { updateCookie, deleteCookie }] = useCookie("test");
    const [value, setValue] = useState("");

    useDidMount(() => {
        updateCookie("111");
    });

    return (
        <div>
            <div style={{ marginBottom: "15px" }}>cookie值：{cookie}</div>
            <div style={{ marginBottom: "15px" }}>
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="请输入你要设置的值"></Input>
            </div>
            <Space>
                <Button
                    onClick={() => {
                        updateCookie(value);
                    }}>
                    设置cookie
                </Button>
                <Button
                    onClick={() => {
                        deleteCookie();
                    }}>
                    删除cookie
                </Button>
            </Space>
        </div>
    );
};

export default Demo;

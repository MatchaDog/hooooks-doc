import React, { FC } from "react";
import { useBool } from "hooooks";

import { Button, Space } from "antd";

const Demo: FC = () => {
    const [state, { toggle, setTrue, setFalse }] = useBool();

    return (
        <div>
            <div style={{ marginBottom: "15px" }}>{JSON.stringify({ state: state })}</div>
            <Space>
                <Button
                    onClick={() => {
                        toggle();
                    }}>
                    toggle
                </Button>
                <Button
                    onClick={() => {
                        setTrue();
                    }}>
                    setTrue
                </Button>
                <Button
                    onClick={() => {
                        setFalse();
                    }}>
                    setFalse
                </Button>
            </Space>
        </div>
    );
};

export default Demo;

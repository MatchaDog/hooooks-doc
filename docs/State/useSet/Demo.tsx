import react, { FC } from "react";

import { useSet } from "hooooks";

import { Tag, Button, Space, message } from "antd";

const Demo: FC = () => {
    const [set, { add, remove, reset, has }] = useSet<string>(["1", "2"]);

    const handleClose = (removedTag) => {
        remove(removedTag);
    };

    return (
        <div>
            <div style={{ marginBottom: "15px" }}>{JSON.stringify(Array.from(set))}</div>
            <div style={{ marginBottom: "15px" }}>
                {Array.from(set).map((i: string, index) => (
                    <Tag key={i} closable={index !== 0} onClose={() => handleClose(i)}>
                        {i}
                    </Tag>
                ))}
            </div>
            <Space>
                <Button
                    onClick={() => {
                        add(Math.floor(Math.pow(10, 9) * Math.random()).toString());
                    }}>
                    add
                </Button>
                <Button onClick={() => reset()}>reset</Button>
                <Button
                    onClick={() => {
                        message.success(`has("1"): ${has("1")}`);
                    }}>
                    has
                </Button>
            </Space>
        </div>
    );
};

export default Demo;

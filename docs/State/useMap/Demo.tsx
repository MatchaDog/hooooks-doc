import react, { FC } from "react";
import { useMap } from "hooooks";

import { Tag, Button, Space, message } from "antd";

const Demo: FC = () => {
    const [map, { get, setAll, set, remove, has, clear, reset }] = useMap<string, number>([["1", 123]]);

    const handleClose = (removedTag) => {
        remove(removedTag[0]);
    };

    return (
        <div>
            <div style={{ marginBottom: "15px" }}>{JSON.stringify(Array.from(map))}</div>
            <div style={{ marginBottom: "15px" }}>
                {Array.from(map).map((i, index) => (
                    <Tag key={i[0]} closable={index !== 0} onClose={() => handleClose(i)}>
                        {i[1]}
                    </Tag>
                ))}
            </div>

            <Space>
                <Button
                    onClick={() => {
                        message.success(`get("1"): ${get("1")}`);
                    }}>
                    get
                </Button>
                <Button
                    onClick={() => {
                        setAll([
                            [
                                Math.floor(Math.pow(10, 6) * Math.random()).toString(),
                                Math.floor(Math.pow(10, 6) * Math.random()),
                            ],
                            [
                                Math.floor(Math.pow(10, 6) * Math.random()).toString(),
                                Math.floor(Math.pow(10, 6) * Math.random()),
                            ],
                        ]);
                    }}>
                    setAll
                </Button>
                <Button
                    onClick={() => {
                        set(
                            Math.floor(Math.pow(10, 6) * Math.random()).toString(),
                            Math.floor(Math.pow(10, 6) * Math.random()),
                        );
                    }}>
                    set
                </Button>
                <Button
                    onClick={() => {
                        message.success(`has("1"): ${has("1")}`);
                    }}>
                    has
                </Button>
                <Button
                    onClick={() => {
                        reset();
                        message.success("初始化成功");
                    }}>
                    reset
                </Button>
                <Button
                    onClick={() => {
                        clear();
                        message.success("清除成功");
                    }}>
                    clear
                </Button>
            </Space>
        </div>
    );
};

export default Demo;

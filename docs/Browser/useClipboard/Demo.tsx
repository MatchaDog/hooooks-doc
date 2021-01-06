import React, { FC, useState } from "react";

import { useClipboard } from "hooooks";

import { Button, Input, Space, message } from "antd";

const Demo: FC = () => {
    const { readFromClipboard, copy2Clipboard } = useClipboard();

    const [clipboardTxt, setClipboard] = useState("");
    const [value, setValue] = useState("");
    return (
        <div>
            <div>剪切板内容：{clipboardTxt}</div>
            <Input value={value} onChange={(e) => setValue(e.target.value)}></Input>
            <Space>
                <Button
                    onClick={async () => {
                        try {
                            const text = await readFromClipboard();
                            setClipboard(text);
                        } catch (e) {
                            message.error(e);
                            console.log(e);
                        }
                    }}>
                    read
                </Button>
                <Button
                    onClick={async () => {
                        try {
                            await copy2Clipboard(value);
                        } catch (e) {
                            message.error(e);
                            console.log(e);
                        }
                    }}>
                    write
                </Button>
            </Space>
        </div>
    );
};

export default Demo;

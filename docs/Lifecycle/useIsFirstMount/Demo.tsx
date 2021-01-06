import React, { FC } from "react";
import { useUpdate, useIsFirstMount } from "hooooks";
import { Button } from "antd";

const Demo: FC = () => {
    const is = useIsFirstMount();
    const fn = useUpdate();

    return (
        <div>
            <Button
                onClick={() => {
                    fn();
                }}>
                click here to update component
            </Button>
            {is ? "first mount" : "not first"}
        </div>
    );
};

export default Demo;

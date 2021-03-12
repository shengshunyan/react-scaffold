/**
 * @desc antd示例页面
 * @author shengshunyan
 * @date 2020-09-10
 */

import React from 'react';
import { Button } from 'antd';

const Antd: React.FunctionComponent = () => {
    const onClick = () => {
        throw new Error('test error');
    };

    return (
        <div>
            this is antd page
            <Button type="primary" onClick={onClick}>Button</Button>
        </div>
    );
};

export default React.memo(Antd);

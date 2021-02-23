/**
 * @desc todo header
 * @author shengshunyan
 * @date 2021-02-22
 */

import React from 'react';
import style from './index.scss';

const Header: React.FunctionComponent = () => {
    return (
        <div className={style['header-text']}>todos</div>
    );
};

export default React.memo(Header);

/**
 * @desc todo input
 * @author shengshunyan
 * @date 2021-02-22
 */

import React, { useCallback, useState } from 'react';
import { useStoreActions } from 'easy-peasy';

import { StoreModel } from '../../../common/store';

import style from './index.scss';

const Input: React.FunctionComponent = () => {
    const { addTodoItem } = useStoreActions<StoreModel>(actions => actions.todo);

    const [value, setValue] = useState('');

    const onInputChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onInputKeyUp = useCallback(e => {
        if(e.keyCode === 13 && value.length > 0) {
            addTodoItem(value);
            setValue('');
        }
    }, [addTodoItem, value]);

    return (
        <input 
            className={style['input-container']} 
            placeholder="What needs to be done?" 
            onKeyUp={onInputKeyUp}
            value={value}
            onChange={onInputChange}
        />
    );
};

export default React.memo(Input);

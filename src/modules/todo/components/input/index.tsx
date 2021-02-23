/**
 * @desc todo input
 * @author shengshunyan
 * @date 2021-02-22
 */

import React, { useCallback, useState } from 'react';
import { createTypedHooks } from 'easy-peasy';

import { StoreModel } from '../../../../common/store';

import style from './index.scss';

const { useStoreActions } = createTypedHooks<StoreModel>();

const Input: React.FunctionComponent = () => {
    const { addTodoItem } = useStoreActions(actions => actions.todo);

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

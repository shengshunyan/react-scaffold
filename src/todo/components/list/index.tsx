/**
 * @desc todo list
 * @author shengshunyan
 * @date 2021-02-22
 */

import React, { useCallback } from 'react';
import { Checkbox } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { createTypedHooks } from 'easy-peasy';

import { TodoItemModel } from '../../common/model';
import { StoreModel } from '../../../common/store';

import style from './index.scss';

const { useStoreActions } = createTypedHooks<StoreModel>();

interface IProps {
    todoList: TodoItemModel[];
}

const List: React.FunctionComponent<IProps> = ({
    todoList,
}) => {
    const { updateTodoItem, deleteTodoItem } = useStoreActions(actions => actions.todo);

    const onIsFinishedChange: (value: boolean, item: TodoItemModel) => void = useCallback((value, item) => {
        updateTodoItem({ ...item, isFinished: value });
    }, [updateTodoItem]);

    const onItemDelete = useCallback(item => {
        deleteTodoItem(item);
    }, [deleteTodoItem]);

    return (
        <div className={style['list-container']}>
            {
                todoList.map((item, index) => (
                    <div className="list-item" key={index}>
                        <Checkbox
                            checked={item.isFinished}
                            onChange={e => onIsFinishedChange(e.target.checked, item)}
                        >{item.content}</Checkbox>
                        <CloseOutlined
                            onClick={() => onItemDelete(item)}
                            className="delete-icon"
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default React.memo(List);

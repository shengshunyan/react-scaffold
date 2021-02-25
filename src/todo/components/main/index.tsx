/**
 * @desc todo
 * @author shengshunyan
 * @date 2020-09-10
 */

import React, { useEffect } from 'react';
import { createTypedHooks } from 'easy-peasy';

import { StoreModel } from '../../../common/store';
import Header from '../header';
import Input from '../input';
import List from '../list';
import Footer from '../footer';

import style from './index.scss';

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>();

const TodoMain: React.FunctionComponent = () => {
    const { visibleTodoList } = useStoreState(state => state.todo);
    const { getTodoList } = useStoreActions(actions => actions.todo);

    // 初始请求todo列表数据
    useEffect(() => {
        getTodoList();
    }, [getTodoList]);

    return (
        <div className={style['module-container']}>
            <Header />
            <div className="content-box">
                <Input />
                <List todoList={visibleTodoList} />
                <Footer />
            </div>
        </div>
    );
};

export default React.memo(TodoMain);

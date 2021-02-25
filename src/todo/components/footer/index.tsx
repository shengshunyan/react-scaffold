/**
 * @desc todo footer
 * @author shengshunyan
 * @date 2021-02-22
 */

import React from 'react';
import { createTypedHooks } from 'easy-peasy';

import { StoreModel } from '../../../common/store';
import { TodoListFilterType } from '../../common/enum';

import style from './index.scss';

const { useStoreState, useStoreActions } = createTypedHooks<StoreModel>();

const Footer: React.FunctionComponent = () => {
    const { itemLeftCount, listFilter } = useStoreState(state => state.todo);
    const { updateListFilter, deleteCompletedItems } = useStoreActions(actions => actions.todo);

    return (
        <div className={style['footer-container']}>
            <div className="left">{itemLeftCount} item left</div>
            <div className="middle">
                <section 
                    className={listFilter === TodoListFilterType.All ? 'active' : ''}
                    onClick={() => updateListFilter(TodoListFilterType.All)}
                >All</section>
                <section 
                    className={listFilter === TodoListFilterType.Active ? 'active' : ''}
                    onClick={() => updateListFilter(TodoListFilterType.Active)}
                >Active</section>
                <section 
                    className={listFilter === TodoListFilterType.Completed ? 'active' : ''}
                    onClick={() => updateListFilter(TodoListFilterType.Completed)}
                >Completed</section>
            </div>
            <div className="right" onClick={deleteCompletedItems as () => void}>Clear Completed</div>
        </div>
    );
};

export default React.memo(Footer);

/**
 * @desc store
 * @author shengshunyan
 * @date 2021-02-23
 */

import { createStore } from 'easy-peasy';
import todo, { TodoModel } from '../modules/todo/store';

export interface StoreModel {
    todo: TodoModel;
}

const storeModel: StoreModel = {
    todo,
};

const store = createStore(storeModel);

export default store;
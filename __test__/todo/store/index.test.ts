/**
 * @desc todo store test
 * @author shengshunyan
 * @date 2021-02-23
 */

import { createStore } from 'easy-peasy';
import todo from '../../../src/todo/store';

describe('test todo store actions', () => {
    test('addTodoItem', async () => {
        // arrange
        const newTodoItem = 'foo';
        const store = createStore(todo);
    
        // act
        store.getActions().addTodoItem(newTodoItem);
    
        // assert
        expect(store.getState().todoList[0].content).toEqual('foo');
    });
});
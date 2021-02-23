/**
 * @desc todo store
 * @author shengshunyan
 * @date 2021-02-23
 */

import { action, thunk, Action, Thunk, computed, Computed } from 'easy-peasy';
import axios from 'axios';

import { TodoItemModel } from '../common/model';
import { TodoListFilterType } from '../common/enum';

export interface TodoModel {
    /**
     * @desc state
     * todoList todo列表
     * listFilter todo列表筛选类型
     */
    todoList: TodoItemModel[];
    listFilter: TodoListFilterType;

    /**
     * @desc computed
     * itemLeftCount 剩余未完成总数
     * visibleTodoList 经过筛选的实际展示的todo列表
     */
    itemLeftCount: Computed<TodoModel, number>;
    visibleTodoList: Computed<TodoModel, TodoItemModel[]>;

    /**
     * @desc actions
     * getTodoList 获取todo列表数据
     */
    getTodoList: Thunk<TodoModel>;
    setTodoList: Action<TodoModel, TodoItemModel[]>;
    updateTodoItem: Action<TodoModel, TodoItemModel>;
    deleteTodoItem: Action<TodoModel, TodoItemModel>;
    addTodoItem: Action<TodoModel, string>;
    updateListFilter: Action<TodoModel, TodoListFilterType>;
    deleteCompletedItems: Action<TodoModel>;
}

const todo: TodoModel = {
    todoList: [],
    listFilter: TodoListFilterType.All,

    itemLeftCount: computed(({ todoList }) => {
        return todoList.filter(item => !item.isFinished).length;
    }),
    visibleTodoList: computed(({ todoList, listFilter }) => {
        if (listFilter === TodoListFilterType.Active) {
            return todoList.filter(item => !item.isFinished);
        }

        if (listFilter === TodoListFilterType.Completed) {
            return todoList.filter(item => item.isFinished);
        }

        return todoList;
    }),

    getTodoList: thunk(async actions => {
        const res = await axios.get('/api/todo/list');
        actions.setTodoList(res.data.data);
    }),
    setTodoList: action((state, payload) => {
        state.todoList = payload;
    }),
    updateTodoItem: action((state, payload) => {
        const { todoList } = state;
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === payload.id) {
                todoList[i] = payload;
            }
        }
    }),
    deleteTodoItem: action((state, payload) => {
        const { todoList } = state;
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === payload.id) {
                todoList.splice(i, 1);
            }
        }
    }),
    addTodoItem: action((state, payload) => {
        const newItem: TodoItemModel = {
            id: Date.now(),
            content: payload,
            isFinished: false,
        };

        state.todoList.push(newItem);
    }),
    updateListFilter: action((state, payload) => {
        state.listFilter = payload;
    }),
    deleteCompletedItems: action(state => {
        state.todoList = state.todoList.filter(item => !item.isFinished);
    }),
};

export default todo;
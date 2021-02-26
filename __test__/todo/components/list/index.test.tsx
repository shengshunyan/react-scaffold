/**
 * @desc todo list test
 * @author shengshunyan
 * @date 2021-02-22
 */

import React from 'react';
import '@testing-library/jest-dom';
import { StoreProvider } from 'easy-peasy';
import { render, screen } from '@testing-library/react';
import store from '../../../../src/common/store';
import TestElements from '../../../../src/todo/components/list';

describe('<List />', () => {
    test('list should have two item', async () => {
        // arrange
        const mockList = [
            {
                'id': 1,
                'content': 'aaaa',
                'isFinished': true,
            },
            {
                'id': 2,
                'content': 'bbbb',
                'isFinished': false,
            },
        ];
        const app = (
            <StoreProvider store={store}>
                <TestElements todoList={mockList} />
            </StoreProvider>
        );

        // act
        render(app);

        // assert
        expect(screen.getByText('aaaa')).toBeInTheDocument();
        expect(screen.getByText('bbbb')).toBeInTheDocument();
    });
});
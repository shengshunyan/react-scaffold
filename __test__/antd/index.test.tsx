/**
 * @desc antd示例页面 test
 * @author shengshunyan
 * @date 2021-02-26
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestElements from '../../src/antd';

describe('<Antd />', () => {
    test('antd page text should exist', () => {
        render(<TestElements />);
        expect(screen.getByText('this is antd page')).toBeInTheDocument();
    });

    test('button should exist', () => {
        render(<TestElements />);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });
});
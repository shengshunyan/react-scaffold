/**
 * @desc 项目入口js文件
 * @author shengshunyan
 * @date 2020-09-10
 */

import React from 'react';
import ReactDOM from 'react-dom';
// 引入babel polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 引入router组件
import {
    BrowserRouter as Router,
} from 'react-router-dom';
// 引入antd组件库
import 'antd/dist/antd.css';
// 项目资源
import './index.scss';
import App from './components/app';

function Root() {
    return (
        <div className="root-container">
            <Router>
                <App />
            </Router>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

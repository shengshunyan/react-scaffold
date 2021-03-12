/**
 * @desc 项目入口js文件
 * @author shengshunyan
 * @date 2020-09-10
 */

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
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
import store from './common/store';
import App from './components/app';
import './index.scss';

function Root() {
    /**
     * @desc webfunny前端监控系统所需信息
     * userId 代表用户的唯一标识，手机号，用户名，只要能够表示用户唯一性的就行
     * userTag 代表用户的标签，比如：公司A, 公司B；等级1, 等级2 等等
     * projectVersion 代表你项目发布的版本号，用于排查具体版本的错误
     */
    useEffect(() => {
        window.localStorage.wmUserInfo = JSON.stringify({ userId: 'userId', userTag: 'tag', projectVersion: '1.0.1' });
    }, []);

    return (
        <div className="root-container">
            <StoreProvider store={store}>
                <Router>
                    <App />
                </Router>
            </StoreProvider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

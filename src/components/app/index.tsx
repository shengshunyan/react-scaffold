/**
 * @desc App的页面结构
 * @author shengshunyan
 * @date 2020-09-10
 */

import React, { lazy, Suspense } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
import url from '../../common/url';
import style from './index.scss';

// react原生支持的代码分割：lazy 和 Suspense
const Home = lazy(() => import(/* webpackChunkName: "Home" */'../../home'));
const Todo = lazy(() => import(/* webpackChunkName: "Todo" */'../../todo/components/main'));
const Antd = lazy(() => import(/* webpackChunkName: "Antd" */'../../antd'));

const { Header, Content, Footer } = Layout;

const App: React.FunctionComponent = () => {
    return (
        <Layout className={style['app-container']}>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[url.app.home.path]}>
                    <Menu.Item key={url.app.home.path}>
                        <Link to={url.app.home.path}>{url.app.home.title}</Link>
                    </Menu.Item>
                    <Menu.Item key={url.app.todo.path}>
                        <Link to={url.app.todo.path}>{url.app.todo.title}</Link>
                    </Menu.Item>
                    <Menu.Item key={url.app.antd.path}>
                        <Link to={url.app.antd.path}>{url.app.antd.title}</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <Switch>
                        <Route path={url.app.home.path}>
                            <Suspense fallback={<div>loading</div>}>
                                <Home />
                            </Suspense>
                        </Route>
                        <Route path={url.app.todo.path}>
                            <Suspense fallback={<div>loading</div>}>
                                <Todo />
                            </Suspense>
                        </Route>
                        <Route path={url.app.antd.path}>
                            <Suspense fallback={<div>loading</div>}>
                                <Antd />
                            </Suspense>
                        </Route>
                        <Route
                            path={url.app.root.path}
                            render={() => <Redirect to={url.app.home.path} />}
                        />
                    </Switch>
                </div>
            </Content>
            <Footer>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default React.memo(App);

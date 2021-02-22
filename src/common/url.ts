/**
 * @desc 项目路由
 * @author shengshunyan
 * @date 2020-09-10
 */

const url = {
    root: '/',
    login: {
        path: '/login',
        title: '登录页',
    },
    app: {
        root: {
            path: '/app',
            title: '权限页',
        },
        index: {
            path: '/app/index',
            title: '首页',
        },
        todo: {
            path: '/app/todo',
            title: 'todo',
        },
        antd: {
            path: '/app/antd',
            title: 'Antd',
        },
    },
};

export default url;

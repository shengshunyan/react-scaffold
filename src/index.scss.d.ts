/**
 * @desc 解决ts针对 import style from './index.scss' 语句的报错，可参考：https://juejin.cn/post/6844903560056930311
 * @author shengshunyan
 * @date 2021-02-21
 */

declare module '*.scss' {
    const content: any;
    export default content;
}
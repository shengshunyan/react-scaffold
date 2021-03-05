/**
 * @desc end to end test
 * @author shengshunyan
 * @date 2021-03-05
 */

describe('The entry of Application', () => {
    beforeAll(async () => {
        // 设置大概网页能请求到并渲染的时间
        jest.setTimeout(30000);
        await page.goto('http://mall.shengshunyan.xyz');
    });

    it('should display three menu', async () => {
        await expect(page).toMatchElement('.ant-layout-header');
        await expect(page).toMatch('home');
        await expect(page).toMatch('todo');
        await expect(page).toMatch('Antd');
    });

    it('should display breadcrumb', async () => {
        await expect(page).toMatchElement('.ant-breadcrumb');
    });

    it('should display content box', async () => {
        await expect(page).toMatchElement('.site-layout-content');
    });
});
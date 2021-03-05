/**
 * @desc end to end test - todo page
 * @author shengshunyan
 * @date 2021-03-05
 */

describe('The home page', () => {
    beforeAll(async () => {
        jest.setTimeout(30000);
        await page.goto('http://mall.shengshunyan.xyz/app/todo');
    });

    it('should display todo page', async () => {
        await expect(page).toMatch('todos');
    });

    it('switch filter type', async () => {
        await expect(page).toMatchElement('.content-box .active', { text: 'All' });
        await expect(page).toClick('.content-box .middle > section:nth-child(2)', { text: 'Active' });
        await expect(page).toMatchElement('.content-box .active', { text: 'Active' });
    });
});
/**
 * @desc end to end test - home page
 * @author shengshunyan
 * @date 2021-03-05
 */

describe('The home page', () => {
    beforeAll(async () => {
        jest.setTimeout(30000);
        await page.goto('http://mall.shengshunyan.xyz/app/home');
    });

    it('should display home page', async () => {
        await expect(page).toMatch('this is home page');
    });
});
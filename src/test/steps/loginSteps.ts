import { Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';
import {chromium, Page, Browser, expect } from "@playwright/test";
let browser: Browser;
let page: Page;

setDefaultTimeout(60 * 1000 * 2)

         Given('The user navigates to the page', async function () {
            browser = await chromium.launch({headless: false});
            page = await browser.newPage();
            await page.goto("https://www.saucedemo.com/");    
         });
       
         When('the user enters the username as {string}', async function (username) {
            await page.fill('//input[@id="user-name"]', username);
        });
       
         When('the user enters the password as {string}', async function (password) {
            await page.fill('//input[@id="password"]', password);
        });

         When('the user clicks on the login button', async function () {
            await page.click('//input[@id="login-button"]');
         });
       
         Then('user login successfully', async function () {
            const currentURL = page.url();
            expect(currentURL).toContain('inventory');
         });
       
         Then('user shouldn’t login successfully', async function () {
            const errorButton = page.locator("//button[@class='error-button']");
            await expect(errorButton).toBeVisible();
         });
       

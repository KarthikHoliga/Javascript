import { chromium, Browser, Page, test } from "@playwright/test";
test("Verify the Browser commands", async ({}) => {
let browser: Browser = await chromium.launch({ channel: "chrome" });
let newPage: Page = await browser.newPage();
await newPage.goto("https://www.google.com");
console.log(await newPage.title());
console.log(newPage.url());
await newPage.goto("https://orangehrm.com/contact-sales");
console.log(await newPage.title());
console.log(newPage.url());
await newPage.goBack();
console.log(await newPage.title());
await newPage.goForward();
console.log(await newPage.title());
await newPage.close();
});
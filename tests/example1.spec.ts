import { test, expect } from '@playwright/test'

test("Login", async function({page}) {
  //launch the url
  //fill the username
  //fill the password
  //click on login button
  //validate the login is successfully
  await page.goto("https://www.rss.org/login")
  await page.fill("#username", "Karthik H")
  await page.fill("#password", "password@123")
  await page.click("#login-button")
  await expect(page).toHaveURL("https://www.rss.org/dashboard")
})
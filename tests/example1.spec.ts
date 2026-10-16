import { test, expect } from '@playwright/test'

test('Login', async function({page}) {
  //launch the url
  //fill the username
  //fill the password
  //click on login button
  //validate the login is successfully
 
  await page.goto("https://practicetestautomation.com/practice-test-login/")

  await page.getByRole("textbox", {name: "Username"}).fill("student")
   
  await page.getByLabel("Password").fill("Password123")

  await expect(page.getByRole("textbox", {name: "Username"})).toHaveValue("student")
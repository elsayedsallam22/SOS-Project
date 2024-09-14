const { test, expect } = require('@playwright/test');
import { LoginPage } from '../Pages/LoginPage';
const { log } = require('console');

test('Verify login with valid username and valid password', async ({ page }) => {

// login

const login=new LoginPage(page);
  await login.gotoLoginPage();
    // asseration for Title
  await expect(page).toHaveTitle("نظام العمليات الأمنية");
  await login.login("60111",'123123123');
  await page.waitForTimeout(3000);
   // assertion for URL
  await expect(page).toHaveURL('https://dev.sos.sbmsec.com/');
  
  

 
});
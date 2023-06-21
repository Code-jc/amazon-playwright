import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';

test('Verify the Login Page ', async ({ page, baseURL }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    
    //Navigates to Amazon.com 
    await page.goto('/');
  
    // Wait until the page is loaded and and verify that Amazon page title
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle(/Amazon/);

    //Hover the Accounts & lists links and Sign In
    homePage.accountsLists.hover();
    homePage.signInBtn.click();
  
    // Verify Login Page title
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle(/Amazon Sign-In/);

    // Verify the elements on the Login Page


  });

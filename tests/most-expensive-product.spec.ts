import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';

test('Retrieve the first ten displayed items in a search and get the most expensive. ', async ({ page, baseURL }) => {

    const homePage = new HomePage(page);
    const productName = "Jeans";
    const itemsToValidate = 10;
    
    //Navigates to Amazon.com 
    await page.goto('/');
  
    // Wait until the page is loaded and and verify that Amazon page title
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle(/Amazon/);
  
    // Search Product
    await homePage.searchProduct(productName);

    //Get the search results and the most expensive product 
    const searchResults =await homePage.getSearchResults(itemsToValidate);
    const mostExpensiveProduct = await homePage.getMostExpensiveProduct(searchResults);
  
    console.log(`The MOST EXPENSIVE product of the search result is: ${JSON.stringify(mostExpensiveProduct, null, 2)}`);
  
  });
  
  
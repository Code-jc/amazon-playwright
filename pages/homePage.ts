import { Locator, Page } from "@playwright/test";

export default class HomePage {
    private searchBar: Locator;
    public accountsLists: Locator;
    public signInBtn: Locator;
    public startHereLink: Locator;

    constructor(public page: Page) {
        this.page = page;
        this.searchBar = this.page.locator('#twotabsearchtextbox');
        this.accountsLists = this.page.locator('#nav-link-accountList');
        this.signInBtn = this.page.locator('#nav-action-inner');
        this.startHereLink = this.page.locator('.nav-a');

       }

   
       // Search any product on the Search Bar and press Enter
    async searchProduct(productName: string) {
        await this.searchBar.clear();
        await this.searchBar.fill(productName);
        await this.searchBar.press('Enter');
    }

    // Get the Name and the Price of the first 10 products of the results
    async getSearchResults(count: number) {
        await this.page.waitForSelector('[data-component-type="s-search-result"]');
        const results = await this.page.$$('[data-component-type="s-search-result"]');
        const products: { productName: string, productPrice: string }[] = [];

        if (results) {
            for (let i = 0; i < count && i < results.length; i++) {
                const result = results[i];

                const productName = await result.$eval('h2 span', (element) => element.textContent?.trim() || 'No Product Name');
                const productPrice = await result.$eval('.a-offscreen', (element) => {
                    const priceText = element.textContent?.trim() || 'No Price';
                    return priceText.replace('$', '')
                });

                products.push({ productName, productPrice });
                console.log(`Product ${i + 1}: ${productName}  -  Product Price: ${productPrice}`);
            }
            return products;
        }
        else {
            console.log('No result found.');
            return [];
        }

    }

    // Get the Cheapest product from the Search Results
    async getCheapestProduct(searchResults: { productName: string, productPrice: string }[]) {
        const cheapestProduct = searchResults.reduce((prev, current) =>
            Number(prev.productPrice) < Number(current.productPrice) ? prev : current);

        return cheapestProduct;
    }

    // Get the most expensive product from the Search Results
    async getMostExpensiveProduct(searchResults: { productName: string, productPrice: string }[]) {
        const mostExpensiveProduct = searchResults.reduce((prev, current) =>
            Number(prev.productPrice) > Number(current.productPrice) ? prev : current);

        return mostExpensiveProduct;
    }

}
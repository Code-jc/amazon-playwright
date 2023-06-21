import { Locator, Page } from "@playwright/test";

export default class LoginPage {
    private emailTexbox: Locator;
    private continueButton: Locator;
    
    constructor(public page: Page) {
        this.page = page;
        this.emailTexbox = this.page.locator('#ap_email');
        this.continueButton = this.page.locator('#continue');
    }

    verifyPageElements() {
        
    }

    


    


}
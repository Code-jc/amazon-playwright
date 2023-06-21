import { Locator, Page } from "@playwright/test";

export default class RegisterPage {
    private nameField: Locator;
    private mobileOrEmailField: Locator;
    private passwordField: Locator;
    private reEnterPassField: Locator;
    private verifyEmailBtn: Locator;



    constructor(public page: Page) {
        this.page = page;
        this.nameField = this.page.locator('#ap_customer_name');
        this.mobileOrEmailField = this.page.locator('#ap_email');
        this.passwordField = this.page.locator('#ap_password');
        this.reEnterPassField = this.page.locator('#ap_password_check');
        this.verifyEmailBtn = this.page.locator('#continue');
    }

    verifyPageElements() {
        
    }

   
}
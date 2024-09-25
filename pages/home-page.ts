<<<<<<< HEAD
import { type Locator, type Page, expect } from "playwright/test";
=======
import { type Locator, type Page } from "playwright/test";
>>>>>>> 92c5538c6fc1230b075b4b3bc42581a13324e4a9

export class HomePage{
    //variables
    readonly page: Page;
<<<<<<< HEAD
    readonly getStartedButton: Locator;
    readonly pageTitle: RegExp;
=======
>>>>>>> 92c5538c6fc1230b075b4b3bc42581a13324e4a9

    //constructor
    constructor (page: Page) {
        this.page = page;
<<<<<<< HEAD
        this.getStartedButton = page.getByRole('link', { name: 'Get Started' });
        this.pageTitle = /Playwright/;
    }

    //methods
    async clickGetStarted(){
        await this.getStartedButton.click();
    }
    
    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }
=======
    }

    //methods

>>>>>>> 92c5538c6fc1230b075b4b3bc42581a13324e4a9
}   

export default HomePage;
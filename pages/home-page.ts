import { type Locator, type Page } from "playwright/test";

export class HomePage{
    //variables
    readonly page: Page;

    //constructor
    constructor (page: Page) {
        this.page = page;
    }

    //methods

}   

export default HomePage;
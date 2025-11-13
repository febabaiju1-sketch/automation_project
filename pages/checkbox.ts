import { Page } from '@playwright/test';   
import { URL } from '../utils/testdata';

export class CheckBox{
    readonly page:Page;

    constructor(page:Page){
        this.page=page
    }

    async checkBox(){
        await this.page.goto(URL.check_url)
        this.page.getByText("Checkboxes");
        await this.page.locator("#checkboxes input").first().check();
        await this.page.locator("#checkboxes input").nth(1).uncheck();
        console.log("checked")
    }
}

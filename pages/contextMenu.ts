import { Page } from "playwright";
import { expect } from "@playwright/test";
import { URL } from "../utils/testdata";

export class ContextMenu{
    readonly page:Page;

    constructor(page:Page){
        this.page =page
    }

    async rightClick(){
        await this.page.goto(URL.right_url);

        await this.page.locator("#hot-spot").click({button:'right'});
        console.log("clicked")
        await this.page.locator("#content").click({button:"left"});

    }
}
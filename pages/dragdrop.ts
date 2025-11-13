import { Page } from "playwright";
import { URL } from "../utils/testdata";

export class DragAndDrop {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page
    }
    async dragdrop() {
        await this.page.goto(URL.drag_url);
        const colA = this.page.locator("#column-a");
        const colB = this.page.locator("#column-b")

        await colA.dragTo(colB);
        console.log("dragged a to b");
        await colB.dragTo(colA)
    }
}
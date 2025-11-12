import { Page } from '@playwright/test';
import * as XLSX from 'xlsx';

export class InfoPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    async addDetails() {
        console.log("Adding details from excel");
        const data = XLSX.readFile('./utils/auto.xlsx');
        const sheet = data.Sheets['Sheet1'];
        console.log(sheet);
        const rows = XLSX.utils.sheet_to_json(sheet) as { FirstName: string; LastName: string; Email: string;}[];
        console.log(rows);
        for (const row of rows) {
            await this.page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
            console.log("filling details for:", row.FirstName, row.LastName, row.Email);
            await this.page.fill("#FirstName",row.FirstName);
            await this.page.fill("#LastName",row.LastName);
            await this.page.fill("#Email",row.Email);
            console.log("Submitted details for:", row.FirstName, row.LastName, row.Email);
            await this.page.waitForTimeout(1000);
}
}
}
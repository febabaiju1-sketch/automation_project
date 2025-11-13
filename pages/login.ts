import { Page } from "playwright";
import * as XLSX from 'xlsx';
import {URL} from '../utils/testdata'

export class LoginPage{
    readonly page:Page;
    constructor(page:Page){
        this.page =page;
    }

    async login(){
        
        const data = XLSX.readFile('./utils/cred.xlsx')
        const sheet = data.Sheets['Sheet1'];
        const rows :any[]= XLSX.utils.sheet_to_json(sheet);
        for (const row of rows){
            await this.page.goto(URL.login_url);
            await this.page.fill("#username",row.username);
            await this.page.fill("#password",row.password);
            await this.page.getByRole('button',{name:'Login'}).click();
        }
    }
}
import { Browser,BrowserContext,Page } from "playwright";
import { basicAuth } from "../utils/testdata";


export class BasicAuthPage{
    private browser :Browser;
    private page!:Page;
    private context!:BrowserContext;

    constructor(browser:Browser){
        this.browser=browser;
    }
    async inputCred() {
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        
        // Build URL with embedded credentials
        const urlWithAuth = `https://${basicAuth.username}:${basicAuth.password}@the-internet.herokuapp.com/basic_auth`;
        
        console.log(`Navigating with credentials in URL...`);
        await this.page.goto(urlWithAuth);
        
        await this.page.waitForSelector("p");
        console.log("✅ Successfully authenticated!");
    }

    

     async verifyLoginSuccess() {
    const text = await this.page.textContent("p");
    console.log("Login message:", text);
  }
  async close() {
        await this.context?.close();
    }

    //it is not the dom related so Useing Browser Context with httpCredentials  
    async inputCredusinghttp(){
        console.log("Creating context with credentials...");
        this.context =await this.browser.newContext({    httpCredentials:{ username:basicAuth.username,
                                                                           password:basicAuth.password }
        });
        this.page =await this.context.newPage();
        await this.page.goto(basicAuth.url)
        const response = await this.page.goto(basicAuth.url, { waitUntil: 'domcontentloaded',
                                                               timeout: 30000 });
         if (response?.status() === 200) {
        console.log("✅ Authentication successful!");
    } else if (response?.status() === 401) {
        console.log("❌ Authentication failed - Wrong credentials!");
    }
    await this.page.waitForSelector("p", { timeout: 10000 });
    }
}
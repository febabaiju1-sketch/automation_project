// tests/basicAuth.spec.ts
import { Browser, test, Page, chromium } from "@playwright/test";
import { BasicAuthPage } from "../pages/auth";
import { URL } from "../utils/testdata";
import { CheckBox } from "../pages/checkbox";
import { ContextMenu } from "../pages/contextMenu";
import { DragAndDrop } from "../pages/dragdrop";
import { LoginPage } from "../pages/login";

let browser: Browser;
let page: Page;

test.describe('Automation tests', () => {
  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(URL.base_url);
  });
  test("Logining in",async() => {
    const login = new LoginPage(page);
    await login.login();
  })

  test(" Verifying Checkboxes", async() =>{
    const checkBoxes = new CheckBox(page);
    await checkBoxes.checkBox();
  })

  test(" Right click " , async() => {
    const context = new ContextMenu(page);
    await context.rightClick();
  })

  test("Drag and drop", async() =>{
    const drag = new DragAndDrop(page);
    await drag.dragdrop();
  })
    // test("Basic Auth login works", async ({ browser }) => {
  //   const authPage = new BasicAuthPage(browser);
  //   await authPage.inputCred();
  //   await authPage.verifyLoginSuccess();
  //   await authPage.close();
  // });
})

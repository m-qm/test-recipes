const puppeteer = require ('puppeteer');

const APP = 'http://localhost:3000/';

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll (async () => {
  browser = await puppeteer.launch ({
    headless: false,
    slowMo: 0,
    //   args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage ();
  await page.setViewport ({width, height});

  await page.goto (APP);
});

afterAll (async () => {
  browser.close ();
});

let recipeNameObj; // Used in Tests: Search for Chanel and Select perfume
test (
  'Search for Pizza',
  async () => {
    const searchBox = await page.$ ('#search-input');
    await searchBox.type ('Pizza');
    await page.waitForSelector ('.title');
    recipeNameObj = await page.$ ('.title');
    const elementName = await recipeNameObj.getProperty ('textContent');
    const elementNameText = await elementName.jsonValue ();
    expect (elementNameText).toBe ('Pizza Tonno E Cipolla');
  },
  16000
);

test (
  'Select perfume',
  async () => {
    await page.waitForSelector ('.ingredients');
    recipeNameObj = await page.$ ('.ingredients');
    const elementIngredient = await recipeNameObj.getProperty ('textContent');
    const elementText = await elementIngredient.jsonValue ();
    expect (elementText).toBe ('pizza, pizza');
  },
  16000
);

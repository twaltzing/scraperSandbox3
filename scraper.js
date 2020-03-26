const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);

    const [el] = await page.$x('//*[@id="mw-content-text"]/div/table[1]/tbody/tr[2]/td/a/img');
    const src = await el.getProperty('src');
    const imgURL = await src.jsonValue();
    console.log({imgURL});

}

scrapeProduct("https://en.wikipedia.org/wiki/Dog");

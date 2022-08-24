const puppeteer = require('puppeteer-core');
    
export default async (req, res) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const qualquerUrl = `https://www.registro.br/tecnologia/ferramentas/whois/?search=obile.com.br`;
    await page.goto(qualquerUrl);
  
    await page.waitForSelector('.whois-content .cell-expiresat', {visible: true});

    const resultado = await page.evaluate(() => {
        return document.querySelector('.whois-content td.cell-expiresat').textContent.trim();
    });
    
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    
    await browser.close();

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ date: dynamicDateString, expiracao: resultado }))    

}
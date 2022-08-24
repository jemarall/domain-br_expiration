function registrobr(request, response) {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
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

    response.json({
        date: dynamicDateString,
        expiracao: resultado
    })

}

export default async registrobr
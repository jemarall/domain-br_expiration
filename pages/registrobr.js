/*
export default async (req, res) => {

    const puppeteer = require('puppeteer');
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

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ date: dynamicDateString, expiracao: resultado }))    

}

*/
/*
const getUserData = async (req, res) => {
	let browser = null

	try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
    
        const qualquerUrl = `https://www.registro.br/tecnologia/ferramentas/whois/?search=obile.com.br`;
        await page.goto(qualquerUrl);
    
        console.log(error)
        
        res.json({
            status: 'ok'
        })
        

	} catch (error) {
		console.log(error)
        return (
		res.json({
			status: 'error',
			data: error.message || 'Something went wrong'
		})
		// return callback(error);
	} finally {
		if (browser !== null) {
			await browser.close()
		}
	}
}
*/

/*
export default function MyComponent() {
    const myVariable = {
        productName : "Water",
        price: 12
    };

return (
<div>
    {myVariable.productName} :  ${myVariable.price}
</div>
);
}
*/


/* WORKINGGGGGGG
import React, { useEffect, useState } from "react";

export default function App() {
    const [val, setVal] = useState();
  
    const getAnswer = async () => {
      const res = await fetch("https://yesno.wtf/api");
      const json = await res.json();
      setVal(json.answer);
    };
  
    useEffect(() => {
      getAnswer();
    }, []);
  
    return <div>{val}</div>;
  }
  */




import React, { useEffect, useState } from "react";

export default function App(req, res) {
    
    const [val, setVal] = useState();
  
    const getAnswer = async () => {

        const puppeteer = require('puppeteer-core');
    
      const res = await fetch("https://yesno.wtf/api");
      const json = await res.json();
      
      setVal(json.answer);
    };
  
    useEffect(() => {
      getAnswer();
    }, []);
  
    return <div>{val}</div>;
  }
  
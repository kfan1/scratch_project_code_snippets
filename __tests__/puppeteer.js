const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:8080/');

  await page.click('#Q2BUptxojsyApTrqNmJM > button:nth-child(3)');

  await page.waitForSelector('#username');

  await page.type('#username', 'newUser4');
  await page.type('#password', 'newPassword4');

  await page.click('#root > form > button');

  await page.waitForSelector('#root > div.cbvV0IVO1AmmzL9HpL9V > div:nth-child(3) > button.k3hLeCvDnsS_Y7Rbw9Gq');

  await page.click('#root > div.cbvV0IVO1AmmzL9HpL9V > div:nth-child(3) > button.k3hLeCvDnsS_Y7Rbw9Gq');

  await page.waitForSelector(
    'body > div.fade.O2LKlGPJ1GtSe3aGdB7I.modal.show > div > div > div.z58aVnSOrnYPQcDDqQnM > input.z9oK0feAfU8rAogDvgMk'
  );
  await page.type(
    'body > div.fade.O2LKlGPJ1GtSe3aGdB7I.modal.show > div > div > div.z58aVnSOrnYPQcDDqQnM > input.z9oK0feAfU8rAogDvgMk',
    'New Snippet',
    { delay: 100 }
  );

  // await page.click('#storedCode');

  // await page.type('#storedCode', 'New Code Snippet');

  await page.click(
    'body > div.fade.O2LKlGPJ1GtSe3aGdB7I.modal.show > div > div > div.modal-footer > button.saveButton.btn.btn-primary'
  );

  await page.click(
    'body > div.fade.O2LKlGPJ1GtSe3aGdB7I.modal.show > div > div > div.modal-footer > button.btn.btn-secondary'
  );

  await page.click('#root > div.cbvV0IVO1AmmzL9HpL9V > div:nth-child(3) > button:nth-child(3)');
})();

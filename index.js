const puppeteer = require('puppeteer');

console.log('Sou um robo e vou destruir a humanidade!!! Muahahahahaha');
''
async function robo() {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    const url = `http://gruposaojudas.com.br/contato`;
    await page.goto(url);
    await page.type('#form-nome', 'Higor Chagas');
    await page.type('#form-email', 'suporte@gruposaojudas.com.br');
    await page.type('#form-telefone', '1158432143');
    await page.type('#form-empresa', 'Testando');
    await page.type('#form-assunto', 'Testando script');
    await page.type('#form-msg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat elit odio, at accumsan mi rutrum non. Pellentesque congue quis libero nec rhoncus. Ut porta tristique arcu eu pretium. Curabitur ut sagittis risus. Aenean in tellus aliquam, imperdiet ex scelerisque, gravida metus. Vivamus efficitur luctus nulla. Vestibulum accumsan risus nec interdum porttitor. Sed consectetur arcu sit amet mauris dictum, eget ullamcorper nunc scelerisque. Donec mollis feugiat rhoncus. ');
    // await page.waitForTimeout(5000);
    // await browser.close();

    

}

robo();
module.exports = (browser) => {
    browser
        .url('https://www.ecosia.org/')
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .assert.visible('input[type=search]')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]')
        .click('button[type=submit]')
        .assert.containsText('.mainline-results', 'Nightwatch.js');

    // https://www.w3.org/TR/webdriver/#locator-strategies
    browser.element('css selector', 'input[type=search]', (result) => {
        if (result.status == 0) {
            console.log(result);
        } else {
            console.log("not found");
        }
    })

    browser.element('css selector', 'input[type=fakesearch0]', (result) => {
        if (result.status == 0) {
            console.log(result);
        } else {
            console.log("not found");
        }
    })

    browser.element('css selector', 'input[type=fakesearch1]', (result) => {
        if (result.status == 0) {
            console.log(result);
        } else {
            console.log("not found!!");
        }
    })

    browser.end();    
};

module.exports = (browser) => {   
    browser
        .url('https://www.ecosia.org/')
        .waitForElementVisible('body')

    
            browser.element('css selector', 'input[name=username]', (result) => {
                if (result.status == 0) {
                    browser.setValue('input[name=username]', garcol)
                } 
            });            
            
            browser.element('css selector', 'input[name=password]', (result) => {
                if (result.status == 0) {
                    browser.setValue('input[name=password]', iloveyou)
                } 
            });            
            

    browser.end();  
}    


module.exports = (browser) => {   
    browser
        .url('http://localhost:3000/test')
        .waitForElementVisible('body')

    
            browser.element('css selector', 'input[name=username]', (result) => {
                if (result.status == 0) {
                    browser.setValue('input[name=username]', 'thaivan')
                } 
            });            
            
            browser.element('css selector', 'input[name=password]', (result) => {
                if (result.status == 0) {
                    browser.setValue('input[name=password]', 'buler lead')
                } 
            });            
            

    browser.pause(10000);
    browser.end();  
}    

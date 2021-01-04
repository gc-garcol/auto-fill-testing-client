const FileUtil = require("../utils/FileUtil");
const axios = require("axios");

const EXECUTOR_FILE = `${__dirname}/_test_executor/TestExecutor.js`;


class NightWatchService {

    constructor() {

    }

    /**
     * 
     * @param {String} filename 
     * @param {Array} data 
     */
    resolveTestCase(testCaseFileName, url, data) {
        const testContent = this.initTestCaseContent(url, data);
        console.log(testContent);

        const executorContent = this.initExecutorContent(testCaseFileName);
        console.log(executorContent);

        this.invokeNightWatch(testCaseFileName, testContent, executorContent);
    }

    /**
     * 
     * @param {String} url 
     * @param {Array} data 
     */
    initTestCaseContent(url, data) {

        const inputCases = [];
        data.forEach(element => {
            inputCases.push(`
            browser.element('css selector', 'input[name=${element.inputName}]', (result) => {
                if (result.status == 0) {
                    browser.setValue('input[name=${element.inputName}]', '${element.inputValue}')
                } 
            });            
            `);
        });    

return `
module.exports = (browser) => {   
    browser
        .url('${url}')
        .waitForElementVisible('body')

    ${inputCases.join("")}

    browser.pause(10000);
    browser.end();  
}    
`;
    }

    initExecutorContent(filename) {
        return `
module.exports = {
    'Test case ${filename}': require('../_test_cases/${filename}'),

    after(browser, done) {
        browser.end(() => {
            console.info('*--*--*--*--*--*--*--*--*--*--*--*--*');
            console.info('*-- Clossing session... Good bye! --*');
            console.info('*--*--*--*--*--*--*--*--*--*--*--*--*');
            done();
        });
      }
  };    
        `
    }

    /**
     * Call api to invoke cmd
     */
    invokeNightWatch(testCaseFileName, testContent, executorContent) {
        let data = {
            testCaseFileName: testCaseFileName,
            testCaseContent: testContent,
            executorContent: executorContent
        }
        axios.post('http://localhost:8080/api/', data).then(response => {
            debugger
            console.log(response);
        });
    }

}

const INSTANCE = new NightWatchService();
module.exports = INSTANCE;
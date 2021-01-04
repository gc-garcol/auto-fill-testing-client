
module.exports = {
    'Test case testfile': require('../_test_cases/testfile'),

    after(browser, done) {
        browser.end(() => {
            console.info('*--*--*--*--*--*--*--*--*--*--*--*--*');
            console.info('*-- Clossing session... Good bye! --*');
            console.info('*--*--*--*--*--*--*--*--*--*--*--*--*');
            done();
        });
      }
  };    
        
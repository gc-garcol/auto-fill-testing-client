
module.exports = {
    'Test case MZMO01_testcase01': require('../_test_cases/MZMO01_testcase01'),

    after(browser, done) {
        browser.end(() => {
            console.info('*--*--*--*--*--*--*--*--*--*--*--*--*');
            console.info('*-- Clossing session... Good bye! --*');
            console.info('*--*--*--*--*--*--*--*--*--*--*--*--*');
            done();
        });
      }
  };    
        
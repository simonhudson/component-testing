'use strict';

module.exports = function() {

    this.Then(/^there is a "(.*)" element$/, function(selector) {
        browser.waitForExist(selector);
    });

};

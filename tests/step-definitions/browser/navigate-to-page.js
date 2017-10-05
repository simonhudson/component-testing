'use strict';

var config = require('../../config');

module.exports = function () {

    this.When(/^I navigate to the "(.*)" page$/, function(page) {
        browser.url(config.root);
    });

};

'use strict'
const exec = require('child_process').execSync;

module.exports.generatePlayBook = function () {
    return true;
}

module.exports.executeChild = function (command) {
    return exec(command, { encoding : 'utf8' });
}
'use strict'
const exec = require('child_process').exec;

module.exports.generatePlayBook = function () {
    return true;
}

module.exports.executeChild = function (command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        // console.log(`stderr: ${stderr}`);
    });
}
"use strict";
//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'assert' provides assertion methods from node
const assert = require("assert");
const util_1 = require("../util");
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';
// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {
    // Defines a Mocha unit test
    test("util", function () {
        assert.equal(false, Number.isNaN(util_1.getYearProgress()));
        assert.equal(false, Number.isNaN(util_1.getMonthProgress()));
        assert.equal(false, Number.isNaN(util_1.getDayProgress()));
    });
});
//# sourceMappingURL=extension.test.js.map
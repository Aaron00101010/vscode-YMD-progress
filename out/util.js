"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
let { showRest, fractionDigits } = vscode.workspace.getConfiguration('YMDProgress');
exports.getYearProgress = () => {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 1);
    let end = new Date(now.getFullYear() + 1, 0, 1);
    let present = ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;
    return Number(showRest ? 100 - present : present.toFixed(fractionDigits));
};
exports.getMonthProgress = () => {
    let now = new Date();
    let start = new Date(now.getFullYear(), now.getMonth(), 1);
    let end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    let present = ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;
    return Number(showRest ? 100 - present : present.toFixed(fractionDigits));
};
exports.getDayProgress = () => {
    let now = new Date();
    let start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    let present = ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;
    return Number(showRest ? 100 - present : present.toFixed(fractionDigits));
};
//# sourceMappingURL=util.js.map
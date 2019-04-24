"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
let statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
statusItem.text = `⏳ ${util_1.getYearProgress()}% ${util_1.getMonthProgress()}% ${util_1.getDayProgress()}%`;
statusItem.command = "extension.YMDProgress";
statusItem.tooltip = "check time progress";
statusItem.show();
let timer;
let update = () => {
    statusItem.text = `⏳ ${util_1.getYearProgress()}% ${util_1.getMonthProgress()}% ${util_1.getDayProgress()}%`;
    timer = setTimeout(update, 10000);
};
function activate(context) {
    timer = setTimeout(update, 10000);
    let disposable = vscode.commands.registerCommand('extension.YMDProgress', () => {
        vscode.window.showInformationMessage(`
			year: ${util_1.getYearProgress()}%      
			month: ${util_1.getMonthProgress()}%      
			day: ${util_1.getDayProgress()}%      
		`);
        clearTimeout(timer);
        timer = setTimeout(update, 10000);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
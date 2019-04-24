
import * as vscode from 'vscode';
import { getYearProgress, getMonthProgress, getDayProgress } from './util'

let statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right)
statusItem.text = `⏳ ${getYearProgress()}% ${getMonthProgress()}% ${getDayProgress()}%`
statusItem.command = "extension.YMDProgress"
statusItem.tooltip = "check time progress"
statusItem.show();

let timer:any
let update = ()=>{
	statusItem.text = `⏳ ${getYearProgress()}% ${getMonthProgress()}% ${getDayProgress()}%`
	timer = setTimeout(update,10000)
}

export function activate(context: vscode.ExtensionContext) {
	timer = setTimeout(update,10000)
	let disposable = vscode.commands.registerCommand('extension.YMDProgress', () => {
		vscode.window.showInformationMessage(`
			year: ${getYearProgress()}%      
			month: ${getMonthProgress()}%      
			day: ${getDayProgress()}%      
		`);
		clearTimeout(timer);
		timer = setTimeout(update,10000)
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {

}

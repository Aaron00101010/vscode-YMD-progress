import * as vscode from 'vscode';
let { showRest, fractionDigits } = vscode.workspace.getConfiguration('YMDProgress');

export let getYearProgress = (): number => {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 1);
  let end = new Date(now.getFullYear() + 1, 0, 1);
  let present = ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100
  return Number(showRest ? 100 - present : present.toFixed(fractionDigits))
}

export let getMonthProgress = (): number => {
  let now = new Date();
  let start = new Date(now.getFullYear(), now.getMonth(), 1);
  let end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  let present = ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100
  return Number(showRest ? 100 - present : present.toFixed(fractionDigits))
}

export let getDayProgress = (): number => {
  let now = new Date();
  let start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  let present = ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100
  return Number(showRest ? 100 - present : present.toFixed(fractionDigits))
}
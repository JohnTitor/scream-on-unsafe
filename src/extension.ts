// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "scream-on-unsafe" is now active!');

    let activeTextEditor = vscode.window.activeTextEditor;
    let text: string = "";

    vscode.window.onDidChangeVisibleTextEditors(() => {
        activeTextEditor = vscode.window.activeTextEditor;
    });

    vscode.workspace.onDidChangeTextDocument(e => {
        for (let val of e.contentChanges) {
            text += val.text;
        }

        // console.log(text);
        if (text.includes("unsafe")) {
            vscode.window.showInformationMessage('screeeeeeeam!!!');
            const audioExec: string = vscode.workspace.getConfiguration('screamOnUnsafe').audioExec;
            exec(audioExec, (err, stdout) => {
                console.log("result: ", err, stdout);
            });

            text = "";
        }

        // Clear the text buffer at some point.
        if (text.length >= 256) {
            text = "";
        }
    });
}

// this method is called when your extension is deactivated
export function deactivate() {}

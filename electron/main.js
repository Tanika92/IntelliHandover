const { app, BrowserWindow,dialog,ipcMain } = require("electron");
async function selectProjectFolder() {
    const result = await dialog.showOpenDialog({
        properties: ["openDirectory"]
    });

    return result.filePaths[0] || null;
}
ipcMain.handle("select-project-folder", async () => {
    return await selectProjectFolder();
});

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            preload:__dirname+"/preload.js"
        }
    });

    win.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);
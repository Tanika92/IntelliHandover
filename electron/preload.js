const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    selectProjectFolder: () => ipcRenderer.invoke("select-project-folder")
});
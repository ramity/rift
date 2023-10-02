const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const THREE = require('three')

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    mainWindow.loadFile('index.html')
    mainWindow.webContents.openDevTools()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('getTHREE', (event) => {
    event.sender.send('handleTHREE', new THREE.Scene())
})

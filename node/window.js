const { BrowserWindow, ipcMain } = require('electron')

var mainWindow = null

const initWindow = () => {
  mainWindow = new BrowserWindow({
    height: 768,
    width: 1366,
    minWidth: 800,
    minHeight: 600,
    title: 'Demo',
    type: 'hidden'
  })
  mainWindow.loadURL('http://localhost:8080/#/')
  mainWindow.webContents.openDevTools()
}

const getWindow = () => mainWindow

module.exports = { initWindow, getWindow } 
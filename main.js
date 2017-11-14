const { app, BrowserWindow, ipcMain } = require('electron')

var mainWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
      height: 600,
      width: 800
  })
  mainWindow.loadURL('http://localhost:8080/#/')
  mainWindow.webContents.openDevTools();
})

app.on('window-all-closed', () => {
  app.quit()
})
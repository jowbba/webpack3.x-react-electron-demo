const { app, BrowserWindow, ipcMain } = require('electron')
const { initWindow, getWindow } = require('./node/window')
app.on('ready', function() {
  initWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})
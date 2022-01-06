const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    
    win.loadFile('index.html')    
    
    //remove in production
    win.webContents.openDevTools({ mode: 'detach' });
    
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
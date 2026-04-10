const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const isDev = process.env.NODE_ENV === 'development';

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (isDev) {
    // In dev mode load Angular dev server with hot reload
    win.loadURL('http://localhost:4200');
    win.webContents.openDevTools();

    // Watch for file changes and reload
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
      hardResetMethod: 'exit',
    });
  } else {
    // In production load built Angular app
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, '..', 'dist', 'lumen-fe', 'browser', 'index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  win.on('closed', () => app.quit());
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

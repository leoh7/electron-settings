const { App, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadUrl('file://${__dirname}/index.html');
  win.on('closed', () => { win = null });
};

App.on('ready', createWindow);
App.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    App.quit();
  }
});
App.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})
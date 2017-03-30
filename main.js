var {app, browersWindow} = require('electron');
var path                 = require('path');
var url                  = require('url');


let win

function createWindow(){
  win = new browersWindow({width:1080, height:1920, frame: false});

  win.loadURL(url.format({pathname: path.join(__dirname, 'views/home.html'),
                          protocol: 'file:',
                          slashes: true
  }));

  win.on('closed', () =>{
    win = null;
  });
};

  app.on('ready', createWindow);

  app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin') {
      app.quit;
    }
  });

  app.on('activate', () => {
    if(win === null){
      createWindow();
    }
  });

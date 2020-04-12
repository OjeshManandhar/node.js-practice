const fs = require('fs');
const url = require('url');
const http = require('http');
const path = require('path');

const baseDirPath = __dirname + '/src/';

const folder = {
  html: 'html/',
  css: 'css/',
  js: 'js/',
  png: 'images/',
  jpg: 'images/',
  jpeg: 'images/',
  ico: 'images/',
  webp: 'images/'
};

const mime = {
  txt: 'text/plain',
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  webp: 'image/webp'
};

const server = http.createServer((req, res) => {
  console.log('url:', req.url);

  const reqUrl = url.parse(req.url);

  console.log('pathname:', reqUrl.pathname);
  console.log('dirname:', path.dirname(reqUrl.pathname));
  console.log('basename:', path.basename(reqUrl.pathname));
  console.log('extname:', path.extname(reqUrl.pathname));

  if (req.url === '/') {
    console.log('home');

    fs.readFile(baseDirPath + 'html/home.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': mime.html });
      res.write(data);
      res.end();
    });
  } else {
    const extname = path.extname(reqUrl.pathname);
    const basename = path.basename(reqUrl.pathname);

    const fileType = extname.slice(1);

    console.log('fileType:', fileType);
    console.log('path:', baseDirPath + folder[fileType] + basename);

    fs.readFile(baseDirPath + folder[fileType] + basename, (err, data) => {
      res.writeHead(200, { 'Content-Type': mime[fileType] });
      res.write(data);
      res.end();
    });
  }

  console.log('------------------------');
});

server.listen(8000);

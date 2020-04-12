const fs = require('fs');
const http = require('http');
const path = require('path');

const dirPath = __dirname + '/src/';

const server = http.createServer((req, res) => {
  console.log('url:', req.url);
  console.log('dirname:', path.dirname(req.url));
  console.log('basename:', path.basename(req.url));
  console.log('extname:', path.extname(req.url));

  console.log('------------------------');

  if (req.url === '/') {
    console.log('home');

    fs.readFile(dirPath + 'html/home.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else {
    var basename = null;
    const extname = path.extname(req.url);

    switch (extname) {
      case '.html':
        basename = path.basename(req.url);

        fs.readFile(dirPath + 'html/' + basename, (err, data) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          res.end();

          basename = null;
        });
        break;
      case '.css':
        basename = path.basename(req.url);

        fs.readFile(dirPath + 'css/' + basename, (err, data) => {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.write(data);
          res.end();

          basename = null;
        });
        break;
      case '.js':
        basename = path.basename(req.url);

        fs.readFile(dirPath + 'js/' + basename, (err, data) => {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.write(data);
          res.end();

          basename = null;
        });
        break;
    }
  }
});

server.listen(8000);

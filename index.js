const http = require('http');

const server = http.createServer((req, res) => {
  console.log('req:', req);
});

server.listen(3000);

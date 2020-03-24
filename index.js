const http = require('http');

const hostname = process.env.hostname || '0.0.0.0' // allow remote access
const port = process.env.PORT || 3002

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Everyone This is my first experience in server side programming');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

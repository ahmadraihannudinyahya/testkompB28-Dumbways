const http = require('http');
const createServer = require('./Infrastructures/express/createServer');

(() => {
  const port = 3000;
  const app = createServer();
  const server = http.createServer(app);
  server.listen(port);
  console.log(`Server listening at http://localhost:${port}`);
})();

var http = require('http'),
    httpProxy = require('http-proxy');

const PORT=9090;

var options = {
  router: {
    'localhost/api': 'localhost:8080',
    'localhost': 'localhost:8000'
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(PORT, function() {
    console.log("Proxy server listening on: http://localhost:%s", PORT);
});

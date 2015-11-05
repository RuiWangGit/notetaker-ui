var http = require('http'),
    httpProxy = require('http-proxy');

const PORT=9090;

var options = {
  router: {
    'localhost/api': '127.0.0.1:8080',
    'localhost': '127.0.0.1:8080'
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(PORT, function() {
    console.log("Proxy server listening on: http://localhost:%s", PORT);
});

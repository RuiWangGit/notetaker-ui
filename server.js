var http = require('http'),
    httpProxy = require('http-proxy');

var options = {
  router: {
    'localhost/api': '127.0.0.1:8080',
    'localhost': '127.0.0.1:8000'
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(9090);

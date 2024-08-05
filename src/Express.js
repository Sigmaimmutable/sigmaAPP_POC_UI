const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();



const proxies = {
  '/api': 'https://testavalanche.stasisonline.in',
  '/other': 'https://go.truebit.network'
};

app.use((req, res, next) => {
  for (const [path, target] of Object.entries(proxies)) {
    if (req.url.startsWith(path)) {
      proxy.web(req, res, { target });
      return;
    }
  }
  next();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

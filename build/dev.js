const ParcelProxyServer = require('parcel-proxy-server');

const server = new ParcelProxyServer({
  entryPoint: './src/index.html',
  parcelOptions: {
    outDir: './.dev',
    open: true,
  },
  proxies: {
    '/api': {
      target: 'http://localhost:8000/'
    }
  }
});

server.bundler.on('buildEnd', () => {
  console.log('Build completed!');
});

server.listen(8080, () => {
  console.log('Parcel proxy server has started');
});
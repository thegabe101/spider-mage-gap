const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(createProxyMiddleware('/api2', {
        target: 'http://api:8080',
        changeOrigin: true,
        pathRewrite: { '^/api2': '' }
    })
    );

    app.use(createProxyMiddleware('/api', {
        target: 'http://socket_api:8081',
        changeOrigin: true,
        pathRewrite: { '^/api3': '' }
    })
    );

}
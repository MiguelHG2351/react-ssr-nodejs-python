import express from 'express';
const app = express()
import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import path from 'path'
import { getManifest, renderFullPage } from './utils/react-expres'

if(process.env.NODE_ENV === 'development') {
    console.log('Compilando en modo desarrollo')
    try {
        const webpack = require('webpack');
        const webpackConfig = require('../webpack.config');
        const webpackDevMiddleware = require('webpack-dev-middleware');
        const webpackHotMiddleware = require('webpack-hot-middleware');
        const compiler = webpack(webpackConfig(null, { mode: process.env.NODE_ENV }));
        app.use(webpackDevMiddleware(compiler, {
            serverSideRender: true,
            writeToDisk: true,
            publicPath: '/',
        }));
        app.use(webpackHotMiddleware(compiler, {
            // evita el error de conección en modo desarrollo
            path: '/__what',
        }));
    } catch(e) {
        console.error(e);
    }
}
app.use((req, res, next) => {
    if(!req.hashManifest) {
        req.hashManifest = getManifest()
    }
    next()
})



app.get('/testing', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', async (req, res) => {
    const App = (await import('../frontend/App')).default
    let html = renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    )
    const code = renderFullPage(html, req.hashManifest)

    res.send(code)
})

app.listen(process.env.PORT ?? 3000, () => {
    console.log('Listening on port 3000');
})

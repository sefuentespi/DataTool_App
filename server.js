const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const DataTool = express()
//here we are configuring dist to serve app files
DataTool.use('/', serveStatic(path.join(__dirname, '/dist')))
// this * route is to serve project on different page routes except root `/`
DataTool.get(/.*/, function (req, res) {
res.sendFile(path.join(__dirname, '/dist/index.html'))
})
const port = process.env.PORT || 8080
DataTool.listen(port)
console.log(`DataTool is listening on port: ${port}`)
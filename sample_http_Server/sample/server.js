const http = require('http')
const fs = require('fs')
const url = require('url')



http.createServer((req, res) => {
    const parse =url.parse(req.url);

    fs.readFile("." + parse.pathname, (err,data) => {
        if (err) {
            res.writeHead(404,{'content-type' : 'text/html'})
        return res.end("page not fond")
        }
        res.writeHead(200,{'content-type' : 'type/html'})
        res.write(data)
        res.end()
    })
}).listen(1000)
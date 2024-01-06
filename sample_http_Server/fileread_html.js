const http = require('http')
var fs = require('fs')

http.createServer((req,res) => {

    fs.readFile('fileread_html.html',(err,data) => {
        if (err){
            console.log("invalid file");
        } else {
            res.write(data)
            res.end()
        }
    })

}).listen(3000)
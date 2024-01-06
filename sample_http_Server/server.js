const http = require("http")

http.createServer((req,res) => {
    res.write("<h1>Good Morning</h1>")
}).listen(5000)
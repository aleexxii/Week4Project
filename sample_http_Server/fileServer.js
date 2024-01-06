const fs = require('fs')

fs.writeFile/*writeFile for create a text file*/("text.txt", "Hey how are you", (err) => {
    if (err){
        console.log("unable to write");
    }
})

fs.appendFile/*this for adding some text in u r file*/('text.txt'," added some text here", (err) => {
    if (err) {
        console.log("error in the prgrm");
    }
}) 

fs.unlink/* delete file */('text.txt',(err) => {
    if(err) {
        throw err
    }
    console.log("text.txt file was deleted");
})

fs.readFile("text.txt",(err,data) => {
    console.log(data);
}) // here we can  see the output was in ascii value

fs.readFile("text.txt","utf8",(err,data) => {
    console.log(data);
}) //utf8 convert unicode into alphebts
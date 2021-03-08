const http = require('http') //requesting for http
const fs = require('fs') //file handling for the libraries
const port = 3000
//personal note -- add more ports --
const server = http.createServer(function(req,res){
res.writeHead(200, {'Content-Type': 'text/html'}) //request status will parse request of html
fs.readFile('home.html', function(error, data){
    if(error){ //validate errors
        res.writeHead(404) //browser is unable to find file
        res.write('Error: File Not Found')
    }
    else{
        res.write(data) //data holds html file
    }
    
})

fs.readFile('contact.html', function(error, data){
    if(error){ //validate errors
        res.writeHead(404) //browser is unable to find file
        res.write('Error: File Not Found')
    }
    else{
        res.write(data) //data holds html file
    }
    
})

})

server.listen(port, function(error){
    if(error){
        console.log('hello is there a problem?', error)
    }
    else{

    console.log('my ears are wide open on this port' + port)
    }
})
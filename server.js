var http = require('http');

function handler(request, response){
    response.end("{'message':'Hello and welcome!'}");
}

http.createServer(handler).listen(8080, function(){
    console.log("Service is running...");
});

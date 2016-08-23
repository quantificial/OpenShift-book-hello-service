var http = require('http');

function handler(request, response){
    response.end("{'message':'Hello and WELCOME!'}");
}

http.createServer(handler).listen(8080, function(){
    console.log("Service is running...");
});

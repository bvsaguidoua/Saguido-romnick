// let http =require('http');
// let port = 3000;

// let app = http.createServer(function (request, response){

//     if (request.url == "/items"  && request.method == "GET"){
//         response.writeHead(200, {"content-type": "text/plain"})
        
//         response.end("Data retrived from the server.");
//     }

//     if (request.url == "/items"  && request.method == "POST"){
//         response.writeHead(200, {"content-type": "text/plain"})
        
//         response.end("Items are now posted!.");
//     }

//     else{

//     }

// })

// app.listen(port, () => console.log("App is now running at port" + port));

let http = require('http');
let port = 3000;

let app= http.createServer(function (request, response){
    if(request.url == "/login" && request.method == "GET"){
        response.writeHead(200, {"content-type": "text/plain"});
        response.end("Welcome to the login page.");
    }

    if(request.url == "/register" && request.method == "GET"){
        response.writeHead(200, {"content-type": "text/plain"});
        response.end("Welcome to the registration page.");
    }

    if(request.url == "/home" && request.method == "GET"){
        response.writeHead(200, {"content-type": "text/plain"});
        response.end("Welcome to the home page.");
    }
    else{
        response.writeHead(404, {"content-type": "text/plain"});
        response.end("Error 404: Page not found.");
    }
})

app.listen(port, () => console.log ("App is now running at port" + port));
var http = require("http");

var customDateTime=require('./custom-date-time');

//create server
var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.write("<h1>404 Error</h1><p>404 Page Page Not Found Error</p>");
        res.end();

    }else if(req.url == '/home'){
        res.write("<h1>Home Page</h1><p>Welcome My First Exercise Home Page</p>");
        res.end();

    }else if(req.url == '/about'){
        res.write("<h1>About Page</h1><p>Welcome My First Exercise About Page</p>");
        res.end();

    }else if(req.url == '/time'){
        res.write("<h1>Current Date </h1><p>Welcome My Current Date and Time Page</p>");
        res.write('\n');
        res.write("<h1>Current Date :"+customDateTime.currentDate());
        res.write('\n');
        res.write("<h1>Current Time :"+customDateTime.currentTime());
        res.end();
    }else{
        res.write("<h1>404 Error</h1><p>404 Page Page Not Found Error</p>");
        res.end();
    }
});
server.listen(3000);
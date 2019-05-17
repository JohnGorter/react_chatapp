var WebSocketServer = require('websocket').server;
var http = require('http');
var express = require('express');

var app = express(); 
app.use(express.static('.'));

var server = http.createServer(app);

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});


var connections = [];

// WebSocket server
wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  connections.push(connection); 


  // This is the most important callback for us, we'll handle
  // all messages from users here.
  connection.on('message', function(message) {
    
    if (message.type === 'utf8') {
        console.log("message", message);
      // process WebSocket message
      for(let conn of connections){
         //  if (conn != connection)
             if (conn.connected)
                 conn.send(message.utf8Data);
      }
    }
  });

  connection.on('close', function(conn) {
    connections.splice(connections.indexOf(conn), 1); 
  });
});


//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});


setInterval(() => {
    process.stdout.write("connections open " + connections.length);
    process.stdout.write("\r");
}, 1000); 

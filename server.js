var http = require('http');
var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hi everybody!');
});

game.on('gameover', function(message) {});

game.emit('gameover', 'You lose!');

server.on('close', function() { // We listened to the close event
    console.log('Goodbye!');
})

server.listen(8080); // Starts the server

server.close(); // Stops the server. Triggers the close event

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var session = require("express-session")({
    secret: "7uyz87f8vd18lkuiilv0",
    resave: true,
    saveUninitialized: true
  }),
var sharedsession = require("express-socket.io-session");

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
     io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

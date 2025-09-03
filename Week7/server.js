var express = require("express");
var app = express();
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http);          // Pass http server to socket.io

var port = 3000;
app.use(express.static('public'));
let onlineCount = 0;

// Socket connection logic
io.on('connection', (socket) => {
  onlineCount++;
  console.log('A user connected');
  console.log('Number of users online:'+onlineCount);

  socket.on('disconnect', () => {
    console.log('User disconnected');
    onlineCount--;
    console.log('Number of users online:'+onlineCount);
  });

  // Emit a random number every second
  setInterval(() => {
    const randomNum = Math.floor(Math.random() * 100);
    socket.emit('number', randomNum);
  }, 1000);
});

// Start server
http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
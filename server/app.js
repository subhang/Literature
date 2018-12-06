var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//     console.log('a user connected');
// });
var connected_players = new Array();

io.on('connection', function(socket){
    console.log('hello');
    socket.on('update', function(msg){
        console.log('lol');
        io.emit('update');
    });
    socket.on('loaded_players',function(msg) {
        console.log('checking for loaded players....');
        console.log(msg);
        connected_players.push(msg);
        var player_list = ""
        for(let i = 0;i < connected_players.length;i++){
            player_list += connected_players[i] +" "
        }
        io.emit('loaded_players',player_list,{for: 'everyone' })

    });
});
http.listen(5678, function(){
    console.log('listening on *:3000');
});


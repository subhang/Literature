var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var player = require('./Player')



app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//     console.log('a user connected');
// });
let connected_players = [];
let Players = [];
io.on('connection', function(socket){
    console.log('hello');
    socket.on('update', function(msg){
        console.log('lol');
        io.emit('update');
    });
    socket.on('loaded_players',function(msg) {
        let player = new Player(msg,'hello');
        console.log('checking for loaded players....');
        console.log(msg);
        connected_players.push(msg);
        let player_list = "";
        for(let i = 0;i < connected_players.length;i++){
            player_list += connected_players[i] +" ";
        }
        io.emit('loaded_players',player_list,{for: 'everyone' })

    });
    socket.on('create', function(data){

        let Player = {};
        Player.code = data.code;
        Player.status = 1;
        Player.name = data.name;
        Players.push(Player);
        console.log('creating a game room with code' + data.code);
        console.log('Created player with Player-name' + data.name);

    });
    socket.on('join',function(data){

        let Player = {};
        Player.code = data.code;
        Player.name = data.name;
        console.log(Player);
        Player.status = 1;
        Players.push(Player);

        let joined_players = [];
        for(let i = 0;i < Players.length;i++){
            if(Players[i].code === data.code){

                joined_players.push(Players[i]);
            }
        }
        console.log('Total Joined Players...');
        console.log(joined_players);
        io.emit(data.code+'_joined_players',joined_players,{for: 'everyone' })

    });
});
http.listen(5678, function(){
    console.log('listening on *:3000');
});


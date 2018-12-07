var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var player = require('./Player')




let connected_players = [];
let Players = [];
let Games  = {};
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

        let players = []
        let Player = {};
        Player.code = data.code;
        Player.status = 1;
        Player.name = data.name;
        players.push(Player);
        Games[data.code] = players
        console.log('creating a game room with code : ' + data.code);
        console.log('Created player with Player-name: ' + data.name);

    });
    socket.on('join',function(data){

        let players = []
        let Player = {};
        Player.code = data.code;
        Player.name = data.name;
        console.log(Player);
        Player.status = 1;
        Games[data.code].push(Player)
        let joined_players = [];

        console.log('Total Joined Players...');
        console.log(Games[data.code]);
        io.emit(data.code+'_joined_players',Games[data.code],{for: 'everyone' })

    });
    socket.on('start_game',function(data) {

        console.log('starting game with code : ' + data.code);
        io.emit(data.code+'_start_game',{for:'everyone'})

    });
    socket.on('load_game',function(data) {

        





    });
});
http.listen(5678, function(){
    console.log('listening on *:3000');
});


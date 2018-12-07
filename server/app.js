var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Player = require('./Player');
var Deck = require('./deck');



app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//     console.log('a user connected');
// });
let connected_players = [];
let Players = [];
let Games = {};
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

        let Player = new Player();
        Player.game_code = data.code;
        Games[Player.code] = [];
        Player.status = 1;
        Player.name = data.name;
        Player.team_id = 1;
        Players.push(Player);
        Games[Player.game_code].push(Player);
        console.log('creating a game room with code' + data.code);
        console.log('Created player with Player-name' + data.name);

    });
    socket.on('join',function(data){

        let Player = new Player();
        Player.game_code = data.code;
        Player.name = data.name;
        console.log(Player);
        Player.status = 1;
        Player.team_id = 1;
        Players.push(Player);
        Games[Player.game_code].push(Player);
        // let joined_players = [];
        // for(let i = 0;i < Players.length;i++){
        //     if(Players[i].code === data.code){
        //
        //         joined_players.push(Players[i]);
        //     }
        // }
        console.log('Total Joined Players...');
        console.log(Games[Player.game_code]);
        io.emit(data.code+'_joined_players',Games[Player.game_code],{for: 'everyone' })

    });

    socket.on('load_game',function(data){
        var d = new Date();
        var rand = require('random-seed').create(d.getTime());
        var players = [];
        for((player) in Games[data.code]){
            if ( player.status == 1){
                players.push(player);
            }
        };
        var len= players.length;
        var it = len/2;
        while(it--){
            var n = rand(len);
            players[n].team_id = 2;
        }
        var sets = 8;
        var deck = Deck().createdeck(sets);


    });


});
http.listen(5678, function(){
    console.log('listening on *:3000');
});


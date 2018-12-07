var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var player = require('./Player')


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function createNewDeck(players){

    deck = []
    let suits = [1,2,3,4]
    let faces = []
    let k = 0
    for(let i = 1;i <= 13;i++) faces.push(i)
    for(let i = 0;i < suits.length;i++){

        for(let j = 0;j < faces.length;j++){

            card = {};
            card.suit = suits[i];
            card.face = faces[j];
            deck.push(card)
        }
    }
    return shuffle(deck)
}
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

        let newDeck = createNewDeck();
        let temp = Games[data.code];
        players = shuffle(temp);
        console.log(players)
        for(let i = 0;i < players.length;i++){
            players[i].team_id = i % 2
            players[i].turn = false;
            players[i].cards = []
        }
        players[0].turn = true;
        for(let i = 0;i < newDeck.length;i++){
            let player_id = i % (players.length);
            newDeck[i].player_id  = player_id;
            players[player_id ].cards.push(newDeck[i]);
        }
        Games[data.code] = players;

        for(let i = 0;i < players.length;i++){
            io.emit(data.code+'_'+players[i].name+'_'+'init',Games[data.code][i])

        }
        console.log(Games[data.code])

    });
});
http.listen(5678, function(){
    console.log('listening on *:3000');
});


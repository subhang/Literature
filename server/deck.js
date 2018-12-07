var Card = require('Card')();

function createDeck(sets){
    data = ["Diamond","Spade","Heart","Clubs"]
    deck = {}
    for(let i=0;i<52;i++){
        var card = new Card();
        if(i < 13){
            card.set = "Diamond"
        }else if(i < 26){
            card.set = "Spade"
        }else if(i < 39){
            card.set = "Heart"
        }else if(i< 52){
            card.set = "Clubs"
        }
        card.name = i+1;
        deck.push(card);
    }
    return deck;
}
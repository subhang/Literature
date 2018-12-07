import React, {Component} from 'react';
import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert,Dimensions} from 'react-native';
import Button from 'react-native-button';
import ScoreCard from "./ScoreCard"
import TransactionCard from "./TransactionCard"
import TransferCard from "./TransferCard"
import CardsViewCard from "./CardsViewCard"

export default class GameComponent extends Component{

    constructor(props){


        super(props);
        const io = require('socket.io-client');
        this.socket = io('http://192.168.0.104:5678');
        let code = this.props.navigation.state.params.code;
        let name = this.props.navigation.state.params.name;
        let data = {};
        data.code = code;
        data.name = name;
        this.socket.emit('start_game',data);



    }
    render(){

        let cards = ['6S','6D','AS','AD','AC','AH','6C','6H']
        return (

            <ScrollView>
            <View style = {styles.container}>

                <ScoreCard points="3" passes="4"/>
                <TransferCard />
                <TransactionCard/>
                <CardsViewCard cards={cards}/>

            </View>
            </ScrollView>

        )

    }

}

const styles = StyleSheet.create({


    container:{

        flex : 1,

    },

    textInput: {

        height  : 40,
        margin: 20,
        borderColor : 'gray',
        borderWidth : 1

    },
    gameButton: {


        fontSize : 20,
        color: 'white',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 1.0
    },
    buttonView: {

        justifyContent: 'space-between',
        alignItems: 'center'

    },
    card : {
        height: 200,
        width : 300

    }



})




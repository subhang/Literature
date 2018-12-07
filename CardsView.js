import React, {Component} from 'react';
import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert,Dimensions} from 'react-native';
import Button from 'react-native-button';
import ScoreCard from "./ScoreCard"
import TransactionCard from "./TransactionCard"
import TransferCard from "./TransferCard"
import CardsRow from "./Cardsrow"
import Spacer from "./Spacer";

export default class CardsView extends Component{

    constructor(props){


        super(props);



    }
    render(){

        let cards = ['6♠','6♥','A♣','A😒','AC','AH','6C']
        return (

            <ScrollView style = {{backgroundColor:'gray'}}>


                <CardsRow cards={cards}/>
                <Spacer/>
                <CardsRow cards={cards}/>
                <Spacer/>


                <CardsRow cards={cards}/>
                <Spacer/>

                <CardsRow cards={cards}/>
                <Spacer/>

                <CardsRow cards={cards}/>
                <Spacer/>


                <CardsRow cards={cards}/>
                <Spacer/>


                <CardsRow cards={cards}/>
                <Spacer/>


                <CardsRow cards={cards}/>
                <Spacer/>


            </ScrollView>
        )

    }

}

const styles = StyleSheet.create({


    container:{
        flex: 1,
        borderWidth: 2,
        borderColor: 'red',
        position: 'relative'
    },
    cardsView:{

        flex: 1,

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

    },




})




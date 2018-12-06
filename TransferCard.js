import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert,Dimensions} from 'react-native';
import Button from 'react-native-button';
import React, {Component} from 'react';
import {JoinGameScreen} from "./ScreenNames";

export default class TransferCard extends Component{

    constructor(props){

        super(props)
    }
    showAlert(){
        Alert.alert("You joined the game")
    }
    render(){

        let players = new Array()
        players.push(<View style ={styles.player}><Text>Player 1</Text></View>)
        players.push(<View style ={styles.player}><Text>Player 1</Text></View>)

        return (

            <View style ={styles.container}>

                <View style = {styles.players}>

                    {players}
                </View>
                <View style = {styles.selectCard}>
                    <TextInput style = {styles.textInput}
                               placeholder = "Enter Card"
                               onChangeText={

                                   (text) => {

                                       this.setState(
                                           (previousState) => {

                                               return {

                                                   name : text
                                               }
                                           }
                                       )
                                   }
                               }

                    />

                </View>
                <View style = {styles.TransferButton}>


                    <Button style = {styles.gameButton} >
                        Ask Card
                    </Button>
                </View>

            </View>

        )

    }

}
const styles = StyleSheet.create({


    container:{


        flex : 2,
        backgroundColor: 'green'
    },
    players : {

        flex: 1,
        flexDirection: 'row',

    },
    selectCard:{

        flex: 3

    },
    textInput: {

        height  : 40,
        margin: 20,
        borderColor : 'gray',
        borderWidth : 1

    },
    TransferButton:{

        justifyContent: 'center',
        alignItems: 'center'
    },
    gameButton: {

        width : 80,
        fontSize : 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
    },


})
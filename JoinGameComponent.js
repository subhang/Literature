import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert} from 'react-native';
import Button from 'react-native-button';


export default class JoinGameComponent extends Component{

    constructor(props){


        super(props)
        this.state = {

            code : '',
            playersComponent : [],
            admin : false,
            name : this.props.navigation.state.params.name

        }


        const io = require('socket.io-client');
        this.socket = io('http://192.168.0.102:5678');

        this.socket.emit('players',this.props.name);

        this.socket.on('players', (msg)=> {

            console.log(msg)
            console.log(players_component)
            this.setState({name:msg,playersComponent: players_component})

        });

    }


    showAlert(){
        Alert.alert("You joined the game")
    }
    render(){

        const {navigate} = this.props.navigation

        return (


            <View style = {{flex: 1, justifyContent:'center'}}>
                {this.state.playersComponent}
                <Text> {this.state.name} </Text>
                <TextInput style = {styles.textInput}
                           placeholder = "Enter game code"
                           onChangeText={

                               (text) => {


                                   this.setState(

                                       (previousState) => {

                                           return {

                                               code : text
                                           }

                                       }

                                   )

                               }
                           }

                />

                    <Button style = {styles.gameButton} onPress = {

                        ()=>{

                            navigate('CreateGameScreen',this.state)
                        }
                    }>
                        Join Game
                    </Button>
                </View>
        )

    }

}

const styles = StyleSheet.create({



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
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0
    },
    buttonView: {

        justifyContent: 'space-between',
        alignItems: 'center'


    }




})




import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert} from 'react-native';
import Button from 'react-native-button';
import StackNavigator from 'react-navigation';
import "./TestComponent.js";
import TestComponent from "./TestComponent";
import {CreateGameScreen, JoinGameScreen} from "./ScreenNames";
import SocketIOClient from 'socket.io-client';


export default class MainComponent extends Component{

    constructor(props){


        super(props);

        this.state = {

            name : ''

        };
        console.log("hello");

        const io = require('socket.io-client');
        this.socket = io('http://192.168.0.104:5678');
        console.log(this.socket);


        this.socket.on('update', ()=> this.setState( (previousState) => {
                                                    return {
                                                        name: previousState.name + 'subhang'
                                                    }
                                                    }));


    }

    showAlert(){

        Alert.alert("You pressed a button!!")

    }

    render(){

        const {navigate} = this.props.navigation;

        return (


        <View style = {{flex: 1, justifyContent:'center'}}>

                <TextInput style = {styles.textInput}
                           placeholder = "Enter your name"
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
            <View><Text>{this.state.name}</Text></View>
                <View style={styles.buttonView}>
                    <Button style = {styles.gameButton} onPress = {() => {

                       navigate(CreateGameScreen,this.state)
                    }}>
                        Create Game
                    </Button>

                    <Button style = {styles.gameButton} onPress = {()=>{

                        this.socket.emit('players',this.state.name);
                        navigate(JoinGameScreen,this.state)

                    }
                    }>
                        Join Game
                    </Button>
                </View>

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




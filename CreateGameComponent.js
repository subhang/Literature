import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert} from 'react-native';
import Button from 'react-native-button';




export default class CreateGameComponent extends Component{

    constructor(props){


        super(props)
        this.state = {

            name : ''

        }
        const io = require('socket.io-client');
        this.socket = io('http://192.168.0.104:5678');

        this.socket.emit('loaded_players',this.props.navigation.state.params.name);

        this.socket.on('loaded_players', (msg)=> {
            console.log(msg)
            players_component = this.loadNames(msg)

            this.setState({name:msg,playersComponent:players_component})

        })
        this.socket.on('players', (msg)=> {
            console.log(msg)
            this.setState({name:msg})

        });

    }
    loadNames(loadedPlayers){
        console.log("came here")
        var players =  loadedPlayers.split(' ')
        console.log("camehere ")
        console.log(players)
        var playersComponent = new Array()
        for(var i = 0;i < players.length;i++){

            playersComponent.push(<View><Text>{players[i]}</Text></View>)
        }

        return playersComponent

    }
    showAlert(){

        Alert.alert("You pressed a button!!")

    }
    render(){
        let paramsFromMainScreen = this.props.navigation.state.params;

        return (

            <View style = {{flex: 1,justifyContent: 'center',alignItems:'center'}}>
                {this.state.playersComponent}
                <View style = {{justifyContent:'center'}}>

                <Text>
                    Game Code : asxegmxm
                </Text>
                    <Text>
                        {this.state.name}
                    </Text>

                <View style={styles.buttonView}>
                    <Button style = {styles.gameButton} onPress = {this.showAlert}>
                        Start
                    </Button>


                </View>
                    <Text>{paramsFromMainScreen.name}</Text>

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

        width: 100,
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



    }




})
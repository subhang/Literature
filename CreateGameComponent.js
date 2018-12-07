import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert} from 'react-native';
import Button from 'react-native-button';




export default class CreateGameComponent extends Component{

    constructor(props){


        super(props)

        const {navigate} = this.props.navigation;

        const io = require('socket.io-client');
        this.socket = io('http://192.168.0.104:5678');
        let isAdmin = this.props.navigation.state.params.admin;
        let gamecode;
        let data = {};
        data.name = this.props.navigation.state.params.name;

        if(isAdmin) {
            let code = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 5; i++) code += possible.charAt(Math.floor(Math.random() * possible.length));

            data.code = code;
            gamecode = code;

            this.socket.emit('create', data);



        }
        else{
            let code = this.props.navigation.state.params.code;
            data.code = code
            this.socket.emit('join',data)
            gamecode = code;


        }
        this.state = {

            name : this.props.navigation.state.params.name,
            code : gamecode

        };

        this.socket.on(data.code + '_joined_players', (data) => {
            Alert.alert('player joined');
            console.log(data)
            //players_component = this.loadNames(msg)

            //this.setState({name:msg,playersComponent:players_component})

        })
        this.socket.on(data.code+'_start_game', () => {
            console.log("Starting Game.....")
            navigate('GameScreen',this.state)

        })

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
        const {navigate} = this.props.navigation;


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
                    <Button style = {styles.gameButton} onPress = {

                        ()=>{

                            navigate('GameScreen',this.state)
                        }
                    }>
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
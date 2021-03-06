import React, {Component} from 'react';
import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert,Dimensions} from 'react-native';
import Button from 'react-native-button';
import ScoreCard from "./ScoreCard"
import TransactionCard from "./TransactionCard"
import TransferCard from "./TransferCard"
import CardsRow from "./Cardsrow"
import Spacer from "./Spacer";
import CardsView from './CardsView'
const shift =40;
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

        return (
            <View>
                <View style = {styles.points}>
                </View>
                <CardsView/>
            <View style={styles.askCardButton}>

                <Button ><Text>Ask Card</Text></Button>

             </View>
            </View>


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
    points:{

        width : Dimensions.get('window').width,
        height : shift,
        backgroundColor: 'black'
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
    askCardButton:{
        flex: 1,
        position: 'absolute',
        bottom : shift,
        width: Dimensions.get('window').width,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#72ff2c',
        justifyContent: 'center',
        alignItems: 'center',

    }



})




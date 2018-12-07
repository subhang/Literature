import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert,Dimensions} from 'react-native';
import Button from 'react-native-button';
import React, {Component} from 'react';
import Spacer from "./Spacer"

export default class CardsRow extends Component{

    constructor(props){

        super(props)
    }
    showAlert(){
        Alert.alert("You joined the game")
    }


    render(){

        let cards =this.props.cards;

        let cardRow = [];
        for(let i = 0;i < (cards.length);i++) {

            cardRow.push(
                <View style={styles.cardContainer}><Button><View style = {styles.cardPresent}><Text>{cards[i]}</Text></View></Button></View>
            )

        }

        return (

            <ScrollView horizontal={true} >
                <View style={styles.cardRow}>
                {cardRow}
                </View>
            </ScrollView>

        )

    }

}
const styles = StyleSheet.create({

    container:{

        flex : 4,
        flexDirection:'column',

        backgroundColor: 'yellow'
    },
    cardPresent:{

        height : 100,
        width: 60,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'gray'

    },

    cardRow:{

        height : 150,
        backgroundColor: 'white',
        flexDirection : 'row',
        justifyContent: 'space-between',
        borderWidth: 1

    },
    cardContainer : {

        width : 100,
        alignItems : 'center',
        justifyContent: 'center',
    },


})
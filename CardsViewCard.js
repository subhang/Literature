import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert,Dimensions} from 'react-native';
import React, {Component} from 'react';
import Spacer from "./Spacer"

export default class CardsViewCard extends Component{

    constructor(props){

        super(props)
    }
    showAlert(){
        Alert.alert("You joined the game")
    }


    render(){

        let cards =this.props.cards

        let cardRow = new Array()
        for(let i = 0;i < (cards.length);i++) {

            cardRow.push(
                <View style={styles.card}><Text>{cards[i]}</Text></View>
            )

        }

        return (

            <View style ={styles.container}>

                <View style={styles.cardRow}>
                {cardRow}
                </View>
                <View style={styles.cardRow}>
                    {cardRow}
                </View>
                <View style={styles.cardRow}>
                    {cardRow}
                </View>
            </View>

        )

    }

}
const styles = StyleSheet.create({


    container:{

        flex : 4,
        flexDirection:'column'
    },
    cardRow:{

        flex: 1,
        flexDirection: 'row',

    },
    card:{
        flex: 1,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    }


})
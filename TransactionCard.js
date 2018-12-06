import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert,Dimensions} from 'react-native';
import React, {Component} from 'react';

export default class TransactionCard extends Component{

    constructor(props){

        super(props)
    }
    showAlert(){
        Alert.alert("You joined the game")
    }
    render(){


        return (

            <View style ={styles.container}>


            </View>

        )

    }

}
const styles = StyleSheet.create({


    container:{


        flex : 2,
        backgroundColor: 'yellow'
    }

})
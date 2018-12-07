import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert,Dimensions} from 'react-native';
import React, {Component} from 'react';

export default class Spacer extends Component{

    constructor(props){

        super(props)
    }

    render(){


        return (

            <View style={styles.spacer}></View>
        )

    }

}
const styles = StyleSheet.create({



    spacer : {

        width : Dimensions.get('window').width,
        backgroundColor: 'gray',
        height : 5,
    }


})
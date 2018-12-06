import {AppRegistry,View,Image,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView,Alert,Dimensions} from 'react-native';
import React, {Component} from 'react';

export default class ScoreCard extends Component{

    constructor(props){

        super(props)
    }
    showAlert(){
        Alert.alert("You joined the game")
    }
    render(){


        return (

            <View style ={styles.container}>

                <View style = {styles.points}>
                    <Text> Points : {this.props.points}</Text>
                </View>
                <View style = {styles.passes}>
                    <Text> Points : {this.props.passes}</Text>
                </View>
            </View>

        )

    }

}
const styles = StyleSheet.create({


    container:{


        flex : 1,
        flexDirection : 'row',
        backgroundColor: 'red'
    },
    points: {

        flex: 1,
        backgroundColor : 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    passes: {
        flex : 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'

    }

})
import React, {Component} from 'react';
import {AppRegistry,View,Image,StyleSheet,TouchableOpacity,TextInput,ScrollView,Text} from 'react-native';




export default class TestComponent extends Component{
    constructor(props){

        super(props)

    }


    render(){


        return (
            <View style ={styles.testComponent}>

                <View style = {styles.image}>
                </View>
                <View style = {styles.infoPart}>

                    <View style = {styles.heading}>
                        <Text style = {{fontWeight:'bold'}}> {this.props.name} </Text>
                    </View>
                    <View style = {styles.spaceBetween}>
                    </View>
                    <View style = {styles.data}>
                        <Text > {this.props.name} </Text>
                    </View>

                </View>

            </View>


        )


    }


}



const styles = StyleSheet.create({

    spaceBetween: {

        backgroundColor: 'black',
        height : 1

    },
    image:{

        flex: 3,
        backgroundColor: 'yellow',
        width : 50,
        height: 120,
        marginLeft: 10,
        borderRadius: 5
    },
    infoPart: {

        flex: 7,
        flexDirection: 'column',



    },
    heading: {

        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'

    },
    data: {

        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'

    },
    testComponent: {
        borderWidth: 1,
        borderRadius: 2,
        flex: 1,
        flexDirection : 'row',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }

    }
)





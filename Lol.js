import React, {Component} from 'react';
import {AppRegistry,View,Text,StyleSheet,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import "./TestComponent.js";
import TestComponent from "./TestComponent";




export default class Testing extends Component{
    constructor(props){

        super(props)
    }

    render(){

        var pageView = []
        for(let i = 0;i < 40;i++) {

            pageView.push(<View><TestComponent name = "Hello" key = {i}/><View style ={styles.spaceBetween} ></View></View>)

        }


        return (

            <ScrollView>

                <View style = {styles.container}>

                    {pageView}

                </View>

            </ScrollView>

        )

    }

}


class FlexBasics extends Component{



    render(){

        return(

            <View style={styles.container}>

                <View style = {styles.screen} >

                    <View style = {styles.calculation} >
                        <Text> Hello </Text>
                    </View>
                    <View style = {styles.result} >
                    </View>

                </View>

                <View style ={styles.buttons} >

                    <View style = {styles.numbers } >
                        <View style = {styles.row} >
                            <TouchableOpacity><Text> 0 </Text></TouchableOpacity>
                            <TouchableOpacity><Text> 0 </Text></TouchableOpacity>
                            <TouchableOpacity><Text> 0 </Text></TouchableOpacity>
                        </View>
                        <View style = {styles.row} >
                            <TouchableOpacity><Text> 0 </Text></TouchableOpacity>
                            <TouchableOpacity><Text> 0 </Text></TouchableOpacity>
                            <TouchableOpacity><Text> 0 </Text></TouchableOpacity>
                        </View>
                        <View style = {styles.row} >
                            <TouchableOpacity><Text> 0 </Text></TouchableOpacity>
                            <TouchableOpacity><Text> 0 </Text></TouchableOpacity>
                            <TouchableOpacity><Text> 0 </Text></TouchableOpacity>
                        </View>

                    </View>
                    <View style = {styles.operators} >
                    </View>


                </View>

            </View>

        );

    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,

        },
        spaceBetween: {

            height : 2,
            backgroundColor: 'black'


        },
        screen: {

            flex: 3,
            backgroundColor: 'white'
        },
        calculation:{

            flex: 3,
            backgroundColor: 'red'

        },
        result:{

            flex: 2,
            backgroundColor: 'yellow'
        },

        buttons: {

            flex : 7,
            flexDirection: 'row',
            backgroundColor: 'gray'
        },
        numbers: {

            flex: 6,
            backgroundColor: 'green'

        },
        operators: {

            flex: 2,
            backgroundColor: 'pink'
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'

        },
        topPad:{

            flex: 1

        },
        main:{

            flex : 9
        }


    }
)


AppRegistry.registerComponent('AwesomeProject', () => Testing);

import {AppRegistry } from 'react-native';
import {createStackNavigator,createAppContainer}from 'react-navigation';
import CreateGameComponent from './CreateGameComponent'

import MainComponent from "./MainComponent";
import JoinGameComponent from "./JoinGameComponent";
import GameComponent from "./GameComponent"

const Navigator = createStackNavigator({

    MainScreen: {
        screen: MainComponent,
    },
    CreateGameScreen:{
        screen : CreateGameComponent,
    },
    JoinGameScreen: {

        screen : JoinGameComponent,
    },
    GameScreen : {

        screen : GameComponent,
    }
})
const App = createAppContainer(Navigator)

export default App;
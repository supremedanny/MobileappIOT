import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as firebase from "firebase";
import apiKeys from "./config/keys";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isAuthenticationReady: false,
            isAuthenticated: false,

        }

        //Load Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(apiKeys.firebaseConfig)
            firebase.auth().onAuthStateChanged((user) => {
                this.setState({isAuthenticationReady: true})
                this.setState({isAuthenticated: !!user})
            })
        }
    }

    render() {
        return (
            <SafeAreaProvider>
                <Navigation isAuth={this.state.isAuthenticated}/>
            </SafeAreaProvider>
        );
    }
}

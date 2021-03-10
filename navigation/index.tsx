import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types';
//import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import {View, Text} from 'react-native';

import LandPageScreen from '../screens/LandPageScreen';
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import BottomTabNavigator from "./BottomTabNavigator";


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

const Stack = createStackNavigator();


export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen
                    name="Landing"
                    component={LandPageScreen}
                    options={{headerTitle: 'Mobile App IOT', headerShown: false}}
                />

                <Stack.Screen
                    name="LogIn"
                    component={LogInScreen}
                    options={{headerTitle: 'Log In', headerBackTitle: 'Back'}}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{headerTitle: 'Sign Up', headerBackTitle: 'Back'}}
                />

                <Stack.Screen
                    name="Root" component={BottomTabNavigator}
                    options={{headerShown: false}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {View, Text} from 'react-native';

import LandPageScreen from '../screens/LandPageScreen';
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

export const Stack = createStackNavigator();


export default function Navigation({isAuth}) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={(isAuth) ? "Root" : "Landing" }>
                {/*When navigation starts, it will set the initialRoute depending on the user's login state.*/}
                <Stack.Screen
                    name="Landing"
                    component={LandPageScreen}
                    options={{headerTitle: 'Mobile App IOT', headerShown: false}}
                />

                <Stack.Screen
                    name="LogIn"
                    component={LogInScreen}
                    options={{headerTitle: null, headerBackTitle: 'Back', headerTransparent: true}}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{headerTitle: null, headerBackTitle: 'Back', headerTransparent: true}}
                />

                <Stack.Screen
                    name={"ForgotPassword"}
                    component={ForgotPasswordScreen}
                    options={{headerTitle: null, headerBackTitle: 'Back', headerTransparent: true}}
                />

                <Stack.Screen
                    name="Root" component={BottomTabNavigator}
                    options={{headerShown: false,gestureEnabled: false,}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

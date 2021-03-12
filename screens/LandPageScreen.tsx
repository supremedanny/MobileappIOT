import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Pressable, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import { RootStackParamList } from '../types';
import Navigation from "../navigation";

export default function LandPageScreen( {navigation,}: StackScreenProps<RootStackParamList, any> ) {
    return (
        <View style={styles.container}>
            <Image
                source = {require('../assets/images/Recycling_Bin.png')}
                style = {styles.image}
            />

            <Pressable
                style = {styles.loginButton}
                onPress= {()=> {navigation.navigate('LogIn')}}>
                <Text style = {styles.LBtext}>Log In</Text>
            </Pressable>

            <Pressable
                style = {styles.SignUpButton}
                onPress= {()=> {navigation.navigate('SignUp')}}>
                <Text style = {styles.SUBtext}>Sign Up</Text>
            </Pressable>

            <Pressable
                style = {styles.HomeButton}
                onPress= {()=> {navigation.navigate('Root')}}>
                <Text style = {styles.HBtext}>Home</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#60A268',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        color: 'cyan',
        fontSize: 40,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    image: {
        width: '69%',
        height: '69%',
        top: '10%',
        resizeMode: 'contain',
        position: 'absolute',
        backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
    },
    loginButton:  {
        top: '31%',
        borderRadius: 10,//how round the button is on the corners
        borderLeftWidth: 100,
        borderRightWidth: 100,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: '#E7FBEB',
        backgroundColor: '#E7FBEB',
        resizeMode: "contain",
    },
    LBtext: { //L as in "Login"
        color: '#254E0A',
        fontWeight: 'bold',
        fontSize: 31,
    },
    SignUpButton: {
        top: '33%',
        borderRadius: 10,//how round the button is on the corners
        borderLeftWidth:90,
        borderRightWidth: 90,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: '#397433',
        backgroundColor: '#397433',
        resizeMode: "contain",
    },
    SUBtext: { //SU as in "sign up"
        color: '#E5F9E9',
        fontWeight: 'bold',
        fontSize: 31,
    },
    HomeButton: {
        // TODO: Temporary
        top: '35%',
        borderRadius: 10,
        borderLeftWidth: 100,
        borderRightWidth: 100,
        borderTopWidth: 10,
        resizeMode: 'contain',
        borderBottomWidth: 10,
        borderColor: '#E7FBEB',
        backgroundColor: '#E7FBEB',
    },
    HBtext: { //HB as in "home button"
        color: '#397433',
        fontWeight: 'bold',
        fontSize: 21,
    },
});

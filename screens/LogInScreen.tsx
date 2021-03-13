import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {Button, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, View, Pressable} from 'react-native';

import {RootStackParamList} from '../types';
import Navigation from "../navigation";
import {TextField} from "@material-ui/core";
import {Component} from "react";

//TODO ---wip---
export default function LogInScreen({navigation,}: StackScreenProps<RootStackParamList, any>) {
    return (
        <View style={styles.container}>
            <ScrollView style={{marginTop : '60%' }}>
                <TextInput textAlign = 'center' placeholder='Username'/>
                <TextInput textAlign = 'center' placeholder='Password'/>
            </ScrollView>
            <Pressable
                style={styles.loginButton}
                onPress={() => {navigation.navigate('SignUp')}}>
                <Text style={styles.LBtext}>Log In</Text>
            </Pressable>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5F9E9',
        //alignItems: 'center',
        //justifyContent: 'center',
        //padding: 20,
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
    LBtext: { //LB as in "login button"
        color: '#397433',
        fontWeight: 'bold',
        fontSize: 21,
    },
    textBox: {
        // TODO wip
        //top: '31%',
        borderRadius: 10,//how round the button is on the corners
        //borderLeftWidth: 100,
        //borderRightWidth: 100,
        //borderTopWidth: 5,
        //borderBottomWidth: 5,
        borderColor: 'black',
        backgroundColor: '#E7FBEB',
        resizeMode: "contain",
        //color: '#397433',
        //fontWeight: 'bold',
        //fontSize: 21,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

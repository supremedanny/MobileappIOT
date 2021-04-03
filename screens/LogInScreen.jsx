import * as React from 'react';
import {Button, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, View, Pressable} from 'react-native';
import {Component, useState} from "react";
import * as firebase from "firebase";

//WIP
import {Ionicons, FontAwesome,} from '@expo/vector-icons';


export default function LogInScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.emailContainer}>
                <Ionicons name="mail" size={24} color="black" />
                <TextInput style={styles.emailInput} placeholder="Email"
                           onChangeText={email => setEmail(email)
                           }/>
            </View>

            <View style={styles.passwordContainer}>
                <FontAwesome name="lock" size={27} color="black" />
                <TextInput style={styles.passwordInput} placeholder="Password" secureTextEntry={true}
                           onChangeText={password => setPassword(password)
                           }/>
            </View>

            <Pressable style={styles.loginButton}
                       onPress={() => firebase.auth().signInWithEmailAndPassword(email, password)
                           .then((userCredential) => {
                               // Signed in
                               const user = userCredential.user;
                               navigation.navigate("Root");
                               // ...
                           })
                           .catch((error) => {
                               const errorCode = error.code;
                               const errorMessage = error.message;
                               alert(errorMessage);
                           })}>
                <Text style={styles.loginText}>Log In</Text>

            </Pressable>

            <Pressable style={styles.forgotPasswordButton}
                onPress={()=>navigation.navigate("ForgotPassword")}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7FBEB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        margin: 10,
    },
    forgotPasswordButton: {
        //borderRadius: 10,
        //backgroundColor: '#BBDDC1',
        width: '30%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
    },
    forgotPasswordText: {
        color: '#397433',
        fontWeight: 'bold',
        fontSize: 12,
    },
    emailContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailInput: {
        //borderWidth: 1,
        fontWeight: '700',
        color: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        height: 45,
        width: '70%',
        backgroundColor: '#60A268',
    },
    passwordContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginRight:10,

    },
    passwordInput: {
        borderRadius: 10,
        backgroundColor: '#60A268',
        fontWeight: '700',
        color: '#fff',
        padding: 10,
        margin: 5,
        height: 45,
        width: '75%',

        //marginLeft: 10,
    },
    loginText: {
        color: '#397433',
        fontWeight: 'bold',
        fontSize: 21,
        //opacity: 100.0,
    },
    loginButton: {
        borderRadius: 10,
        backgroundColor: '#BBDDC1',
        width: '30%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    }
});


import * as React from 'react';
import {Button, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, View, Pressable} from 'react-native';
import {Component, useState} from "react";
import * as firebase from "firebase";


export default function ForgotPasswordScreen({navigation}) {
    const [email,setEmail] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter email</Text>

            <TextInput style={styles.emailInput} placeholder="Email"
                       onChangeText={email => setEmail(email)
                       }/>
            <Pressable
                onPress={() => firebase.auth().sendPasswordResetEmail(email).then(() => {
                    // Sign-out successful.
                    alert("Email sent!");
                    navigation.navigate("LogIn");
                }).catch((error) => {
                    // An error happened.

                    alert(error.message);
                })}
            >
                <Text>Send email</Text>
            </Pressable>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        margin: 10,
    },
    forgotPassword: {
        textAlign: 'center',
        fontSize: 15,
        color: '#0F80FB'
    },
    emailInput: {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        width: 200,
    },
    passwordInput: {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        width: 200,
    },
});

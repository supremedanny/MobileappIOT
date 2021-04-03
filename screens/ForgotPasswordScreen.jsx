import * as React from 'react';
import {Button, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, View, Pressable} from 'react-native';
import {Component, useState} from "react";
import * as firebase from "firebase";
import {Ionicons} from "@expo/vector-icons";


export default function ForgotPasswordScreen({navigation}) {
    const [email,setEmail] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Password Reset</Text>

            <View style={styles.emailContainer}>
                <Ionicons name="mail" size={24} color="black"/>
                <TextInput style={styles.emailInput} placeholder="Email"
                           onChangeText={email => setEmail(email)
                           }/>
            </View>

            <Pressable style={styles.sendEmailButton}
                onPress={() => firebase.auth().sendPasswordResetEmail(email).then(() => {
                    // Sign-out successful.
                    alert("Email sent!");
                    navigation.navigate("LogIn");
                }).catch((error) => {
                    // An error happened.
                    alert(error.message);
                })}>

                <Text style={styles.sendEmailText}>Send email</Text>
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
        marginBottom: '5%',
        color: '#397433',
        fontWeight: 'bold',
    },
    forgotPassword: {
        textAlign: 'center',
        fontSize: 15,
        color: '#0F80FB'
    },
    emailContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    emailInput: {
        borderRadius: 10,
        backgroundColor: '#60A268',
        fontWeight: '700',
        color: '#fff',
        padding: 10,
        margin: 5,
        height: 45,
        width: '75%',
    },
    sendEmailButton: {
        borderRadius: 10,
        backgroundColor: '#BBDDC1',
        width: '30%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    sendEmailText: {
        color: '#397433',
        fontWeight: 'bold',
        fontSize: 14,
    }
});

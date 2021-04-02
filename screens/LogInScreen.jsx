import * as React from 'react';
import {Button, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, View, Pressable} from 'react-native';
import {Component, useState} from "react";
import * as firebase from "firebase";


export default function LogInScreen({navigation}) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Log In</Text>
            <TextInput style={styles.emailInput} placeholder="Type email"
                       onChangeText={email => setEmail(email)
                       }/>

            <TextInput style={styles.passwordInput} placeholder="type password" secureTextEntry={true}
                       onChangeText={password => setPassword(password)
                       }/>
            <Button title={"Log In"} onPress = {() => firebase.auth().signInWithEmailAndPassword(email, password)
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
                })}/>

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

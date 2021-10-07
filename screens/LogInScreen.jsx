import * as React from 'react';
import {Button, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, View, Pressable, Image} from 'react-native';
import {Component, useState} from "react";
import * as firebase from "firebase";

//WIP
import {Ionicons, FontAwesome, SimpleLineIcons,} from '@expo/vector-icons';
import {setInitialPointsAndBottles} from "./TabTwoScreen";


export default function LogInScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>

            <Image
                source = {require('../assets/images/BINLOGO.png')}
                style = {styles.image}
            />

            <Text style={styles.titleText}>Log In To Your Account</Text>

            <View style={styles.emailContainer}>
                <Ionicons name="mail" size={24} color="grey" />
                <TextInput style={styles.emailInput} placeholder="Email"
                           onChangeText={email => setEmail(email)
                           }/>
            </View>

            <View style={styles.passwordContainer}>
                <SimpleLineIcons name="lock" size={24} color="grey" />
                <TextInput style={styles.passwordInput} placeholder="Password" secureTextEntry={true}
                           onChangeText={password => setPassword(password)
                           }/>
            </View>

            <Pressable style={styles.loginButton}
                       onPress={() => firebase.auth().signInWithEmailAndPassword(email, password)
                           .then((userCredential) => {
                               //can sign in
                               const userId = firebase.auth().currentUser?.uid
                               const pointsReference = firebase.database().ref('Users/' + userId);

                               pointsReference.once('value', (snapshot) => {
                                   /**
                                    * Since "once" is calling for under the users id,
                                    *  it returns some sort of map of children with the users id as their parent.
                                    *  This map stored in the snapshot contains [Email, bottles, points] as the keys
                                    *  and the values of them as their respective "values" in the database.
                                    *  We can then access the child with the key (e.g "Email") using .child('key'),
                                    *  and then the value of such key with .val().
                                    **/
                                   let initBottles = snapshot.child('bottles').val();
                                   let initPoints = snapshot.child('points').val();
                                   //sends the data to the rewards tab once it is collected from the snapshot
                                   //before the user gets to the tab two...
                                   setInitialPointsAndBottles(initBottles,initPoints);
                                   //The user will only be able to move on to the tab navigator
                                   // once the snapshot has collected the info from the database...
                                   navigation.navigate("Root");
                               }).then();

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        flex: 1,
        width: '55%',
        height: '55%',
        top: '-10%',
        marginBottom: '-20%',
        resizeMode: 'contain',
        //position: 'absolute',
        backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        margin: 10,
    },
    titleText: {
        textAlign: 'center',
        fontSize: 30,
        top: '-15%',
        //marginTop: '-40%',
        marginBottom: '10%',
        color: '#397433',
        fontWeight: 'bold',
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
        //top: '-250%',
        bottom: '230%',
    },
    emailContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: '-35%',
    },
    emailInput: {
        fontWeight: '700',
        color: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        height: 45,
        width: '70%',
        backgroundColor: '#F3F4F3',
    },
    passwordContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginRight:10,
        top: '-35%',

    },
    passwordInput: {
        borderRadius: 10,
        backgroundColor: '#f3f4f3',
        fontWeight: '700',
        color: '#fff',
        padding: 10,
        margin: 5,
        height: 45,
        width: '75%',
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
        top: '-15%',
    }
});


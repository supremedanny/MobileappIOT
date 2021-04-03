import * as React from 'react';
import {Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as firebase from "firebase";
import {useState} from "react";

import {Ionicons, Feather, FontAwesome,} from '@expo/vector-icons';


export default function SignUpScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>

            <View style={styles.nameContainer}>
                <Feather name="user" size={24} color="black"/>
                <TextInput style={styles.name} placeholder="Full Name"
                           onChangeText={name => setName(name)
                           }/>
            </View>

            <View style={styles.nameContainer}>
                <Ionicons name="mail" size={24} color="black"/>
                <TextInput style={styles.emailInput} placeholder="Email"
                           onChangeText={email => setEmail(email)
                           }/>
            </View>

            <View style={styles.passwordContainer}>
                <FontAwesome name="lock" size={27} color="black"/>
                <TextInput style={styles.passwordInput} placeholder="Password" secureTextEntry={true}
                           onChangeText={password => setPassword(password)
                           }/>
            </View>

            <View style={styles.passwordContainer}>
                <FontAwesome name="lock" size={27} color="black"/>
                <TextInput style={styles.passwordInput} placeholder={"Confirm Password"} secureTextEntry={true}
                           onChangeText={password2 => setPassword2(password2)
                           }/>
            </View>


            <Pressable style={styles.signUpButton}
                       onPress={() => {
                           if (password == password2)//Compares the passwords, if they match the button will create an account, if not it will push an alert with a custom message.
                           {
                               firebase.auth().createUserWithEmailAndPassword(email, password)
                                   .then((userCredential) => {
                                       // Signed in
                                       const user = userCredential.user;
                                       firebase.auth().currentUser.updateProfile({
                                           displayName: name,
                                       }).then(function () {
                                           // Update successful.
                                       }).catch(function (error) {
                                           // An error happened.
                                           alert(error.message);
                                       })
                                       navigation.navigate("Root")
                                       // ...
                                   })
                                   .catch((error) => {
                                       const errorCode = error.code;
                                       const errorMessage = error.message;
                                       alert(errorMessage);

                                       // ..
                                   })
                           } else {
                               //Passwords didn't match.
                               alert("Passwords do not match.");//Message displayed can be changed if necessary
                           }
                       }}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E7FBEB',
        alignItems: 'center',
        //justifyContent: 'center',
        padding: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: '50%',
        marginBottom: '10%',
        //height: '5%',
        //top: '5%',
        color: '#397433',
        fontWeight: 'bold',
    },

    //Used for Email too
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    name: {
        borderRadius: 10,
        backgroundColor: '#60A268',
        fontWeight: '700',
        color: '#fff',
        padding: 10,
        margin: 5,
        height: 45,
        width: '75%',
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
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 27,
        marginRight: 30,

    },
    passwordInput: { //Also used for the confirm password box...
        borderRadius: 10,
        backgroundColor: '#60A268',
        fontWeight: '700',
        color: '#fff',
        //borderWidth: 1,
        padding: 10,
        margin: 5,
        height: 45,
        width: '86%',
    },
    signUpText: {
        color: '#397433',
        fontWeight: 'bold',
        fontSize: 21,
    },
    signUpButton: {
        borderRadius: 10,
        backgroundColor: '#BBDDC1',
        width: '30%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    }
});

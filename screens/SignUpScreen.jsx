import * as React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as firebase from "firebase";
import {useState} from "react";


export default function SignUpScreen({navigation}) {
    const [email,setEmail] = useState('');
    const [name, setName] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text} >Create an account</Text>

            <TextInput style = {styles.name} placeholder="Name"
                       onChangeText={name => setName(name)
                       }/>

            <TextInput style={styles.emailInput} placeholder="Email"
                       onChangeText={email => setEmail(email)
                       }/>

            <TextInput style={styles.passwordInput} placeholder="Password" secureTextEntry={true}
                       onChangeText={password => setPassword(password)
                       } />

            <TextInput style={styles.passwordInput} placeholder={"Confirm Password"} secureTextEntry={true}
                        onChangeText={password2=>setPassword2(password2)
                        } />

            <Button title="Sign Up"
                    onPress={() => {if(password==password2)//Compares the passwords, if they match the button will create an account, if not it will push an alert with a custom message.
                        {firebase.auth().createUserWithEmailAndPassword(email, password)
                            .then((userCredential) => {
                                // Signed in
                                const user = userCredential.user;
                                firebase.auth().currentUser.updateProfile({
                                    displayName: name,
                                }).then(function() {
                                    // Update successful.
                                }).catch(function(error) {
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
                        }else{
                                //Passwords didn't match.
                                alert("Passwords don't match.");//Message displayed can be changed if necessary
                    }}}/>
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
    name: {
      borderWidth: 1,
      padding: 10,
      margin: 5,
      width: 200
    },
    emailInput: {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        width: 200,
    },
    passwordInput: { //Also used for the confirm password box...
        borderWidth: 1,
        padding: 10,
        margin: 5,
        width: 200,
    },
});

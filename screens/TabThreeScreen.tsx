import * as React from 'react';
import {Button, Image, Pressable, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import * as firebase from "firebase";

export default function TabThreeScreen({navigation}:any) {
    const user = firebase.auth().currentUser;

    return (
        <View style={styles.container}>
            <Text style={styles.userName} >{user?.displayName}</Text>
            <Text style={styles.text} >{user?.email}</Text>
            {/*Signs out the user and changes screen to Landing.*/}

            <Pressable style = {styles.resetPasswordButton}
                onPress={()=>navigation.navigate("ForgotPassword")}>
                <Text style={styles.resetPasswordText}>Reset Password</Text>
            </Pressable>

            <Pressable style = {styles.signOutButton} onPress={()=>firebase.auth().signOut().then(() => {
                // Sign-out successful.
                navigation.navigate("Landing");
            }).catch((error) => {
                // An error happened.
                alert(error.message);
            })}>
                <Text style={styles.signOutText}>Sign Out</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE'
    },
    image: {
        width: '69%',
        height: '69%',
        top: '10%',
        resizeMode: 'contain',
        position: 'absolute',
        backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
    },
    userName: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
    },
    resetPasswordText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#397433',
        fontWeight: 'bold',
    },
    resetPasswordButton: {
        textAlign: 'center',
        color: 'black',
        borderRadius: 5,
        top: '3%',
        justifyContent: 'center',
        backgroundColor: '#BBDDC1',
        width: '30%',
        height: '3%',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    signOutText: {
        color: '#397433',
        fontWeight: 'bold',
        fontSize: 21,
    },
    signOutButton: {
        borderRadius: 5,
        backgroundColor: '#BBDDC1',
        marginLeft: '70%',
        marginRight: '5%',
        width: '23%',
        height: '3%',
        alignItems: 'center',
        top: '-45%',
    }
});

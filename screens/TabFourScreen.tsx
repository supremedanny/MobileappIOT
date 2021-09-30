import * as React from 'react';
import {Button, Image, Pressable, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import * as firebase from "firebase";
import {Feather, Ionicons,FontAwesome5,Octicons} from '@expo/vector-icons';

export default function TabFourScreen({navigation}:any) {
    const user = firebase.auth().currentUser;


    return (
        <View style={styles.container}>
            <View style = {styles.accountContainer}>
                <Text style={styles.userName}>{user?.displayName}</Text>
                <Image
                    source = {require('../assets/images/ProfileImage.png')}
                    style = {styles.profileImage}
                />
            </View>

            {/** FROM HERE ON OUT - BOXES FOR BUTTONS **/}

            <View style={styles.boxContainer}>

                <View style={{left: '2%',marginRight: '2%',backgroundColor: '#EEEEEE',}}>
                    <Feather name="user" size={30} color="#60A268"/>
                </View>

                <Pressable
                    style ={styles.button}
                    onPress={()=> navigation.navigate("Root")}>
                    <Text style={styles.boxInsideText}>Change Username</Text>
                </Pressable>

            </View>

            <View style={styles.boxContainer}>

                <View style={{left: '2%',marginRight: '2%',backgroundColor: '#EEEEEE',}}>
                    <Ionicons name="key-sharp" size={32} color="#60A268" />
                </View>

                <Pressable
                    style ={styles.button}
                    onPress={()=> navigation.navigate("ForgotPassword")}>
                    <Text style={styles.boxInsideText}>Reset Password</Text>
                </Pressable>

            </View>
            <View style={styles.boxContainer}>

                <View style={{left: '2%',marginRight: '4%',backgroundColor: '#EEEEEE',}}>
                    <FontAwesome5 name="question-circle" size={30} color="#60A268"/>
                </View>

                <Pressable
                    style ={styles.button}
                    onPress={()=> navigation.navigate("Root")}>
                    <Text style={styles.boxInsideText}>Help</Text>
                </Pressable>

            </View>

            {/** Separator between all the settings and the sign Out box **/}
            <View style={styles.separator}></View>

            {/** Sign Out box **/}
            <View style={styles.signOutBoxContainer}>

                <View style={{left: '8%',marginRight: '4%',backgroundColor: '#EEEEEE',}}>
                    <Octicons name="sign-out" size={30} color="#60A268" />
                </View>

                <Pressable
                    style ={styles.button}
                    onPress={()=>firebase.auth().signOut().then(() => {
                        // Sign-out successful.
                        navigation.navigate("Landing");
                    }).catch((error) => {
                        // An error happened.
                        alert(error.message);
                    })}>
                    <Text style={styles.boxInsideText}>Sign Out</Text>
                </Pressable>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#EEEEEE'
    },
    accountContainer: {
        top: '8%',
        backgroundColor: '#EEEEEE',
        height: '20%',
        width:'100%',
        borderColor: 'grey',
        borderBottomWidth: 1,
    },
    profileImage: {
        width: '60%',
        height: '60%',
        top: '20%',
        marginLeft: '-10%',
        resizeMode: 'contain',
        position: 'absolute',
    },
    userName: {
        fontSize: 30,
        fontWeight: 'bold',
        top: '30%',
        marginLeft: '35%',
        color: 'black'
    },
    points: {
        left: '40%',
        top: '30%',
        position: 'relative',
        color: 'black',
        fontWeight: '300',
        fontSize: 25,
    },
    boxContainer:{
        top: '18%',
        marginBottom: '2%',
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        flexDirection: 'row',
        height: '8%',
        width:'80%',
    },
    signOutBoxContainer:{
        top: '30%',
        marginBottom: '2%',
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        flexDirection: 'row',
        height: '8%',
        width:'80%',
    },
    button: {
        backgroundColor: '#EEEEEE',
        height: '60%',
        width: '100%',
        justifyContent: "center",
    },
    boxInsideText: {
        marginLeft: '4%',
        fontSize: 20,
        color: 'black',
    },
    separator: {
        height: 1,
        top: '10%',
        left:'25%',
        width: '100%',
        backgroundColor: 'grey',
    }
});

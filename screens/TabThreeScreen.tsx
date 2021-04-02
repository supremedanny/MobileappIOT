import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import * as firebase from "firebase";

export default function TabThreeScreen({navigation}:any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            {/*Signs out the user and changes screen to Landing.*/}
            <Button title="Sign Out" onPress={()=>firebase.auth().signOut().then(() => {
                // Sign-out successful.
                navigation.navigate("Landing");
            }).catch((error) => {
                // An error happened.
                alert(error.message);
            })}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
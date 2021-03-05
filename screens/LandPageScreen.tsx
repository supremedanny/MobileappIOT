import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import { RootStackParamList } from '../types';
import Navigation from "../navigation";

export default function LandPageScreen( {navigation,}: StackScreenProps<RootStackParamList, 'Landing'> ) {
    return (
        <View style={styles.container}>
            <Text style={styles.linkText}>--WIP--</Text>

            <Button
                title = {"Log In"} onPress={()=> navigation.navigate('LogIn')}
                color = '#fff'

            />
            <Button
                title = {"Sign Up"} onPress={()=> navigation.navigate('SignUp')}
                color = '#fff'
            />
            {/*TODO: Remove all the above prints from the screens.*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8080C0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        color: 'cyan',
        fontSize: 40,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

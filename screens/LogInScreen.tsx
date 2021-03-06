import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { RootStackParamList } from '../types';
import Navigation from "../navigation";
import {TextField} from "@material-ui/core";



export default function LogInScreen({navigation,}: StackScreenProps<RootStackParamList, any> ){
    return(
        <View style={styles.container}>
            <Text>--WIP--</Text>
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

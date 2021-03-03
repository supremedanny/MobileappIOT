import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import Navigation from "../navigation";

export default function LandPageScreen({
    navigation,
      }: StackScreenProps<RootStackParamList, 'LandingPage'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Landing Page</Text>
            <Text style={styles.linkText}>--WIP--</Text>
            {/*TODO: Remove all the above prints from the screens.*/}
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

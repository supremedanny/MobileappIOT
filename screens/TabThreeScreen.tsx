import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Activities</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEEEEE'
    },
    title: {
        fontSize: 40,
        top: '10%',
        fontWeight: 'bold',
        color: 'black'
    },

});

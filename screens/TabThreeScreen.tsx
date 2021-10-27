import * as React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import {Foundation} from "@expo/vector-icons";
import {getBottleCount, getPoints} from "../DataBaseCommands";
import {useState} from "react";

//do not change, this is for a user that signs up which will initially have 0 bottles and points...
let initialBottles = 0;
let initialPoints = 0;
let ouncesPlastic = 0;

/** These values get changed from Log in screen. **/
export function setInitialPointsAndBottles(_bottles: any, _points: any){
    initialBottles = _bottles;
    initialPoints = _points;

    //prepares the methods created in the commands folder such that it doesn't return -2 in the first refresh...
    getBottleCount();
    getPoints();
}

export default function TabThreeScreen() {
    let [bottles, setBottles] = useState(initialBottles);
    let [points, setPoints] = useState(initialPoints);

    //prepares the methods created in the commands folder such that it doesn't return -2 in the first refresh...
    getBottleCount();
    getPoints();

    // https://bottledwater.org/environmental-footprint/
    ouncesPlastic = (bottles*8.3)/28.35;

    return (


        <View style={styles.container}>

            <View style = {styles.greenContainer}>
                <Text style={styles.title}>Activity  </Text>
                <Foundation name="graph-bar"  style={styles.graphIcon}  />
            </View>


            <View style = {styles.pointsContainer}>
                <Text style={styles.totalPointsText}>Total Points</Text>
                <Text style = {styles.pointsNumber}>{points}</Text>
            </View>

            <View style = {styles.bottleCountContainer}>
                <Text style={styles.generalText}>Bottles Recycled</Text>
                <Image
                    source = {require('../assets/images/water.png')}
                    style = {styles.bottleImage}
                />
                <Text style = {styles.numbers}>{bottles}</Text>
            </View>

            <View style = {styles.friendBottleCountContainer}>
                <Text style={styles.generalText}>Bottles Between Friends</Text>
                <Image
                    source = {require('../assets/images/friends.png')}
                    style = {styles.friendsImage}
                />
            </View>

            <View style = {styles.poundsCountContainer}>
                <Text style={styles.generalText}>Ounces of Plastic</Text>
                <Image
                    source = {require('../assets/images/plastic-bin.png')}
                    style = {styles.binImage}
                />
            <Text style = {styles.numbers}>{ouncesPlastic.toFixed(1)}</Text>
            </View>

            <View style = {styles.turtleCountContainer}>
                <Text style={styles.turtleCountText}>Turtles Saved</Text>
                <Image
                    source = {require('../assets/images/turtle.png')}
                    style = {styles.turtleImage}
                />
            </View>

            <Pressable
                style={styles.RefreshButton}
                onPress={() => {setBottles(getBottleCount()); setPoints(getPoints());}}
            >
                <Text style={styles.RefreshText}>Refresh</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEEEEE'
    },

    greenContainer: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: '#326834'
    },

    title: {
        fontSize: 40,
        top: '20%',
        left: '15%',
        fontWeight: 'bold',
        color: 'white'
    },

    graphIcon: {
        fontSize: 50,
        top: '19%',
        left: '15%',
        color: 'white'
    },

    turtleIcon: {
        fontSize: 50,
        left: '50%',
        color: 'white'
    },

    totalPointsText:{
        fontSize: 17,
        fontWeight: '700',
        top: '10%',
        marginLeft: '5%',
        color: '#468B26'
    },

    generalText:{
        fontSize: 18,
        fontWeight: '700',
        //marginLeft: '5%',
        color: 'black',
        position: 'absolute',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    turtleCountText:{
        fontSize: 20,
        fontWeight: '700',
        marginLeft: '5%',
        color: 'white'
    },

    pointsContainer:{
        top: '20%',
        borderRadius: 20,
        backgroundColor: 'white',
        height: 125,
        width:'90%',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 15,
    },

    pointsNumber:{
        fontSize: 55,
        justifyContent: 'center',
        color: 'black',
        fontWeight: '700',
        top: '33%',
        left: '10%',
        position: 'absolute',
    },

    //Container: Bottles Recycled
    bottleCountContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: '40%',
        borderRadius: 20,
        backgroundColor: 'white',
        height: 75,
        width:'85%',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 7,
    },

    // Water bottle: https://www.flaticon.com/free-icon/plastic-bottle_3209925?related_id=3209925
    bottleImage: {
        width: 45,
        height: 45,
        left: '82%',
        resizeMode: 'contain',
        position: 'absolute',
        backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
    },

    //Container: Bottles Recycled Between Friends
    friendBottleCountContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: '52%',
        borderRadius: 20,
        backgroundColor: '#D5E4FD',
        height: 75,
        width:'85%',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 7,
    },

    // Friends Icon: https://www.flaticon.com/free-icon/development_1189197?related_id=1189197&origin=pack
    friendsImage: {
        width: 40,
        height: 40,
        left: '82%',
        resizeMode: 'contain',
        position: 'absolute',
        backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
    },

    //Container: Ounces of Plastic
    poundsCountContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: '64%',
        borderRadius: 20,
        backgroundColor: '#B7D1F8',
        height: 75,
        width:'85%',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 7,
    },

    // Bin image: https://www.flaticon.com/premium-icon/plastic-bin_3300665?term=plastic&page=1&position=14&page=1&position=14&related_id=3300665&origin=search
    binImage: {
        width: 40,
        height: 40,
        left: '82%',
        resizeMode: 'contain',
        position: 'absolute',
        backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
    },

    //Container: Turtles Saved
    turtleCountContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: '76%',
        borderRadius: 20,
        backgroundColor: '#7AAEFC',
        height: 75,
        width:'85%',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 7,
    },

    // https://www.flaticon.com/premium-icon/turtle_1187387?term=turtle&page=3&position=13&page=3&position=13&related_id=1187387&origin=search
    turtleImage: {
        width: 40,
        height: 40,
        left: '81%',
        resizeMode: 'contain',
        position: 'absolute',
        backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
    },

    numbers:{
        fontSize: 43,
        justifyContent: 'center',
        color: 'black',
        fontWeight: '700',
        left: '6%',
        position: 'absolute',
    },

    RefreshButton: {
        top: '74%',
        borderRadius: 10,//how round the button is on the corners
        borderLeftWidth:50,
        borderRightWidth: 50,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: '#397433',
        backgroundColor: '#397433',
        resizeMode: "contain",
        marginBottom: 200,
    },

    RefreshText: {
        color: '#E5F9E9',
        fontWeight: 'bold',
        fontSize: 31,
    },
});

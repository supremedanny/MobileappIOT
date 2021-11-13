import * as React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import {getBottleCount, getPoints} from "../DataBaseCommands";
import {useState} from "react";
import {AntDesign} from "@expo/vector-icons";

//do not change, this is for a user that signs up which will initially have 0 bottles and points...
let initialBottles = 0;
let initialPoints = 0;

/** These values get changed from Log in screen. **/
export function setInitialPointsAndBottles(_bottles: any, _points: any){
  initialBottles = _bottles;
  initialPoints = _points;

  //prepares the methods created in the commands folder such that it doesn't return -2 in the first refresh...
  getBottleCount();
  getPoints();
}

export default function TabTwoScreen() {
  let [bottles, setBottles] = useState(initialBottles);
  let [points, setPoints] = useState(initialPoints);

  //prepares the methods created in the commands folder such that it doesn't return -2 in the first refresh...
  getBottleCount();
  getPoints();

  return (

    <View style={styles.container}>

      <View style = {styles.greenContainer}>
        <AntDesign name="gift" color = {'white'}  />
        <Text style={styles.title}>Rewards</Text>
        <AntDesign name="gift"  style={styles.giftIcon}/>
      </View>

      <View style = {styles.bottleContainer}>
        <Text style={styles.boxTitleText}>Bottles Recycled</Text>
        <Text style = {styles.numbers}>{bottles}</Text>
        <Image
            source = {require('../assets/images/waterBottleIcon.png')}
            style = {styles.bottleImage}
        />

      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.boxTitleText}>Points</Text>
        <Text style={styles.numbers}>{points}</Text>
        <Image
            source = {require('../assets/images/coin.png')}
            style = {styles.coinImage}
        />

      </View>

      <View style={styles.couponsContainer}>
        <Text style={styles.boxTitleText}>Coming Soon</Text>
        <Text style={styles.numbers}>coupons</Text>
        <Image
            source = {require('../assets/images/discount.png')}
            style = {styles.discountImage}
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

  imageContainer: {
    flex: 1,
    alignItems: 'center',
    width: '10%',
    height: '10%',
    backgroundColor: '#EEEEEE'
  },
  bottleImage: {
    alignItems: 'center',
    width: 80,
    height: 80,
    top: '17%',
    marginLeft: '3%',
    resizeMode: 'contain',
    position: 'absolute',
    backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
  },
  coinImage:{
    alignItems: 'center',
    width: 122,
    height: 122,
    top: '3%',
    marginLeft: '-1.5%',
    position: 'absolute',
    backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
  },
  discountImage:{
    alignItems: 'center',
    width: 77,
    height: 77,
    top: '20%',
    marginLeft: '3%',
    resizeMode: 'contain',
    position: 'absolute',
    backgroundColor: undefined,//only add a color to see where the border of the image really is, like a "hitbox"
  },
  title: {
    fontSize: 40,
    top: '20%',
    left: '10%',
    fontWeight: 'bold',
    color: 'white'
  },
  boxTitleText:{
    fontSize: 30,
    fontWeight: '200',
    top: '7%',
    marginLeft: '30%',
    color: 'black'
  },
  numbers:{
    fontSize: 35,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontWeight: '600',
    marginLeft: '50%',
    marginTop: '5%',
  },
  bottleContainer:{
    top: '20%',
    backgroundColor: 'white',
    height: 125,
    width:'90%',
    shadowColor: '#a6a6a6',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0.3, height:0.3},
    borderRadius: 15,
  },
  pointsContainer:{
    top: '20%',
    backgroundColor: 'white',
    marginTop: 15,
    height: 125,
    width:'90%',
    shadowColor: '#a6a6a6',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0.3, height:0.3},
    borderRadius: 15,
  },
  couponsContainer:{
    top: '20%',
    backgroundColor: 'white',
    marginTop: 15,
    height: 125,
    width:'90%',
    shadowColor: '#a6a6a6',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0.3, height:0.3},
    borderRadius: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  RefreshButton: {
    top: '33%',
    borderRadius: 10,//how round the button is on the corners
    borderWidth:60,
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

  giftIcon: {
    fontSize: 45,
    top: '20%',
    left: '15%',
    color: 'white'
  },

});

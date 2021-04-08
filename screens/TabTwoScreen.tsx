import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rewards</Text>

      <View style = {styles.bottleContainer}>
        <Text style={styles.boxTitleText}>Bottles Recycled</Text>
        <Text style={styles.numbers}>11</Text>
        <Image
            source = {require('../assets/images/waterBottleIcon.png')}
            style = {styles.bottleImage}
        />
      </View>

      <View style={styles.pointsContainer}>
        <Text style={styles.boxTitleText}>Points</Text>
        <Text style={styles.numbers}>33</Text>
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EEEEEE'
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
    top: '10%',
    fontWeight: 'bold',
    color: 'black'
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

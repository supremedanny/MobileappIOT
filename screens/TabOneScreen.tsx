import * as React from 'react';
import {Pressable, SafeAreaView, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-generator';
import * as firebase from "firebase";
import { Text, View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';
import {useRef, useState} from "react";

export default function TabOneScreen({navigation}:any) {
  const user = firebase.auth().currentUser;
  const userID = user?.uid;
  return (
      <SafeAreaView style={styles.container}>

        <View style={styles.titleContainer}>
          {/*<Text style={styles.title}>QR Code</Text>*/}
        </View>

        <View style={styles.qrCodeContainer}>

          <QRCode
              //QR code value
              value={(userID != undefined) ? userID : 'invalid'}
              {...(userID == undefined) ? alert("Invalid QR Code. Contact support."): undefined}
              //sends alert if user has no UID ("This should never happen.")
              //size of QR Code
              size={250}
              bgColor={'black'}
              fgColor={'#EEEEEE'}
          />

        </View>

        <View style={styles.greenContainer}>
          <Ionicons name="ios-information-circle-outline" size={28} color="#434242" />
          <Text style={styles.text}>PRESENT TO SCANNER</Text>
        </View>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'black',
    justifyContent: 'center',

  },
  text:{
    fontSize: 18,
    alignItems: 'center',
    fontWeight: '500',
    color: '#434242',
    opacity: 1,

  },
  greenContainer: {
    flexDirection: 'row',
    backgroundColor: '#d7d6d6',
    width: '60%',
    alignItems: 'center',
    marginBottom: '5%',
    justifyContent: 'center',
    borderColor: 'transparent',
    borderRadius: 15,
    borderWidth: 3,
    marginTop: '10%',
  },
  titleContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    //bottom: '7%',
    marginBottom: '5%',
    //padding: 10,
    width: '100%',
    backgroundColor: '#EEEEEE'
  },

  qrCodeContainer:{
    alignItems: 'center',
  },
});

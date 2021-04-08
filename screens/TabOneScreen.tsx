import * as React from 'react';
import {Pressable, SafeAreaView, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-generator';
import * as firebase from "firebase";
import { Text, View } from '../components/Themed';
import {useRef, useState} from "react";

export default function TabOneScreen() {
  const user = firebase.auth().currentUser;
  const userID = user?.uid;
  return (
      <SafeAreaView style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>QR Code</Text>
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
          <Text style={styles.text}>SCAN</Text>
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
    //fontStyle: 'italic',
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'black',
    justifyContent: 'center',

  },
  text:{
    fontSize: 40,
    alignItems: 'center',
    fontWeight: 'normal',
    color: 'white',

  },
  greenContainer: {
    backgroundColor: '#60A268',
    width: '60%',
    alignItems: 'center',
    marginBottom: '5%',
    borderColor: '#60A268',
    borderRadius: 40,
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

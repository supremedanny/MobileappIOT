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

          <Text style={styles.title}>QR Code</Text>

        <View style={styles.qrCodeContainer}>

          <Text style={styles.title}>Scan the barcode below to collect points.</Text>

          <QRCode
              //QR code value
              value={(userID != undefined) ? userID : 'invalid'}
              {...(userID == undefined) ? alert("Invalid QR Code. Contact support."): undefined}
              //sends alert if user has no UID ("This should never happen.")
              //size of QR Code
              size={350}
              bgColor={'black'}
              fgColor={'white'}
          />

        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7FBEB',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'black',
    backgroundColor: '#E7FBEB'
  },
  qrCodeContainer:{
    backgroundColor: 'white',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

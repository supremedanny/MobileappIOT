import * as React from 'react';
import {Pressable, SafeAreaView, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-generator';
import * as firebase from "firebase";
import { Feather } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';


export default function TabOneScreen({navigation}:any) {
  const user = firebase.auth().currentUser;
  const userID = user?.uid;
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.greenBox}>
          <Text style={styles.title}>QR Code</Text>
        </View>

        <View style={styles.messageContainer}>
          <Feather name="info" size={28} style={styles.infoIcon} />
          <Text style={styles.text}>Scan the barcode below to collect points.</Text>
        </View>

        <View style={styles.qrCodeContainer}>

          <QRCode
              //QR code value
              value={(userID != undefined) ? userID : 'invalid'}
              {...(userID == undefined) ? alert("Invalid QR Code. Contact support."): undefined}
              //sends alert if user has no UID ("This should never happen.")
              //size of QR Code
              size={280}
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
    backgroundColor: '#EEEEEE',
  },
  title: {
    fontSize: 40,
    marginRight: '40%',
    fontWeight: 'bold',
    color: 'white',
  },
  text:{
    fontSize: 24,
    fontWeight: '700',
    marginLeft: '4%',
    marginRight: '10%',
    color: '#326834',
  },
  infoIcon:{
    position: 'absolute',
    color: 'gray',
    left: "87%",
    top: "8%",
  },
  greenBox: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '0%',
    width: '100%',
    height: '25%',
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 10,
    backgroundColor: '#326834',
  },

  messageContainer: {
    position: 'absolute',
    top: '20%',
    width: '80%',
    height: '18%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 20,
    shadowOpacity: .4,
    opacity: 0.6,
    borderRadius: 20,

  },
  qrCodeContainer:{
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 20,
    marginTop: '40%',
    shadowRadius: 20,
    shadowOpacity: .3,
  },
});

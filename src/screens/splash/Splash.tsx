import { ImageBackground, StyleSheet, Text, View, Image ,Alert} from 'react-native';
import React from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { ButtonComponent } from '@components'
import { images, Colors } from '@assets'

const Splash = ({ navigation }) => {

  const handleButtonPress = () => {
    // Handle button press here
    console.log('Button pressed');
    navigation.navigate('OnboardingEmail')
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images.bgImage} resizeMode="cover" style={styles.image}>
        <Image source={images.logo} style={styles.text} />
        <Text style={styles.heet}>HEET</Text>
        <View style={styles.getRate}>
          <Text style={styles.heet}>RATE AND</Text>
          <Text style={styles.heet}>GET RATED</Text>
        </View>
        <View style={styles.myBtn}>
          <ButtonComponent

            title="Continue with Apple"
            onPress={() => Alert.alert('Continue with Apple')}
            textStyle={[styles.apppleBtn, { color: Colors.bgWhite, }]}
            backgroundStyle={{ backgroundColor: Colors.bgBlack }}
          />
          <ButtonComponent
            title="Continue with Google"
            onPress={() => Alert.alert('Continue with Google')}
            textStyle={[styles.apppleBtn, { color: Colors.bgBlack, }]}
            backgroundStyle={{ backgroundColor: Colors.bgWhite }}
          />
          <ButtonComponent
            title="Use Email"
            onPress={handleButtonPress}
            textStyle={[styles.apppleBtn, { color: Colors.bgBlack, }]}
            backgroundStyle={{ backgroundColor: Colors.bgWhite }}
          />
          <Text style={styles.desc}>By signing up, you agree to our Terms.</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  desc: { textAlign: 'center', color: Colors.bgWhite, fontStyle: 'italic' },
  apppleBtn: { fontSize: RFValue(18, 580), fontStyle: 'italic', lineHeight: 21, fontWeight: 'bold' },
  heet: {
    fontSize: 42,
    lineHeight: 46,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.bgWhite,
    marginTop: hp('2')
  },
  getRate: { marginTop: hp('5'), },
  text: {
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: hp('10'),
    height: hp('12%'), // 70% of height device screen
    width: wp('20%'),  // 80% of width device screen

  },
  myBtn: { width: wp('80'), height: hp('50'), alignSelf: 'center', marginVertical: hp('10') }
});
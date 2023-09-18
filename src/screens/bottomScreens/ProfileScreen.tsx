import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import React, { useState } from 'react'
import { Colors, images } from '@assets'
import { ContainerBox, OutOfSwipes, PrimaryButton } from '@screens'
import { HeadingMain } from '@components'
import { getHeight, getSize, getWidth } from '@helpers'


const ProfileScreen = ({navigation}) => {
  const [outOfSwipes, setOutOfSwipes] = useState(false)
  return (
    <ScrollView contentContainerStyle={styles.main}
    >
      <View style={{ marginVertical: getHeight(1) }}>
        <View style={{ alignSelf: 'center', }}>
          <TouchableOpacity style={styles.profileBtn}>
            <Entypo name='camera' size={15} />
          </TouchableOpacity>
          <Image source={images.one} style={styles.profileImg} />
        </View>
        <HeadingMain title={'Charlie, 24'} textStyle={styles.textHeading1} />
        <View style={styles.firstHeading}>
          <Text style={[styles.smallText, { color: Colors.bgBlack }]}>Puerto Rico, US</Text>
        </View>


        <View style={{ marginTop: getHeight(1) }}>
          <ContainerBox>
            <HeadingMain title={'Bio'} textStyle={[styles.textHeading3,]} />
            <View style={styles.firstHeading}>
              <View style={styles.bioText}>
                <Text style={styles.smallText}>Hi! My name is Charlie
                  and this is my Bio.
                  I like yoga,
                  skateboarding, and cool music.</Text>
              </View>
            </View>
          </ContainerBox>
        </View>





        <View style={{ marginTop: getHeight(2) }}>
          <ContainerBox>
            <TouchableOpacity onPress={() => navigation.navigate('InterestScreen')}>

            <HeadingMain title={'Interests'} textStyle={[styles.textHeading3,]} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <PrimaryButton title={'Skateboarding'} style={styles.button} textStyle={styles.text} />
              <PrimaryButton title={'Gym'} style={styles.button} textStyle={styles.text} />
              <PrimaryButton title={'Add +'} style={styles.button} textStyle={styles.text} />
            </View>
          </ContainerBox>


          <View style={{ marginTop: getHeight(2) }}>
            <ContainerBox>
              <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                <HeadingMain title={'Heet Score!'} textStyle={styles.textHeading3} />
              </View>

              <View style={[styles.firstHeading,]}>
                <MaterialIcons style={{ marginRight: getWidth(4) }} name="local-fire-department" color={'red'} size={25} />
                <HeadingMain title={'77'} textStyle={styles.textHeading2} />
              </View>
            </ContainerBox>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  bioText: {
    marginVertical: getHeight(1),
    backgroundColor: Colors.bgGray,
    padding: 10
    , borderRadius: 10
  },
  main: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bgWhite
  },
  profileImg: {
    width: getWidth(25),
    height: getHeight(14), 
    borderWidth: 2,
    borderRadius: 100,
    borderColor:Colors.textOrange,
  },
  profileBtn: {
    position: 'absolute',
    backgroundColor: Colors.bgGray,
    zIndex: 1000, padding: 7,
    alignSelf: 'flex-end',
    borderWidth: 2,
    borderRadius: 100,
    borderColor:Colors.textOrange,
  },
  text: {
    fontSize: getSize(15),
    color: Colors.bgWhite,
    textAlign: 'left',
    lineHeight: 18,
  },
  button: {
    width: 'auto',
    marginVertical: getHeight(1),
    backgroundColor: Colors.textOrange,
    padding: 7,
    // paddingHorizontal: 5,
    alignItems: 'center',
    borderRadius: 20, alignSelf: 'center',
  },
  smallText: {
    textAlign: 'center',
    fontSize: getSize(12),
    lineHeight: 15
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgWhite

  },
  firstHeading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: getWidth(70)
    // height:getHeight(10)
  },
  textHeading1: {
    color: Colors.bgBlack,
    padding: 10,
    fontSize: getSize(25),
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textHeading2: {
    color: Colors.bgBlack,
    fontSize: getSize(30),
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  textHeading3: {
    color: Colors.bgBlack,
    fontSize: getSize(16),
    lineHeight: 19,
    fontWeight: 'bold',

  },
  textSide: {
    textAlign: 'left',
  }

})
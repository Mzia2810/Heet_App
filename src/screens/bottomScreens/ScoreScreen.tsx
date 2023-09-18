import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React, { useState } from 'react'
import { Colors, images } from '@assets'
import { ContainerBox, OutOfSwipes, PrimaryButton } from '@screens'
import { HeadingMain } from '@components'
import { getHeight, getSize, getWidth } from '@helpers'


const ScoreScreen = () => {
  const [outOfSwipes, setOutOfSwipes] = useState(false)
  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.bgWhite
    }}
    // style={styles.container}
    >

      {
        outOfSwipes && <OutOfSwipes />
      }
      <View style={{ marginVertical: getHeight(2) }}>
        <HeadingMain title={'Heet Score!'} textStyle={styles.textHeading1} />
        <ContainerBox>
          <View style={styles.firstHeading}>
            <MaterialIcons style={{ marginRight: getWidth(4) }} name="local-fire-department" color={'red'} size={25} />
            <HeadingMain title={'77'} textStyle={styles.textHeading2} />
          </View>
        </ContainerBox>
        <View style={{ marginTop: getHeight(5) }}>
          <ContainerBox>
            <View style={styles.firstHeading}>

            </View>
          </ContainerBox>
        </View>
        <View style={{ marginVertical: getHeight(3) }}>
          <Text style={styles.smallText}>Continue to grow your Heet score by rating users and updating your profile!</Text>
        </View>
        <View style={{ marginTop: getHeight(2) }}>
          <ContainerBox>
            <View style={styles.firstHeading}>
              <HeadingMain title={'Refer friends, get rewarded!'} textStyle={styles.textHeading3} />
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.smallText}>Share Heet with a friend and up your Heet score!</Text>
            </View>
            <PrimaryButton title={'share'} style={styles.button} textStyle={styles.text} />
          </ContainerBox>
        </View>
      </View>
    </ScrollView>
  )
}

export default ScoreScreen

const styles = StyleSheet.create({
  text: {
    fontSize: getSize(15),
    color: Colors.bgWhite,
    textAlign: 'left',
    lineHeight: 18,
},
button: {
  width:getWidth(30),
    marginVertical: getHeight(1),
    backgroundColor: Colors.textOrange,
    padding: 5,
    // paddingHorizontal: 5,
    alignItems:'center',
    borderRadius: 20,alignSelf:'center', 
},
  smallText:{ textAlign: 'center', fontSize: getSize(12), lineHeight: 15 },
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
    textAlign: 'center',

  }

})
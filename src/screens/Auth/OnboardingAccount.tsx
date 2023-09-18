/* eslint-disable */
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { getHeight, getSize, getWidth } from '@helpers';
import React, { useState } from 'react';
import { Colors } from '@assets';
import { CustomHeader, HeadingMain, CustomTextInput,ButtonComponent } from '@components';

const OnboardingAccount = () => {
  const [text, setText] = useState('')
  return (
    <View style={{ flex: 1, backgroundColor: Colors.textOrange }}>
      <View style={styles.bar1}>
        <View style={styles.bar2}></View>
      </View>
      <CustomHeader onPress={() => console.log('Muhammad')} />
      <View style={styles.headingView}>
        <HeadingMain title="Create your account" />
        <View>
          <CustomTextInput
            style={styles.input}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Username"
            placeholderTextColor={Colors.gray}
            keyboardType="default"
          />
          <CustomTextInput
            style={styles.input}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Password"
            placeholderTextColor={Colors.gray}
            keyboardType="password"
          />
          
        </View>
      
      </View>
      <View style={styles.myBtn}>

<ButtonComponent
    title="Next"
    onPress={() => console.log('Muhammad')}
    textStyle={[styles.apppleBtn, { color: Colors.bgBlack, }]}
    backgroundStyle={{ backgroundColor: Colors.bgWhite }}
/>
</View>
    </View>
  );
};

export default OnboardingAccount;

const styles = StyleSheet.create({
    apppleBtn: { fontSize: getSize(18), fontStyle: 'italic', lineHeight: 21, fontWeight: 'bold' },
    myBtn: {
        flex: 1,
        justifyContent: 'flex-end', width: getWidth(60), height: getHeight(40), alignSelf: 'center', marginVertical: getHeight(10)
    },
  input: {
    backgroundColor: Colors.bgWhite,
    margin: 8,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: getSize(15),
    fontStyle: 'italic',

  },
  para: {
    width: getWidth(80),
    textAlign: 'center',
    fontSize: getSize(12),
    lineHeight: 14,
    color: Colors.bgWhite,
    alignSelf: 'center',
  },
  headingView: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: getWidth(90),
    marginVertical: getHeight(5),
  },
  bar1: {
    marginTop: getHeight(2),
    alignSelf: 'center',
    width: getWidth(90),
    height: getHeight(0.7),
    backgroundColor: Colors.bgWhite,
  },
  bar2: {
    // alignSelf: 'start',
    width: getWidth(90),
    height: getHeight(0.7),
    backgroundColor: '#E45800',
  },
});

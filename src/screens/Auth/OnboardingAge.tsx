/* eslint-disable */
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { getHeight, getSize, getWidth } from '@helpers';
import React, { useState } from 'react';
import { Colors } from '@assets';
import { CustomHeader, HeadingMain, ButtonComponent, CustomTextInput } from '@components';

const OnboardingAge = ({navigation}) => {
    const [text, setText] = useState('')
    return (
        <View style={{ flex: 1, backgroundColor: Colors.textOrange }}>
            <View style={styles.bar1}>
                <View style={styles.bar2}></View>
            </View>
            <CustomHeader onPress={() => navigation.goBack()} />
            <View style={styles.headingView}>
                <HeadingMain title="When’s your birthday?" />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {/* <CustomTextInput /> */}
                    <CustomTextInput
                        style={styles.input}
                        onChangeText={(text) => setText(text)}
                        value={text}
                        placeholder="DD"
                        placeholderTextColor={Colors.gray}
                        keyboardType="default"
                    />
                    <CustomTextInput
                        style={styles.input}
                        onChangeText={(text) => setText(text)}
                        value={text}
                        placeholder="MM"
                        placeholderTextColor={Colors.gray}
                        keyboardType="default"
                    />
                    <CustomTextInput
                        style={styles.input}
                        onChangeText={(text) => setText(text)}
                        value={text}
                        placeholder="YYYY"
                        placeholderTextColor={Colors.gray}
                        keyboardType="default"
                    />

                </View>
                <Text style={styles.para}>
                    We only share your age with users.
                </Text>



            </View>
            <View style={styles.myBtn}>

                <ButtonComponent
                    title="Next"
                    onPress={() => navigation.navigate('OnboardingGender')}
                    textStyle={[styles.apppleBtn, { color: Colors.bgBlack, }]}
                    backgroundStyle={{ backgroundColor: Colors.bgWhite }}
                />
            </View>
        </View>
    );
};

export default OnboardingAge;

const styles = StyleSheet.create({
    apppleBtn: { fontSize: getSize(18), fontStyle: 'italic', lineHeight: 21, fontWeight: 'bold' },
    text: {
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: getHeight(10),
        height: getHeight(12), // 70% of height device screen
        width: getWidth(20),  // 80% of width device screen

    },
    myBtn: {
        flex: 1,
        justifyContent: 'flex-end', width: getWidth(60), height: getHeight(40), alignSelf: 'center', marginVertical: getHeight(10)
    },
    input: {
        backgroundColor: Colors.bgWhite,
        margin: 10,
        borderRadius: 5,
        paddingLeft: 13,
        fontSize: getSize(15),
        fontStyle: 'italic',
        width: getWidth(20),
        height: getHeight(6),


    },
    para: {
        width: getWidth(80),
        fontSize: getSize(12),
        lineHeight: 14,
        color: Colors.bgWhite,
        alignSelf: 'center',
        marginLeft: 40
    },
    headingView: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: getWidth(75),
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
        width: getWidth(45),
        height: getHeight(0.7),
        backgroundColor: '#E45800',
    },
});

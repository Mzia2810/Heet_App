/* eslint-disable */
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { getHeight, getSize, getWidth } from '@helpers';
import React, { useState } from 'react';
import { Colors, images } from '@assets';
import { CustomHeader, HeadingMain, ButtonComponent } from '@components';

const OnboardingPicture = ({navigation}) => {
    const [text, setText] = useState('')
    return (
        <View style={{ flex: 1, backgroundColor: Colors.textOrange }}>
            <View style={styles.bar1}>
                <View style={styles.bar2}></View>
            </View>
            <CustomHeader onPress={() => navigation.goBack()} />
            <View style={styles.headingView}>
                <HeadingMain title="Add your first photo" />


                <Text style={styles.para}>
                You can add more later.
                </Text>
            </View>

            <TouchableOpacity style={styles.profile}>
                <Image source={images.icons} style={{ alignSelf: 'center', marginTop: getHeight(10), position: 'absolute', zIndex: 1000, borderRadius: 100, width: getWidth(10), height: getHeight(5) }} />
                <Image source={images.profile} style={{ borderRadius: 100, width: getWidth(50), height: getHeight(27) }} />
            </TouchableOpacity>

            <View style={styles.myBtn}>

                <ButtonComponent
                    title="Next"
                    onPress={() => navigation.navigate('IntroScreen')}
                    textStyle={[styles.apppleBtn, { color: Colors.bgBlack, }]}
                    backgroundStyle={{ backgroundColor: Colors.bgWhite }}
                />
            </View>
        </View>
    );
};

export default OnboardingPicture;

const styles = StyleSheet.create({
    desc: { textAlign: 'center', color: Colors.bgBlack, fontStyle: 'italic', fontSize: getSize(18), fontWeight: 'bold', marginTop: getHeight(2) },
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
    profile: {
        flex: 1,
        justifyContent: 'center', alignSelf: 'center', marginVertical: getHeight(10)
    },

    para: {
        width: getWidth(85),
        textAlign: 'start',
        fontSize: getSize(18),
        lineHeight: 21,
        color: Colors.bgWhite,
        alignSelf: 'center',

    },
    headingView: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: getWidth(85),
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
        width: getWidth(80),
        height: getHeight(0.7),
        backgroundColor: '#E45800',
    },
});

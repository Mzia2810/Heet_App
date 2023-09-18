/* eslint-disable */
import { View, StyleSheet, TextInput, Text,TouchableOpacity } from 'react-native';
import { getHeight, getSize, getWidth } from '@helpers';
import React, { useState } from 'react';
import { Colors } from '@assets';
import { CustomHeader, HeadingMain, ButtonComponent } from '@components';

const OnboardingNotif = ({navigation}) => {
    const [text, setText] = useState('')
    return (
        <View style={{ flex: 1, backgroundColor: Colors.textOrange }}>
            <View style={styles.bar1}>
                <View style={styles.bar2}></View>
            </View>
            <CustomHeader onPress={() => navigation.goBack()} />
            <View style={styles.headingView}>
                <HeadingMain title="Allow notifications" />


                <Text style={styles.para}>
                    Well let you know when you’re rated by others.
                </Text>
            </View>
            <View style={styles.myBtn}>

                <ButtonComponent
                    title="Allow notifications"
                    onPress={() => navigation.navigate('OnboardingAge')}
                    textStyle={[styles.apppleBtn, { color: Colors.bgBlack, }]}
                    backgroundStyle={{ backgroundColor: Colors.bgWhite }}
                />
                <TouchableOpacity>

                <Text style={styles.desc}>Not Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OnboardingNotif;

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

    para: {
        width: getWidth(80),
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
        width: getWidth(25),
        height: getHeight(0.7),
        backgroundColor: '#E45800',
    },
});

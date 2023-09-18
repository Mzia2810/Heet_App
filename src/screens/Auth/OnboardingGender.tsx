/* eslint-disable */
import { View, StyleSheet, TextInput, Text } from 'react-native';
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import { getHeight, getSize, getWidth } from '@helpers';
import React, { useState } from 'react';
import { Colors } from '@assets';
import { CustomHeader, HeadingMain, ButtonComponent } from '@components';
import CheckBoxComponent from './components/CheckBoxComponent';

const OnboardingGender = ({navigation}) => {
    const [checked, setChecked] = useState(true)
    return (
        <View style={{ flex: 1, backgroundColor: Colors.textOrange }}>
            <View style={styles.bar1}>
                <View style={styles.bar2}></View>
            </View>
            <CustomHeader onPress={() => navigation.goBack()} />



            <View style={styles.headingView}>
                <HeadingMain title="How do you identify" />

                <CheckBoxComponent
                    checked={checked}
                    onToggle={() => setChecked(!checked)}
                    labelPosition={LABEL_POSITION.RIGHT}
                    text={'Woman'}
                />
                <CheckBoxComponent
                    checked={checked}
                    onToggle={() => setChecked(!checked)}
                    labelPosition={LABEL_POSITION.RIGHT}
                    text={'Man'}
                />
                <CheckBoxComponent
                    checked={checked}
                    onToggle={() => setChecked(!checked)}
                    labelPosition={LABEL_POSITION.RIGHT}
                    text={'Non-binary'}
                />

              <Text style={styles.desc}>Everyone’s welcome on Heet!</Text>

            </View>
            <View style={styles.myBtn}>

                <ButtonComponent
                    title="Next"
                    onPress={() => navigation.navigate('OnboardingPicture')}
                    textStyle={[styles.apppleBtn, { color: Colors.bgBlack, }]}
                    backgroundStyle={{ backgroundColor: Colors.bgWhite }}
                />
            </View>
        </View>
    );
};

export default OnboardingGender;

const styles = StyleSheet.create({
    desc: { textAlign: 'left', color: Colors.bgWhite, fontStyle: 'italic', fontSize: getSize(18), fontWeight: 'bold', marginTop: getHeight(2) },
    checkBoxText: { fontSize: getSize(20), lineHeight: 23, fontStyle: 'italic' },
    checkBoxView: { marginTop: getHeight(2), borderRadius: 5, backgroundColor: Colors.bgWhite, padding: 10, flexDirection: 'row', justifyContent: "space-between", width: getWidth(80), },
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


    headingView: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: getWidth(80),
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
        width: getWidth(70),
        height: getHeight(0.7),
        backgroundColor: '#E45800',
    },
});

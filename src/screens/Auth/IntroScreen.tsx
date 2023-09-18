import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


import { ButtonComponent, HeadingMain } from '@components'
import { images, Colors } from '@assets'
import { getHeight, getWidth, getSize } from '@helpers';

const IntroScreen = ({navigation}) => {

    const handleButtonPress = () => {
        // Handle button press here
        console.log('Button pressed');
    };

    return (
        <View style={styles.container}>
            <Image source={images.introicon} style={styles.introImg} />
            <View style={styles.getRate}>
                <Image source={images.intropic} style={{}} />

            </View>
            <View style={{ width: getWidth(80), alignSelf: 'center' }}>
                <Text style={styles.heading}>Rate and Get Rated</Text>
                <Text style={styles.heet}>${`Rate users by swiping left or right.

                    Start swiping and we’ll calculate your “Heet” score based on how others interact with your profile. It’s that easy!`}</Text>
            </View>
            <View style={styles.myBtn}>

                <ButtonComponent
                    title="Start Swiping"
                    onPress={() => navigation.navigate('BottomTabStack')}
                    textStyle={[styles.apppleBtn, { color: Colors.bgWhite, }]}
                    backgroundStyle={{ backgroundColor: Colors.textOrange }}
                />
            </View>
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({
    heading: {
        fontSize: getSize(28),
        fontStyle: 'italic',
        textAlign: 'center',
        color: Colors.bgBlack,
        fontWeight: 'bold',
        marginLeft: getWidth(2),
        marginTop: getHeight(2)
    },
    container: {
        flex: 1,
        backgroundColor: Colors.bgWhite,
    },
    image: {
        flex: 1,
    },
    desc: { textAlign: 'center', color: Colors.bgBlack, fontStyle: 'italic' },
    apppleBtn: { fontSize: RFValue(18, 580), fontStyle: 'italic', lineHeight: 21, fontWeight: 'bold' },
    heet: {
        fontSize: 15,
        lineHeight: 17,
        fontStyle: 'italic',
        textAlign: 'center',
        color: Colors.bgBlack,
        marginTop: getHeight(2)
    },
    getRate: { marginTop: getHeight(5), alignSelf: 'center', },
    text: {
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: getHeight(10),
        height: getHeight(5), // 70% of height device screen
        width: getWidth(10),  // 80% of width device screen

    },
    introImg: {
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: getHeight(10),
        height: getHeight(5), // 70% of height device screen
        width: getWidth(10),  // 80% of width device screen

    },
    myBtn: { width: getWidth(80), height: getHeight(50), alignSelf: 'center', marginVertical: getHeight(10) }
});
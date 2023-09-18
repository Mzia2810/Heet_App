import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, images } from '@assets'
import { ContainerBox } from '@screens'
import { HeadingMain } from '@components'
import { getSize, getWidth } from '@helpers'

const OutOfSwipes = () => {
    return (
        <>
            <View style={styles.firstHeading}>
                <HeadingMain title={'All Out of Swipes!'} textStyle={styles.textHeading1} />
            </View>
            <ContainerBox>
                <View style={styles.firstHeading}>
                    <HeadingMain title={'All Out of Swipes!'} textStyle={styles.textHeading2} />
                    <Text style={{ textAlign: 'center' }}>Check back later for more users to rate</Text>
                    <Image source={images.scoreImg} />
                </View>
            </ContainerBox>
        </>
    )
}

export default OutOfSwipes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bgWhite

    },
    firstHeading: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textHeading1: {
        color: Colors.bgBlack,
        padding: 10,
        fontSize: getSize(30),
        lineHeight: 23,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textHeading2: {
        color: Colors.bgBlack,
        padding: 10,
        fontSize: getSize(22),
        lineHeight: 23,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
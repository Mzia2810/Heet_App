import { Colors, images } from '@assets';
import { HeadingMain } from '@components';
import { getHeight, getSize, getWidth } from '@helpers';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { PanGestureHandler, State, TouchableOpacity, } from 'react-native-gesture-handler';
import { PrimaryButton } from '@screens';

import Entypo from 'react-native-vector-icons/Entypo';

const profiles = [
    {
        name: "John Doe",
        age: 27,
        likes: ["Hockey", "Hiking"],
        pic: images.one,
    },
    {
        name: "Alexis Texas",
        age: 22,
        likes: ["Parties", "Bananas"],
        pic: images.two
    },
    {
        name: "Jane Smith",
        age: 35,
        likes: ["Netflix", "Wine"],
        pic: images.three
    },
    {
        name: "Malik Muhammad",
        age: 35,
        likes: ["Netflix", "Wine"],
        pic: images.four
    },
    {
        name: "Malik Zia",
        age: 35,
        likes: ["Netflix", "Wine"],
        pic: images.five
    },
    {
        name: "Angelina",
        age: 35,
        likes: ["Netflix", "Wine"],
        pic: images.six
    },
    {
        name: "Kartika",
        age: 35,
        likes: ["Netflix", "Wine"],
        pic: images.seven
    },
    {
        name: "Chinti",
        age: 35,
        likes: ["Netflix", "Wine"],
        pic: images.eight
    }
]


const SwipeScreen = () => {
    const [profileIndex, setProfileIndex] = useState(0);
    const profile = profiles[profileIndex];
    const [show, setShow] = useState(false)
    const [ScrowllingDown, setScrowllingDown] = useState(false)

    const handleSwipe = ({ nativeEvent }) => {
        const { state, translationX, translationY } = nativeEvent;

        if (state === State.END) {
            if (translationX < -100) {
                // Swipe left, go to the next profile
                const nextIndex = profileIndex + 1;
                if (nextIndex < profiles.length) {
                    setProfileIndex(nextIndex);
                }
            } else if (translationX > 100) {
                // Swipe right, go to the previous profile
                const prevIndex = profileIndex - 1;
                if (prevIndex >= 0) {
                    setProfileIndex(prevIndex);
                }
            }
            else if (translationY > 100) {
                // Swipe right, go to the previous profile
                console.log('Scrowlling up')

                // const prevIndex = profileIndex - 1;
                // if (prevIndex >= 0) {
                //     setProfileIndex(prevIndex);
                // }
            }
            else if (translationY < -100) {
                // Swipe right, go to the previous profile
                console.log('Scrowlling down')
                // const prevIndex = profileIndex - 1;
                // if (prevIndex >= 0) {
                //     setProfileIndex(prevIndex);
                // }
            }
        }
    };

    const showButton = () => {
        setShow(true)

    }


    return (
        <View style={styles.container}>
            <PanGestureHandler onHandlerStateChange={handleSwipe} >
                <Pressable onLongPress={showButton} style={styles.topView}>
                    <Image source={profile.pic} style={styles.swipeImg} />
                    {show &&
                        <PrimaryButton onPress={() => setShow(false)} title={<Entypo name='cross' size={30} color={'red'} />} style={styles.cross} />
                    }
                    <View style={styles.bottomView}>
                        <HeadingMain title={profile.name} />
                        <Text style={styles.ptag}>Likes: {profile.likes.join(', ')}</Text>
                        <View style={styles.btns}>
                            <PrimaryButton title={'Skateboarding'} style={styles.button} textStyle={styles.text} />
                            <PrimaryButton title={'Gym'} style={styles.button} textStyle={styles.text} />
                        </View>
                    </View>
                </Pressable>
            </PanGestureHandler>
        </View>
    )
}

export default SwipeScreen

const styles = StyleSheet.create({
    ptag: { fontSize: getSize(15), color: Colors.bgWhite, },
    btns: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: getWidth(40)
    },
    swipeImg: {
        width: getWidth(90),
        height: getHeight(80),
        borderRadius: 20
    },
    container: { flex: 1 ,backgroundColor:Colors.bgWhite},
    topView: {
        width: getWidth(90),
        alignSelf: 'center',
        margin: 5,
    },
    bottomView: {
        margin: 20,
        width: getWidth(50),

        position: 'absolute', //Here is the trick
        bottom: getHeight(2),
    },

    text: {
        fontSize: getSize(15),
        color: Colors.bgWhite,
        textAlign: 'left',
        lineHeight: 18,
    },
    button: {
        marginVertical: getHeight(1),
        backgroundColor: Colors.textOrange,
        padding: 5,
        paddingHorizontal: 5,
        borderRadius: 20,
    },
    cross: {

        flex: 1,
        left: getWidth(37),
        top: getHeight(30),     // Center horizontally
        position: 'absolute',
        backgroundColor: Colors.bgWhite,
        padding: 15,
        borderRadius: 100,
    },
})
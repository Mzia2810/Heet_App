import { Colors, images } from '@assets';
import { getHeight, getSize, getWidth } from '@helpers';
import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { PrimaryButton } from '@screens';
import Entypo from 'react-native-vector-icons/Entypo';
import { HeadingMain } from '@components';


const ModalView = ({ setModalVisible, modalVisible, itemId, data }) => {

    const item = data.filter((item) => item.id == itemId);

    console.log(' filter item ', item)

    return (
        <View style={styles.container}>

            <Modal

                transparent={true}
                visible={modalVisible}
                animationType='fade'
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <ImageBackground source={images.one} style={styles.modalContent}>
                        <View style={{ margin: 30 }}>
                            <HeadingMain title={item[0].text} textStyle={styles.heading} />
                            <Text style={{ color: Colors.bgWhite, fontSize: getSize(15), lineHeight: 18 }}>{item[0].para}</Text>
                            <View style={styles.sketchAndGym}>
                                <PrimaryButton
                                    title={'Skateboarding'}
                                    style={styles.buttonSketch}
                                    textStyle={styles.text}
                                />
                                <PrimaryButton
                                    title={'Gym'}
                                    style={styles.buttonSketch}
                                    textStyle={styles.text}

                                />
                            </View>

                        </View>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={styles.cross}
                        >
                            <Entypo name='cross' size={30} color={'red'} />
                        </TouchableOpacity>

                        <PrimaryButton
                            title={'+ Like'}
                            style={styles.like}
                            textStyle={styles.likeText}

                        />

                    </ImageBackground>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    sketchAndGym: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: getHeight(23),
        marginVertical: getHeight(1)
    },
    text: {
        fontSize: getSize(15),
        color: Colors.bgWhite,
        textAlign: 'center',
        lineHeight: 18,

    },
    likeText: {
        fontSize: getSize(15),
        color: Colors.bgWhite,
        textAlign: 'right',
        lineHeight: 18,
        marginLeft: 30,

    },
    buttonSketch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: getWidth(36),
        // marginVertical: getHeight(1),
        backgroundColor: Colors.textOrange,
        padding: 4,
        borderRadius: 20,
        // paddingLeft: 25,
    },

    like: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: Colors.textOrange,
        width: getWidth(30),
        borderRadius: 20,
        alignSelf: 'center',
        padding: 5,
        marginBottom: getHeight(-5)


    },
    heading: {
        fontSize: getSize(30),
        fontStyle: 'italic',
        textAlign: 'left',
        color: Colors.bgWhite,
        fontWeight: 'bold',
        lineHeight: 36,
    },
    cross: {

        flex: 1,
        top: getHeight(-7),
        alignSelf: 'flex-end',    // Center horizontally
        position: 'absolute',
        backgroundColor: Colors.bgWhite,
        padding: 10,
        borderRadius: 100,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    modalContainer: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background color
    },
    modalContent: {

        width: getWidth(90),
        height: getHeight(85),
        justifyContent: 'flex-end',
    },

});

export default ModalView;

import { StyleSheet, Text, View, Modal, Switch, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@assets'
import { getHeight, getSize, getWidth } from '@helpers'
import { HeadingMain } from '@components'
import { PrimaryButton, SettingLinkComp } from '@screens'
import Entypo from 'react-native-vector-icons/Entypo'

const DeleteModal = ({ setModalDelete, modalDelete }) => {


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalDelete}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalDelete(!modalDelete);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={[styles.top, styles.topheading]}>
                            <HeadingMain title={'Delete Account'}
                                textStyle={styles.modalheading} />
                            <TouchableOpacity onPress={setModalDelete}>
                                <Entypo name={'cross'} size={40} color={Colors.lightgray} />
                            </TouchableOpacity>
                        </View>

                        {/* 1st Box */}
                        <View style={styles.mainBox}>
                            <View style={{ margin: 10 }}>

                                <HeadingMain title={'Are you sure you want to delete your account?'}
                                    textStyle={styles.modalheading2} />
                                    <PrimaryButton
                                        onPress={() => console.log("ZXi")}
                                        title={'Stay'}
                                        style={styles.stay}
                                        textStyle={styles.stayText} />
                                    <PrimaryButton
                                        onPress={() => console.log("ZXi")}
                                        title={'Delete'}
                                        style={styles.delete}
                                        textStyle={styles.deleteText} />
                            </View>
                        </View>

                        <View style={styles.mainBox}></View>




                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default DeleteModal
const styles = StyleSheet.create({
    stayText: {
        fontWeight: '600',
        fontSize: getSize(15),
        color: Colors.bgWhite,
        textAlign: 'left',
        lineHeight: 18,
    },
    deleteText: {
        fontWeight: '600',
        fontSize: getSize(15),
        color: Colors.gray,
        textAlign: 'left',
        lineHeight: 18,
    },
    stay: {
        width: 'auto',
        marginVertical: getHeight(5),
        backgroundColor: Colors.textOrange,
        padding: 5,
        paddingHorizontal: getWidth(10),
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center',
    },
    delete: {
        width: 'auto',
        padding: 5,
        paddingHorizontal: getWidth(10),
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center',
    },
    spacermodal: {
        alignSelf: 'center',
        width: getWidth(85), borderWidth: 0.5,
        borderColor: Colors.lightgray
    },
    name: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // marginHorizontal: getWidth(4),
    },
    mainBox: {
        width: getWidth(90),
        backgroundColor: Colors.lightGray,
        borderRadius: 10
    },
    topheading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textHeading1: {
        color: Colors.text,
        fontSize: getSize(20),
        lineHeight: 18,
        textAlign: 'left',
    },
    modalheading2: {
        color: Colors.gray,
        fontWeight: 'bold',
        fontSize: getSize(16),
        lineHeight: 19,
        // textAlign: 'left',
    },
    modalheading: {
        color: Colors.bgBlack,
        fontWeight: 'bold',
        fontSize: getSize(30),
        lineHeight: 36,
        // textAlign: 'left',
    },
    spacer: {
        borderWidth: 0.2,
        marginTop: getHeight(2),
        borderColor: Colors.text
    },
    container: {
        flex: 1,
        backgroundColor: Colors.bgWhite
    },
    top: {
        alignSelf: 'center',
        width: getWidth(80),
        justifyContent: 'flex-start',
        marginVertical: getHeight(2)

    },
    text: {
        fontSize: getSize(30),
        lineHeight: 36,
        fontWeight: 'bold',
        color: Colors.bgBlack,
    },
    topP: {
        fontSize: getSize(15),
        lineHeight: 18,
        color: Colors.bgBlack,
    },
    // modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getHeight(10),
    },
    modalView: {
        width: getWidth(100),
        height: getHeight(100),
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        // marginBottom: 16,
        fontSize: getSize(16),
        lineHeight: 22,
        textAlign: 'center',
    },
})
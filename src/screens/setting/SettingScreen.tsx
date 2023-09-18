import { StyleSheet, Text, View, Modal, Switch, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@assets'
import { getHeight, getSize, getWidth } from '@helpers'
import { HeadingMain } from '@components'
import { SettingLinkComp, AccountModal, NotificationModal,SwipeModal,DeleteModal } from '@screens'
import Entypo from 'react-native-vector-icons/Entypo'


const SettingScreen = () => {

    const [modalAccount, setModalAccount] = useState(false);
    const [modalNotification, setModalNotification] = useState(false);
    const [modalSwipe, setModalSwipe] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

  

    return (
        <>
            <View style={styles.container}>
                <View style={styles.top}>
                    <HeadingMain title={'Settings'} textStyle={styles.text} />
                    <Text style={styles.topP}>Update your app settings</Text>
                </View>

                <View style={{ marginTop: getHeight(2) }}>
                    <SettingLinkComp title={'Account Settings'} onPress={() => setModalAccount(true)} />
                    <SettingLinkComp title={'Swipe Settings'} onPress={() =>setModalSwipe(true)} />
                    <SettingLinkComp title={'Log Out'} onPress={() => Alert.alert('Log Out')} />
                    <SettingLinkComp title={'Notifications'} onPress={() => setModalNotification(true)} />
                    <SettingLinkComp title={'Delete Account'} onPress={() => setModalDelete(true)} />
                </View>

                <AccountModal modalAccount={modalAccount} setModalAccount={setModalAccount} />
                <SwipeModal modalSwipe={modalSwipe} setModalSwipe={setModalSwipe} />
                <NotificationModal modalNotification={modalNotification} setModalNotification={setModalNotification} />
                <DeleteModal modalDelete={modalDelete} setModalDelete={setModalDelete} />



            </View>
        </>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    spacermodal: {
        alignSelf: 'center',
        width: getWidth(85), borderWidth: 0.5,
        borderColor: Colors.lightgray
    },
    name: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        // width:getWidth(90),

        // marginTop: getHeight(4),
        margin: 10,
        marginHorizontal: getWidth(4),
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
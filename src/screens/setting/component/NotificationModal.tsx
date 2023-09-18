import { StyleSheet, Text, View, Modal, Switch, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@assets'
import { getHeight, getSize, getWidth } from '@helpers'
import { HeadingMain } from '@components'
import { SettingLinkComp } from '@screens'
import Entypo from 'react-native-vector-icons/Entypo'

const NotificationModal = ({ setModalNotification, modalNotification }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);

    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalNotification}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalNotification);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={[styles.top, styles.topheading]}>
                            <HeadingMain title={'Notifications'}
                                textStyle={styles.modalheading} />
                            <TouchableOpacity onPress={setModalNotification}>
                                <Entypo name={'cross'} size={40} color={Colors.lightgray} />
                            </TouchableOpacity>
                        </View>


                        {/* 3rd box */}
                        <View style={[styles.mainBox, { marginTop: getHeight(2) }]}>
                            <View style={{ margin: 10 }}>
                                <HeadingMain title={'Notification Settings'}
                                    textStyle={styles.modalheading2} />
                            </View>

                            <View style={styles.name}>
                                <Text style={[styles.modalText, { fontWeight: 'bold', }]}>Likes</Text>
                                <Switch
                                    trackColor={{ false: '#767577', true: Colors.textOrange }}
                                    thumbColor={isEnabled1 ? '#ffff' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch1}
                                    value={isEnabled1}
                                />
                            </View>
                            <View style={styles.spacermodal}></View>
                            <View style={styles.name}>
                                <Text style={[styles.modalText, { fontWeight: 'bold', }]}>Heet Score Update</Text>
                                <Switch
                                    trackColor={{ false: '#767577', true: Colors.textOrange }}
                                    thumbColor={isEnabled2 ? '#ffff' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch2}
                                    value={isEnabled2}
                                />
                            </View>
                            <View style={styles.spacermodal}></View>
                            <View style={styles.name}>
                                <Text style={[styles.modalText, { fontWeight: 'bold', }]}>Enable Notifications</Text>
                                <Switch
                                    trackColor={{ false: '#767577', true: Colors.textOrange }}
                                    thumbColor={isEnabled3 ? '#ffff' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch3}
                                    value={isEnabled3}
                                />
                            </View>
                            <View style={styles.spacermodal}></View>


                        </View>


                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default NotificationModal
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
    modalheading2: {
        color: Colors.gray,
        fontWeight: 'bold',
        fontSize: getSize(16),
        lineHeight: 19,
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
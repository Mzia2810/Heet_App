import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { Colors } from '@assets'
import { getHeight, getSize, getWidth } from '@helpers'
import React from 'react'

const SettingLinkComp = (props) => {
  return (
    <View style={[styles.spacer, {
        padding:20,
        width: getWidth(100),
         alignSelf: 'center', 
         justifyContent: 'flex-start',
        //   marginVertical: getHeight(2)
           }]}>

        <TouchableOpacity style={{marginLeft:getWidth(5)}} onPress={props.onPress}>
        <Text style={styles.textHeading1}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SettingLinkComp


const styles = StyleSheet.create({
    textHeading1: {
        color: Colors.text,
        fontSize: getSize(15),
        lineHeight: 18,
        textAlign: 'left',
    },
    spacer: {
        borderWidth: 0.2,
        // marginTop: getHeight(2),
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
        // marginVertical: getHeight(2)

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
})
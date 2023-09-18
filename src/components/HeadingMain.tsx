import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getSize, getWidth } from '@helpers'
import { Colors } from '@assets'



const HeadingMain = ({title,textStyle}) => {
    return (
        <View>
            <Text style={textStyle ? textStyle: styles.heading}>{title}</Text>
        </View>
    )
}

export default HeadingMain

const styles = StyleSheet.create({
    heading: { fontSize: getSize(28),
    fontStyle:'italic',
    // lineHeight:21,'
    textAlign:'left',
    color:Colors.bgWhite,
      fontWeight:'bold',
    //   marginLeft:getWidth(2)
    }
})
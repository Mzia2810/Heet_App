import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import React from 'react'
import { getHeight, getWidth } from '@helpers'
import { Colors, images } from '@assets'

const CustomHeader = ({ onPressSetting,onPressAngle, image, icon1, icon2, headerBg }) => {
    return (
        <View style={headerBg && headerBg}>

            <View style={styles.headerView}>
                <View style={image ? [styles.headerThird, { width: getWidth(85) }] : styles.header}>
                    <TouchableOpacity onPress={onPressAngle}>
                        {icon1 ? <Text>
                            {icon1}
                        </Text> : <Text>
                            <FontAwesome name="angle-left" size={35} color={Colors.bgWhite} />;
                        </Text>}

                    </TouchableOpacity>
                    <Image source={image ? image : images.logo} style={styles.img} />
                    {icon2 ? <TouchableOpacity onPress={onPressSetting}>
                        <Text>
                            {icon2}
                        </Text>
                    </TouchableOpacity>
                        : ''}

                </View>
            </View>
        </View>
    )
}

export default CustomHeader


const styles = StyleSheet.create({
    headerView: { width: getWidth(85), alignSelf: 'center' },
    header: {
        justifyContent: 'space-between', width: getWidth(50), marginTop: getHeight(3),
        flexDirection: 'row'
    },
    headerThird: {
        justifyContent: 'space-between', width: getWidth(80), marginTop: getHeight(3),
        flexDirection: 'row'
    },
    img: { borderRadius: 5, alignSelf: 'center', width: getWidth(9), height: getHeight(5) }

});

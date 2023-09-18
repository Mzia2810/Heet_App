import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@assets'

const ContainerBox = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default ContainerBox

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor:Colors.lightgray,
        borderWidth:0.5,
        padding: 16,
        elevation: 1, // Android
        shadowOffset: { width: 0, height: 1 }, // iOS
        shadowOpacity: 0.1, // iOS
    },
});
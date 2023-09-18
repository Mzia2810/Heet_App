import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
import { getHeight, getSize, getWidth } from '@helpers';
import { Colors } from '@assets';

const CheckBoxComponent = (props) => {
  return (
    <View style={styles.checkBoxView}>
    <Text style={styles.checkBoxText}>{props.text}</Text>
    <CircleCheckBox
        checked={props.checked}
        onToggle={props.onToggle}
        labelPosition={props.labelPosition}
    // label="Checkbox example"
    />
</View>
  )
}

export default CheckBoxComponent

const styles = StyleSheet.create({
    checkBoxText: { fontSize: getSize(20), lineHeight: 23, fontStyle: 'italic' },
    checkBoxView: { marginTop: getHeight(2), borderRadius: 5, backgroundColor: Colors.bgWhite, padding: 10, flexDirection: 'row', justifyContent: "space-between", width: getWidth(80), },
  
})
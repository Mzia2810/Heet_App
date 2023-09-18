import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity active={props.active} style={props.style} onPress={props.onPress} >
      {props.icon && props.icon}
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({})
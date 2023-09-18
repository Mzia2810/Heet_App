import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            keyboardType={props.keyboardType}
            style={props.style}
            onChangeText={props.onChangeText}
            value={props.value}
        />

    );
};



export default CustomTextInput;

import React,{FC} from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
    textStyle?: StyleProp<TextStyle>;
    backgroundStyle?: StyleProp<ViewStyle>;
}

const MyButton: FC<ButtonProps> = ({ title, onPress, textStyle, backgroundStyle, ...otherProps }) => {
    return (
        <TouchableOpacity style={[styles.button, backgroundStyle]} onPress={onPress} {...otherProps}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default MyButton;
const styles = StyleSheet.create({
    button: {

        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical:hp('1')
    },
});
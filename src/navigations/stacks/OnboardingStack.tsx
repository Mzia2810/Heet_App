// In App.js in a new project
/* eslint-disable */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    OnboardingEmail,
    SplashScreen,
    OnboardingNotif,
    OnboardingAge,
    OnboardingGender,
    IntroScreen,
    OnboardingPicture,
    OnboardingAccount,
    InterestScreen,
    SettingScreen
} from '@screens';
import { BottomTabStack } from '@navigations';
import { CustomHeader } from '@components';
import { Colors, images } from '@assets';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {

    const navigation = useNavigation()

    return (
        <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="OnboardingAccount" component={OnboardingAccount} />
            <Stack.Screen name="OnboardingPicture" component={OnboardingPicture} />
            <Stack.Screen name="OnboardingGender" component={OnboardingGender} />
            <Stack.Screen name="OnboardingAge" component={OnboardingAge} />
            <Stack.Screen name="OnboardingNotif" component={OnboardingNotif} />
            <Stack.Screen name="OnboardingEmail" component={OnboardingEmail} />
            <Stack.Screen options={{
                headerShown: true,
                header: () => <CustomHeader
                    headerBg={styles.customColorBg}
                    image={images.introicon} icon1={<FontAwesome name="angle-left" size={35} color={'gray'} />}
                    icon2={<Ionicons name="settings-sharp" size={30} color={'gray'} />}
                    onPressAngle={() => navigation.goBack()}
                    onPressSetting={() => navigation.navigate('SettingScreen')}
                />,
            }} name="InterestScreen" component={InterestScreen} />
            <Stack.Screen options={{
                headerShown: true,
                header: () => <CustomHeader
                    headerBg={styles.customColorBg}
                    image={images.introicon} icon1={<FontAwesome name="angle-left" size={35} color={'gray'} />}
                    icon2={<Ionicons name="settings-sharp" size={30} color={'gray'} />}
                    onPressAngle={() => navigation.goBack()}
                    // onPressSetting={() => navigation.navigate('SettingScreen')}
                />,

            }} name="SettingScreen" component={SettingScreen}
            />
        </Stack.Navigator>
    );
}

export default OnboardingStack;

const styles = StyleSheet.create({
    customColorBg: {
        // width: getWidth(85), alignSelf: 'center',
        backgroundColor: Colors.bgWhite
    }
})
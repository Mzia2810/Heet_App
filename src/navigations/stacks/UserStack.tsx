// In App.js in a new project
/* eslint-disable */
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {InterestScreen } from '@screens';


const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator
            // initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false,
            }}>

            <Stack.Screen name="InterestScreen" component={InterestScreen} />
            {/* <Stack.Screen name="IntroScreen" component={IntroScreen} /> */}
            {/* <Stack.Screen name="OnboardingAccount" component={OnboardingAccount} /> */}
            {/* <Stack.Screen name="OnboardingPicture" component={OnboardingPicture} /> */}
            {/* <Stack.Screen name="OnboardingGender" component={OnboardingGender} /> */}
            {/* <Stack.Screen name="OnboardingAge" component={OnboardingAge} /> */}
            {/* <Stack.Screen name="OnboardingNotif" component={OnboardingNotif} /> */}
            {/* <Stack.Screen name="OnboardingEmail" component={OnboardingEmail} /> */}

        </Stack.Navigator>
    );
}

export default UserStack;

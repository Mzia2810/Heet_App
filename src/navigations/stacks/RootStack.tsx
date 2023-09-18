// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { OnBoardingStack } from '@navigations';
import {BottomTabStack} from '@navigations';
const RootStack = () => {
    return (
        <NavigationContainer>
            <OnBoardingStack />
            {/* <BottomTabStack/> */}
        </NavigationContainer>
    );
}

export default RootStack;
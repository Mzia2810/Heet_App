/* eslint-disable */
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import React from 'react';
import { SplashScreen } from '@screens';
import { RootStack } from '@navigations';
import { Colors } from '@assets';


const App = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <BottomSheetModalProvider> */}

      <View style={{ flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.textOrange}
        />
        <RootStack />
        {/* <SplashScreen /> */}
      </View>
      {/* </BottomSheetModalProvider> */}
    </GestureHandlerRootView>

  );
};
export default App;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { SwipeScreen, LikeScreen, ProfileScreen, ScoreScreen } from '@screens';
import { getSize, getWidth } from '@helpers';
import { Colors, images } from '@assets';
import { CustomHeader } from '@components';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="SwipeScreen"


            screenOptions={{
                header: () => <CustomHeader  headerBg={styles.customColorBg} image={images.introicon} icon1={<Entypo name="flow-parallel" size={30} color={'gray'} />} icon2={<Ionicons name="settings-sharp" size={30} color={'gray'} />} onPress={() => console.log('Zia')} />,
                // headerShown: false,
                tabBarActiveTintColor: Colors.textOrange,
                tabBarInactiveTintColor:Colors.lightgray,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                },
                tabBarLabelStyle: {
                    fontSize: getSize(15),
                    lineHeight: 17,
                    fontWeight: 500,
                }
            }}
        >
            <Tab.Screen
                name="LikeScreen"
                component={LikeScreen}
                options={{
                    tabBarLabel: 'Likes',
                    tabBarBadge: 3,
                    tabBarBadgeStyle: { color: Colors.bgWhite, backgroundColor: Colors.textOrange },
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="local-fire-department" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="SwipeScreen"
                component={SwipeScreen}
                options={{
                    tabBarLabel: 'Swipe',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="square" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="user-large" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen

                name="ScoreScreen"
                component={ScoreScreen}
                options={{
                    // header: () => <CustomHeader headerBg={styles.customColorBg} image={images.introicon} icon1={<Entypo name="flow-parallel" size={30} color={'gray'} />} icon2={<Ionicons name="settings-sharp" size={30} color={'gray'} />} onPress={() => console.log('Zia')} />,
                    tabBarLabel: 'Score',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="alpha-h-box" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export default BottomTabStack;

const styles = StyleSheet.create({
    customColorBg: {
        // width: getWidth(85), alignSelf: 'center',
        backgroundColor: Colors.bgWhite
    }
})
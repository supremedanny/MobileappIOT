import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabFourScreen from "../screens/TabFourScreen";
import {BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList} from '../types';
import { AntDesign, Feather , Foundation} from '@expo/vector-icons';
import TabThreeScreen from "../screens/TabThreeScreen";
import {StyleSheet} from "react-native";


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabTwo"//the main one will be the tab two, this also helps with a bug on android when building the QR Code
            tabBarOptions={{activeTintColor: '#60A268', inactiveTintColor: 'gray',
                labelPosition: "below-icon"}}>
            <BottomTab.Screen
                name="TabOne"
                component={TabOneNavigator}
                options={{
                    tabBarLabel: 'QR Code',
                    tabBarIcon: ({color}) => <AntDesign name="qrcode" size={36} color={color}/>
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoNavigator}
                options={{
                    tabBarLabel: 'Rewards',
                    tabBarIcon: ({color}) => <AntDesign name="gift" size={36} color={color}/>
                }}
            />
            <BottomTab.Screen
                name="TabThree"
                component={TabThreeNavigator}
                options={{
                    tabBarLabel: 'Activities',
                    tabBarIcon: ({color}) => <Foundation name="graph-bar" size={36} color={color} style={{marginBottom: -3}}  />
                }}
            />
            <BottomTab.Screen
                name="TabFour"
                component={TabFourNavigator}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color}) => <Feather name="user" size={36} color={color}/>
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{headerTitle: 'QR Code',headerShown: false }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{headerTitle: 'Rewards', headerShown: false, headerLeft: ()=>null}}
            />
        </TabTwoStack.Navigator>
    );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
    return (
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen
                name="TabThreeScreen"
                component={TabThreeScreen}
                options={{headerTitle: 'Activity', headerStatusBarHeight: 150, headerStyle: styles.container,headerTitleStyle: styles.title, headerShown: false, headerLeft: ()=>null}}
            />
        </TabThreeStack.Navigator>
    );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
    return (
        <TabFourStack.Navigator>
            <TabFourStack.Screen
                name="TabFourScreen"
                component={TabFourScreen}
                options={{headerTitle: 'Profile', headerShown: false}}
            />
        </TabFourStack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#326834',

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        right: '50%',
        bottom: '200%',
    },

});



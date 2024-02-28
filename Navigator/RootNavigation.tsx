import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Screens/Home';
import Discover from '../Screens/Discover';
import Activity from '../Screens/Activity';
import Bookmarks from '../Screens/Bookmarks';
import Profile from '../Screens/Profile';

export type TabPages = {
    home: undefined;
    discover: undefined;
    activity: undefined;
    bookmarks: undefined;
    profile: undefined;
};
const Tabs = createBottomTabNavigator<TabPages>();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={{
                    tabBarActiveBackgroundColor: 'black',
                    tabBarInactiveBackgroundColor: 'black',
                    tabBarActiveTintColor: 'white',
                }}>
                <Tabs.Screen
                    name="home"
                    component={Home}
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="discover"
                    component={Discover}
                    options={{
                        title: 'Discover',
                        tabBarIcon: ({ color, size }) => <Ionicons name="compass" color={color} size={size} />,
                    }}
                />
                <Tabs.Screen
                    name="activity"
                    component={Activity}
                    options={{
                        title: 'Activity',
                        tabBarIcon: ({ color, size }) => <Ionicons name="stopwatch" color={color} size={size} />,
                    }}
                />
                <Tabs.Screen
                    name="bookmarks"
                    component={Bookmarks}
                    options={{
                        title: 'Bookmarks',
                        tabBarIcon: ({ color, size }) => <Ionicons name="bookmark-sharp" color={color} size={size} />,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ color, size }) => <Ionicons name="person-circle" color={color} size={size} />,
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Screens/Home';
import Discover from '../Screens/Discover';
import Activity from '../Screens/Activity';
import Bookmarks from '../Screens/Bookmarks';
import Profile from '../Screens/Profile';
import TopBar from '../components/TopBar';
import HomeIcon from '../assets/home.svg';
import DiscoverIcons from '../assets/discover.svg';
import ActivityIcon from '../assets/activity.svg';
import ProfileIcon from '../assets/profile.svg';

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
                        tabBarIcon: ({ color, size }) => <HomeIcon height={size} color={color} />,
                        headerTransparent: true,
                        header: () => <TopBar />,
                    }}
                />
                <Tabs.Screen
                    name="discover"
                    component={Discover}
                    options={{
                        title: 'Discover',
                        tabBarIcon: ({ color, size }) => <DiscoverIcons height={size} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="activity"
                    component={Activity}
                    options={{
                        title: 'Activity',
                        tabBarIcon: ({ color, size }) => <ActivityIcon height={size} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="bookmarks"
                    component={Bookmarks}
                    options={{
                        title: 'Bookmarks',
                        tabBarIcon: ({ color, size }) => <Ionicons name="bookmark" size={size} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ color, size }) => <ProfileIcon height={size} color={color} />,
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;

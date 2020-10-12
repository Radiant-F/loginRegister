import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from './login';
import Register from './register';
import Home from './home';
import Chat from './chat';
import Contact from './contact';
import DrawerContent from './drawer';
import Passing from './passing';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Home" component={Home} />
      <TopTab.Screen name="Chat" component={Chat} />
      <TopTab.Screen name="Contact" component={Contact} />
    </TopTab.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TopTabs} />
    </Tab.Navigator>
  );
};

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={BottomTab} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={RootDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Passing"
          component={Passing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
// npm react-native start --reset cache
// option={{headerShown:false}}

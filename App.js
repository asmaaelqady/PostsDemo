import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home'
import Profile from './profile'
import posts from './Postes';
import details from './details'

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const PostStack = createStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
     <Tab.Navigator
     tabBarOptions={{
       activeTintColor: '#990000',
     }}
   >
     <Tab.Screen
       name="Home"
       component={HomeStackScreen}
       options={{
         tabBarLabel: 'Home',
         tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="bell" color={color} size={size} />
         ),
       }}
     />
     <Tab.Screen
       name="Profile"
       component={Profile}
       options={{
         tabBarLabel: 'Profile',
         tabBarIcon: ({ color, size }) => (
           <MaterialCommunityIcons name="account" color={color} size={size} />
         ),
       }}
     />
   </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#990000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Home" component={Home} options={{
          title:'BLOGPOST',
          }} />
          <HomeStack.Screen name="Posts" component={posts} options={{
          title:'POSTS',
          }} />
           <HomeStack.Screen name="Details" component={details} options={{
          title:'Details',
          }} />
  </HomeStack.Navigator>
  );
  // const PostStackScreen = ({navigation}) => (
  //   <PostStack.Navigator screenOptions={{
  //           headerStyle: {
  //           backgroundColor: '#990000',
  //           },
  //           headerTintColor: '#fff',
  //           headerTitleStyle: {
  //           fontWeight: 'bold'
  //           }
  //       }}>
  //           <PostStack.Screen name="Posts" component={posts} options={{
            
  //           }} />
  //           <PostStack.Screen name="Details" component={details} options={{
            
  //           }} />
  //   </PostStack.Navigator>
  //   );


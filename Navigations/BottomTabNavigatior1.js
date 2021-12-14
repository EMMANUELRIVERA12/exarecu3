import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodaySreen from '../Screens/TodayScreen';
import QuoteScreen from '../Screens/QuotesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RandomScreen from '../Screens/RandomScreen';

import HomeSreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor:"blue",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           <Tab.Screen
                name="Today"
                component={TodaySreen}
                options={{
                    tabBarLabel:"Today",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-bulb"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Random"
                component={RandomScreen}
                options={{
                    tabBarLabel:"Random",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-heart"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Quotes"
                component={QuoteScreen}
                options={{
                    tabBarLabel:"Quotes",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-nuclear"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeSreen}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help"} size={20} color={color}/>
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}
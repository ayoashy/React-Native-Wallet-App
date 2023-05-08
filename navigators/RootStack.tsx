import React, { FunctionComponent } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../components/colors';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Avi from '../assets/avi/avatar.jpeg';

// screen
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import BalanceScreen from '../screens/BalanceScreen';

// types
import { CardProps } from '../components/Cards/types';

// balance Icon
import { Ionicons } from '@expo/vector-icons';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Balance'
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.grayLight,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{
                backgroundColor: colors.tertiary,
              }}
            />
          ),
        }}
      >
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText='Hey Shoks!'
                subText='welcome back'
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name='Balance'
          component={BalanceScreen}
          options={({ route }) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerBackImage: (props) => {
              <Ionicons
                name='chevron-back'
                size={25}
                color={colors.secondary}
                {...props}
              />;
            },
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

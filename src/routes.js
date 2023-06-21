import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Perfil from './pages/Perfil/Index';
import Pagamentos from './pages/Pagamentos';
import Busca from './pages/Busca/Index';
import Pedidos from './pages/Pedidos/Index';

const BottomTab = createBottomTabNavigator();
const PerfilStack = createStackNavigator();

function PerfilRoutes() {
    return (
      <PerfilStack.Navigator>
        <PerfilStack.Screen name="Perfil" component={Perfil} />
        <PerfilStack.Screen name="Pagamentos" component={Pagamentos} />
      </PerfilStack.Navigator>
    );
};

export default function Routes() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator 
          screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'black',
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Busca"
            component={Busca}
            options={{
              tabBarLabel: 'Busca',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="search" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Pedidos"
            component={Pedidos}
            options={{
              tabBarLabel: 'Pedidos',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="assignment" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
          name="PerfilRoutes"
          component={PerfilRoutes}
          options={{
            headerShown: false,
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" color={color} size={26} />
            ),
          }}
        />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }
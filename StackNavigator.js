import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from './HomeScreen';
import InfoPokemon from "./components/InfoPokemon";
import CadastroUsuario from "./components/CadastroUsuario";
import BuscaPokedex from "./components/BuscaPokedex";
import CadastrarUsuario from "./components/CadastrarUsuario"
import LoginUsuario from "./components/LoginUsuario"

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BuscaPokedex">
        
        <Stack.Screen name="InfoPokemon" component={InfoPokemon} />
        <Stack.Screen name="LoginUsuario" component={LoginUsuario} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="BuscaPokedex" component={BuscaPokedex} />
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//<Stack.Screen name="Home" component={HomeScreen} />
export default StackNavigator;
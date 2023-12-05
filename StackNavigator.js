import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InfoPokemon from "./components/InfoPokemon";
import CadastroUsuario from "./components/CadastroUsuario";
import BuscaPokedex from "./components/BuscaPokedex";
import BuscaPokedexFav from "./components/BuscaPokedexFav";
import CadastrarUsuario from "./components/CadastrarUsuario"
import LoginUsuario from "./components/LoginUsuario"

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginUsuario">
        <Stack.Screen name="InfoPokemon" component={InfoPokemon}  options={{ headerShown: false }}/>
        <Stack.Screen name="LoginUsuario" component={LoginUsuario} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{ headerShown: false }}/>
        <Stack.Screen name="BuscaPokedex" component={BuscaPokedex} options={{ headerShown: false }}/>
        <Stack.Screen name="BuscaPokedexFav" component={BuscaPokedexFav} options={{ headerShown: false }}/>
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
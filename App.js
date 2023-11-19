import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoPokemon from "./components/InfoPokemon";
import CadastroUsuario from "./components/CadastroUsuario";
import BuscaPokedex from "./components/BuscaPokedex";
import CadastrarUsuario from "./components/CadastrarUsuario"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { color } from "react-native-reanimated";
import firebase_db from './src/firebaseconfig';
import { useEffect, useState} from 'react';
import { initializeApp, apps, lenght } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, onValue, set } from "firebase/database";
//import firebase from 'firebase/app';
import 'firebase/database';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './src/firebaseconfig'
import {exibirFavoritoFunc} from './componentes-back/funcoes'



console.log("RECOMPILANDOoooooooooooooooooooooooooooooooooooooooooooooooooo0000000000000000000000aaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")

const IDsecao = 'LOD6pRjLBDOY4edt6y0YEeJHPmB2'

  

function HomeScreen({ navigation }) {
  var teste = 'teste'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CadastrarUsuario",{id:IDsecao})}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("InfoPokemon",{id:IDsecao})}
      >
        <Text style={styles.buttonText}>InfoPokemon</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CadastroUsuario",{id:IDsecao})}
      >
        <Text style={styles.buttonText}>CadastroUsuario</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BuscaPokedex",{id:IDsecao})}
      >
        <Text style={styles.buttonText}>BuscaPokedex</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => exibirFavoritoFunc(IDsecao)}
      >
        <Text style={styles.buttonText}>Exibir Pokemons Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 5,
    padding: 10,
    width: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

const Stack = createNativeStackNavigator();


const App = () => {

  //const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Barlow-Regular": require("./assets/fonts/Barlow-Regular.ttf"),
    "Barlow-SemiBold": require("./assets/fonts/Barlow-SemiBold.ttf"),
    "Barlow-Bold": require("./assets/fonts/Barlow-Bold.ttf"),
    "Barlow-ExtraBold": require("./assets/fonts/Barlow-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="InfoPokemon" component={InfoPokemon} />
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
          <Stack.Screen name="BuscaPokedex" component={BuscaPokedex} />
          <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario}  />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default App;
  
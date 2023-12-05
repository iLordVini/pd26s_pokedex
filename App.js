import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import 'firebase/database';
import {exibirFavoritoFunc} from './componentes-back/Functions'
import StackNavigator from './StackNavigator';

function HomeScreen({ navigation }) {
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
        onPress={() => navigation.navigate("BuscaPokedexFav",{id:IDsecao})}
      >
        <Text style={styles.buttonText}>BuscaPokedexFav</Text>
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

  const [fontsLoaded, error] = useFonts({
    "Barlow-Regular": require("./assets/fonts/Barlow-Regular.ttf"),
    "Barlow-SemiBold": require("./assets/fonts/Barlow-SemiBold.ttf"),
    "Barlow-Bold": require("./assets/fonts/Barlow-Bold.ttf"),
    "Barlow-ExtraBold": require("./assets/fonts/Barlow-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

    return (<StackNavigator />);
  };
  
  export default App;

  
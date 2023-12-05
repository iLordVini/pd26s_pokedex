import * as React from "react";
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import axios from 'axios';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { TouchableOpacity } from "react-native";
import { alternarFavoritoFunc, verificarFavoritoFunc, excluirPokemonFavFunc } from '../componentes-back/Functions';
import Icon from 'react-native-vector-icons/FontAwesome';

function BuscaPokedex({ route, navigation }) {

  let IDsecao

  /*const pokemons = [
    { id: '0025', name: 'Pikachu', image: require('../assets/image-12.png') },
    { id: '0125', name: 'Electabuzz', image: require('../assets/image-5.png') },
    { id: '0777', name: 'Togedemaru', image: require('../assets/image-11.png') },
  ];*/

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=120&offset=100');
        const results = response.data.results;

        const pokemonDetails = await Promise.all(results.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            id: pokemonResponse.data.id,
            name: pokemon.name,
            image: pokemonResponse.data.sprites.front_default,
          };
        }));

        setPokemons(pokemonDetails);
      } catch (error) {
        console.error('Erro ao buscar dados dos Pokémon:', error);
      }
    };

    fetchPokemons();
  }, []);

  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 12;

  const startIndex = (currentPage - 1) * pokemonsPerPage;
  const endIndex = startIndex + pokemonsPerPage;
  const visiblePokemons = pokemons.slice(startIndex, endIndex);
  const totalPages = Math.max(1, Math.ceil(pokemons.length / pokemonsPerPage));

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  try {
    IDsecao = route.params.id
    console.log(IDsecao); // Esta linha nunca será alcançada se ocorrer um erro acima
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Cannot read property 'id' of undefined")) {
      navigation.navigate('LoginUsuario')
    } else {
      // Outros tipos de erro
      console.error("Ocorreu um erro:", error.message);
    }
  }

  async function alternarFav(id, nome) {
    try {
      const resultado = await verificarFavoritoFunc(IDsecao, id, nome);
      console.log(resultado);
      if (resultado == 1) {
        await alternarFavoritoFunc(IDsecao, id, nome);
      } else {
        await excluirPokemonFavFunc(IDsecao, id, nome);
      }
      return
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  function goBack() {
    navigation.navigate('CadastroUsuario', { id: IDsecao })
  }

  function goOut() {
    navigation.navigate('LoginUsuario', { id: IDsecao })
  }

  function handleVerDetalhes(pokemonId, IDsecao) {
    navigation.navigate('InfoPokemon', { pokemon: pokemonId, id: IDsecao });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()} style={styles.iconContainer}>
          <Icon name="user" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.pokedexTitle}>POKEDEX</Text>
        <TouchableOpacity onPress={() => goOut()} style={styles.iconContainer}>
          <Icon name="sign-out" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.buscapokedex}>
        {visiblePokemons.map((pokemon) => (
          <TouchableOpacity
            key={pokemon.id}
            style={styles.card}
            onPress={() => handleVerDetalhes(pokemon.id, IDsecao)}
          >
            <View style={styles.cardInner}>
              <Image style={styles.cardImage} source={pokemon.image} />
              <Text style={styles.cardText}>#{pokemon.id}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.prevnextPage}>
        <TouchableOpacity onPress={prevPage} style={styles.prevnextButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.cardText}>{currentPage}/{totalPages}</Text>
        <TouchableOpacity onPress={nextPage} style={styles.prevnextButton}>
          <Text style={styles.backButtonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 12,
    marginBottom: 12,
  },
  pokedexTitle: {
    fontSize: 36,
    fontWeight: '800',
    fontFamily: FontFamily.barlowExtraBold,
    color: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buscapokedex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 4,
  },
  card: {
    width: 110,
    margin: 8,
    borderRadius: 8,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: Color.colorBlack,
    shadowOpacity: 4,
    shadowRadius: 8,
    shadowOffset: { width: 4, height: 4 },
  },
  cardInner: {
    padding: 8,
    alignItems: 'center',
  },
  cardImage: {
    width: 70,
    height: 70,
  },
  cardText: {
    marginTop: 8,
    color: Color.colorBlack,
    fontSize: 18,
    fontFamily: FontFamily.barlowBold,
    fontWeight: '700',
  },
  prevnextPage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 4,
    marginVertical: 20,
  },
  prevnextButton: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_17xl,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 8,
  },
  backButton: {
    marginTop: 0,
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_17xl,
  },
  backButtonText: {
    fontSize: FontSize.size_9xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.barlowRegular,
    fontWeight: '700',
  },
});

export default BuscaPokedex;
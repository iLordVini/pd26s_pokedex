import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import axios from 'axios';
import { Color, Border, FontSize, FontFamily } from '../GlobalStyles';
import InfoPokemon from './InfoPokemon';
import { obterListaFavoritos } from '../componentes-back/funcoes';

function BuscaPokedexFav({ route, navigation }) {
  let IDsecao;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const listaFavoritos = await obterListaFavoritos(IDsecao);
        console.log(listaFavoritos);
        const pokemonDetails = await Promise.all(
          listaFavoritos.map(async (pokemon) => {
            try {
              console.log(pokemon.id);
              const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);

              return {
                id: pokemonResponse.data.id,
                name: pokemonResponse.data.name,
                image: pokemonResponse.data.sprites.front_default,
              };
            } catch (error) {
              console.error(`Erro ao buscar detalhes do Pokémon ${pokemon.id}:`, error);
              return null;
            }
          })
        );
  
        const filteredPokemonDetails = pokemonDetails.filter((pokemon) => pokemon !== null);
  
        setPokemons(filteredPokemonDetails);
      } catch (error) {
        console.error('Erro ao buscar dados dos Pokémon favoritos:', error);
      }
    };
  
    fetchPokemons();
  }, [IDsecao]);  

  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 12;

  const startIndex = (currentPage - 1) * pokemonsPerPage;
  const endIndex = startIndex + pokemonsPerPage;
  const visiblePokemons = pokemons.slice(startIndex, endIndex);

  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

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
    IDsecao = route.params.id;
    console.log(IDsecao);
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Cannot read property 'id' of undefined")) {
      navigation.navigate('LoginUsuario');
    } else {
      console.error('Ocorreu um erro:', error.message);
    }
  }

  function goBack() {
    navigation.navigate('CadastroUsuario', { id: IDsecao });
  }

  function handleVerDetalhes(pokemonId, IDsecao) {
    navigation.navigate('InfoPokemon', { pokemon: pokemonId, id: IDsecao });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pokedexTitle}>FAVORITOS</Text>
      </View>
      <View style={styles.buscapokedex}>
        {visiblePokemons.map((pokemon) => (
          <TouchableOpacity
            key={pokemon.id}
            style={styles.card}
            onPress={() => handleVerDetalhes(pokemon.id, IDsecao)}
          >
            <View style={styles.cardInner}>
              <Image style={styles.cardImage} source={{ uri: pokemon.image }} />
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
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>CADASTRO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
  },
  header: {
    backgroundColor: Color.colorBlack,
    padding: 12,
    alignItems: 'center',
  },
  pokedexTitle: {
    fontSize: 36,
    fontWeight: '800',
    fontFamily: FontFamily.barlowExtraBold,
    color: Color.colorWhite,
  },
  buscapokedex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
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
    width: 60,
    height: 60,
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
  },
  prevnextButton: {
    paddingVertical: 4,
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_17xl,
  },
  backButtonText: {
    fontSize: FontSize.size_9xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.barlowBold,
    fontWeight: '700',
  },
});

export default BuscaPokedexFav;
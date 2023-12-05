import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { alternarFavoritoFunc, verificarFavoritoFunc, excluirPokemonFavFunc } from '../componentes-back/Functions'

const InfoPokemon = ({ route, navigation }) => {
  const pokemonId = route.params.pokemon;
  let IDsecao;
  const [favorito, setFavorito] = useState(false);

  const [pokemonDetails, setPokemonDetails] = useState({
    id: null,
    name: '',
    height: null,
    weight: null,
    description: '',
    image: null,
    xp: null,
    types: '',
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const speciesResponse = await axios.get(response.data.species.url);

        const types = response.data.types.map((type) => type.type.name);
        const firstTwoTypes = types.slice(0, 2);

        const flavorText = speciesResponse.data.flavor_text_entries
          .find((entry) => entry.language.name === 'en')
          .flavor_text.replace(/\n/g, ' ');

        const updatedPokemonDetails = {
          id: response.data.id,
          name: response.data.name,
          height: response.data.height / 10 + ' m',
          weight: response.data.weight / 10 + ' kg',
          description: flavorText,
          image: response.data.sprites.front_default,
          xp: response.data.base_experience,
          types: firstTwoTypes,
        };
        console.log(flavorText);

        setPokemonDetails(updatedPokemonDetails);

        console.log(updatedPokemonDetails.id + ' ' + updatedPokemonDetails.name)
        const isFavorito = await verificarFavoritoFunc(IDsecao, updatedPokemonDetails.id, updatedPokemonDetails.name);
        setFavorito(isFavorito === 2);
      } catch (error) {
        console.error('Erro ao buscar dados do Pokémon: ' + error);
      }
    };

    fetchPokemonDetails();
    
  }, [pokemonId]);

  try {
    IDsecao = route.params.id
    console.log(IDsecao);
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Cannot read property 'id' of undefined")) {
      navigation.navigate('LoginUsuario')
    } else {
      console.error("Ocorreu um erro:", error.message);
    }
  }

  function goBack() {
    navigation.navigate('BuscaPokedex', { id: IDsecao })
  }

  function toggleFavorito() {
      if (!pokemonDetails || !pokemonDetails.id || !pokemonDetails.name) {
        console.error('Detalhes do Pokémon não carregados corretamente.');
        return;
      }  

      if (favorito) {
        excluirPokemonFavFunc(IDsecao, pokemonDetails.id, pokemonDetails.name);
      } else {
        alternarFavoritoFunc(IDsecao, pokemonDetails.id, pokemonDetails.name);
      }

      setFavorito(!favorito); // Alterna o estado local de favorito
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.infopokemon}>
        <View style={styles.perfil} />
        <Image
          style={[styles.image1Icon, styles.n0777Layout]}
          contentFit="cover"
          source={{ uri: pokemonDetails.image }}
        />
        <TouchableOpacity style={styles.starIcon} onPress={toggleFavorito}>
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={favorito ? require("../assets/star-1.png") : require("../assets/star-0.png")}
      />
      </TouchableOpacity>
        <View style={[styles.infopokemonChild, styles.rectangleViewShadowBox]} />
        <View style={[styles.infopokemonItem, styles.infopokemonShadowBox]} />
        <View style={[styles.infopokemonInner, styles.voltarShadowBox]} />
        <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
        <View style={[styles.infopokemonChild1, styles.infopokemonShadowBox]} />
        <Text style={styles.descricaoTexto}>{pokemonDetails.description}</Text>
        <Text style={[styles.m, styles.mTypo]}>{pokemonDetails.height}</Text>
        <Text style={[styles.kg, styles.mTypo]}>{pokemonDetails.weight}</Text>
        <Text style={styles.descricao}>DESCRIÇÃO</Text>
        <Text style={styles.informacoesPokemon}>INFORMAÇÕES DO POKÉMON</Text>
        <Text style={[styles.n0777, styles.n0777Typo]}>Nº {pokemonDetails.id}</Text>
        <Text style={[styles.togedemaru, styles.n0777Typo]}>{pokemonDetails.name}</Text>
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <View style={[styles.infopokemonChild2, styles.lineViewPosition]} />
        <Text style={[styles.eletric, styles.steelTypo]}>{pokemonDetails.types[0]}</Text>
        <Text style={[styles.steel, styles.steelTypo]}>{pokemonDetails.types[1]}</Text>
        <Text style={[styles.cp, styles.cpTypo]}>XP</Text>
        <Text style={[styles.text, styles.cpTypo]}> {pokemonDetails.xp}</Text>
        <Text style={[styles.altura, styles.pesoTypo]}>ALTURA</Text>
        <Text style={[styles.peso, styles.pesoTypo]}>PESO</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>VOLTAR</Text>
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
  n0777Layout: {
    width: 240,
    left: 75,
  },
  starIcon: {
    top: "27%",
    alignSelf: "center",
    height: 40,
    width: 40,
    position: "absolute",
  },
  voltarShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80,
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
    fontFamily: FontFamily.barlowBold,
    fontWeight: '700',
  },
  rectangleViewShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  infopokemonShadowBox: {
    height: 48,
    width: 132,
    top: 669,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  mTypo: {
    width: 104,
    top: 682,
    height: 24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.barlowRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  n0777Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    position: "absolute",
  },
  lineViewPosition: {
    height: 10,
    width: 400,
    borderTopWidth: 2,
    marginLeft: -200.5,
    left: "50%",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  steelTypo: {
    top: 351,
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
    width: 100,
  },
  cpTypo: {
    fontFamily: FontFamily.barlowSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  pesoTypo: {
    top: 646,
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  perfil: {
    top: 0,
    left: 0,
    width: 400,
    height: 409,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  image1Icon: {
    top: 35,
    borderRadius: Border.br_37xl,
    height: 218,
    position: "absolute",
  },
  voltar: {
    top: 740,
    left: 97,
    width: 181,
    height: 57,
    backgroundColor: Color.colorBlack,
  },
  infopokemonChild: {
    top: 496,
    width: 270,
    height: 128,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 53,
  },
  infopokemonItem: {
    left: 53,
    height: 48,
    width: 132,
    top: 669,
  },
  infopokemonInner: {
    top: 340,
    backgroundColor: Color.colorWhite,
    width: 131,
    height: 45,
    left: 61,
  },
  rectangleView: {
    top: 339,
    left: 197,
    backgroundColor: "#adadad",
    width: 133,
    height: 47,
  },
  infopokemonChild1: {
    left: 191,
  },
  descricaoTexto: {
    top: 503,
    height: 120,
    color: Color.colorBlack,
    fontFamily: FontFamily.barlowRegular,
    fontSize: FontSize.size_lg,
    left: 68,
    width: 250,
    textAlign: "left",
    lineHeight: 21,
  },
  m: {
    left: 68,
    width: 104,
    top: 682,
  },
  kg: {
    left: 206,
  },
  descricao: {
    top: 472,
    left: 64,
    width: 172,
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  informacoesPokemon: {
    marginTop: 10,
    marginLeft: -156.5,
    top: "50%",
    fontSize: FontSize.size_3xl,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 33,
    textAlign: "center",
    left: "50%",
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  n0777: {
    top: 309,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    width: 240,
    left: 75,
  },
  togedemaru: {
    top: 260,
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    height: 55,
    width: 240,
    left: 75,
  },
  voltar1: {
    top: 751,
    left: 138,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  lineView: {
    top: 451,
  },
  infopokemonChild2: {
    top: 407,
  },
  eletric: {
    left: 75,
  },
  steel: {
    left: 215,
  },
  cp: {
    top: 21,
    left: 150,
    fontSize: 20,
  },
  text: {
    top: 9,
    left: 175,
    fontSize: 32,
  },
  altura: {
    left: 61,
  },
  peso: {
    left: 198,
  },
  infopokemon: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 811,
    overflow: "hidden",
  },
});

export default InfoPokemon;

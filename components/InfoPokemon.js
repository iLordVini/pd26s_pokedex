import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const InfoPokemon = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.infopokemon}>
      <View style={styles.perfil} />
      <Image
        style={[styles.image1Icon, styles.n0777Layout]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={[styles.voltar, styles.voltarShadowBox]} />
      <View style={[styles.infopokemonChild, styles.rectangleViewShadowBox]} />
      <View style={[styles.infopokemonItem, styles.infopokemonShadowBox]} />
      <View style={[styles.infopokemonInner, styles.voltarShadowBox]} />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <View style={[styles.infopokemonChild1, styles.infopokemonShadowBox]} />
      <Text style={styles.descricaoTexto}>
        With the long hairs on its back, this Pokémon takes in electricity from
        other electric Pokémon. It stores what it absorbsaaaaaaa in an electric sac.
      </Text>
      <Text style={[styles.m, styles.mTypo]}>0.3 m</Text>
      <Text style={[styles.kg, styles.mTypo]}>3.3 kg</Text>
      <Text style={styles.descricao}>DESCRIÇÃO</Text>
      <Text style={styles.informacoesPokemon}>INFORMAÇÕES DO POKÉMON</Text>
      <Text style={[styles.n0777, styles.n0777Typo]}>Nº 0777</Text>
      <Text style={[styles.togedemaru, styles.n0777Typo]}>{`Togedemaru`}</Text>
      <Text style={[styles.voltar1, styles.n0777Typo]}>VOLTAR</Text>
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.infopokemonChild2, styles.lineViewPosition]} />
      <Text style={[styles.eletric, styles.steelTypo]}>ELETRIC</Text>
      <Text style={[styles.steel, styles.steelTypo]}>STEEL</Text>
      <Text style={[styles.cp, styles.cpTypo]}>CP</Text>
      <Text style={[styles.text, styles.cpTypo]}>1493</Text>
      <Text style={[styles.altura, styles.pesoTypo]}>ALTURA</Text>
      <Text style={[styles.peso, styles.pesoTypo]}>PESO</Text>
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
    height: 21,
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
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
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
    top: 45,
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
    backgroundColor: Color.colorKhaki,
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
    height: 400,
    color: Color.colorBlack,
    fontFamily: FontFamily.barlowRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 68,
    width: 240,
    position: "absolute",
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
    left: 92,
  },
  steel: {
    left: 237,
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

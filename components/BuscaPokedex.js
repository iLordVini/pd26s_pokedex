import * as React from "react";
import { useEffect, useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import InfoPokemon from "./InfoPokemon";
import { TouchableOpacity, Touchable } from "react-native";
import {alternarFavoritoFunc, teste} from '../componentes-back/funcoes'

function BuscaPokedex ({route}){

  var [nome, setNome] = useState('');
  var [id, setId] = useState('');

  //console.log(route.params.id)

  async function alternarFav (){
    await alternarFavoritoFunc(route.params.id, id, nome);
    return
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buscapokedex}>
        <View style={styles.perfil} />
        <View style={styles.voltar} />
        <Text style={styles.voltar1}>VOLTAR</Text>
        <Text style={[styles.pokedex, styles.pokedexLayout]}>{`POKEDEX`}</Text>
        <View style={styles.buscapokedexChild} />
        <View style={[styles.buscapokedexItem, styles.pokedexLayout]} />
        <Text style={styles.eletric}>ELETRIC</Text>
        <View style={[styles.buscapokedexInner, styles.rectangleViewLayout]} />
        <Text style={[styles.cdigo, styles.nomeTypo]}>Código</Text>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Text style={[styles.habilidade, styles.geracaoTypo]}>Habilidade</Text>
        <View
          style={[styles.buscapokedexChild1, styles.buscapokedexChildLayout]}
        />
        <Text style={[styles.nome, styles.nomeTypo]}>Nome</Text>
        <View
          style={[styles.buscapokedexChild2, styles.buscapokedexChildLayout]}
        />
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Pikachu'); setId('0025')}}>
        <View
          style={[styles.buscapokedexChild3, styles.buscapokedexChildShadowBox3]}
        />
        <Text style={[styles.text, styles.textTypo2]}>#0025</Text>
        <Image
          style={[styles.image1Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Pikachu'); setId('0025')}}>
        <View
          style={[styles.buscapokedexChild4, styles.buscapokedexChildShadowBox2]}
        />
        <Text style={[styles.text1, styles.textTypo2]}>#0025</Text>
        <Image
          style={[styles.image2Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Pikachu'); setId('0025')}}>
        <View
          style={[styles.buscapokedexChild5, styles.buscapokedexChildShadowBox1]}
        />
        <Text style={[styles.text2, styles.textTypo2]}>#0025</Text>
        <Image
          style={[styles.image3Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Pikachu'); setId('0025')}}>
        <View
          style={[styles.buscapokedexChild6, styles.buscapokedexChildShadowBox]}
        />
        <Text style={[styles.text3, styles.textTypo2]}>#0025</Text>
        <Image
          style={[styles.image4Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Electabuzz'); setId('0125')}}>
        <View style={[styles.buscapokedexChild7, styles.iconChildPosition1]} />
        <Text style={[styles.text4, styles.textTypo1]}>#0125</Text>
        <Image
          style={[styles.image5Icon, styles.iconChildPosition1]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Electabuzz'); setId('0125')}}>
        <View style={[styles.buscapokedexChild8, styles.iconChildPosition1]} />
        <Text style={[styles.text5, styles.textTypo1]}>#0125</Text>
        <Image
          style={[styles.image6Icon, styles.iconChildPosition1]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Electabuzz'); setId('0125')}}>
        <View style={[styles.buscapokedexChild9, styles.iconChildPosition1]} />
        <Text style={[styles.text6, styles.textTypo1]}>#0125</Text>
        <Image
          style={[styles.image7Icon, styles.iconChildPosition1]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Electabuzz'); setId('0125')}}>
        <View style={[styles.buscapokedexChild10, styles.iconChildPosition1]} />
        <Text style={[styles.text7, styles.textTypo1]}>#0125</Text>
        <Image
          style={[styles.image8Icon, styles.iconChildPosition1]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Togedemaru'); setId('0777')}}>
        <View style={[styles.buscapokedexChild11, styles.iconChildPosition]} />
        <Text style={[styles.text8, styles.textTypo]}>#0777</Text>
        <Image
          style={[styles.image9Icon, styles.iconChildPosition]}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Togedemaru'); setId('0777')}}>
        <View style={[styles.buscapokedexChild12, styles.iconChildPosition]} />
        <Text style={[styles.text9, styles.textTypo]}>#0777</Text>
        <Image
          style={[styles.image10Icon, styles.iconChildPosition]}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Togedemaru'); setId('0777')}}>
        <View style={[styles.buscapokedexChild13, styles.iconChildPosition]} />
        <Text style={[styles.text10, styles.textTypo]}>#0777aa</Text>
        <Image
          style={[styles.image11Icon, styles.iconChildPosition]}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Togedemaru'); setId('0777')}}>
        <View style={[styles.buscapokedexChild14, styles.iconChildPosition]} />
        <Text style={[styles.text10, styles.textTypo]}>#0777</Text>
        <Image
          style={[styles.image11Icon, styles.iconChildPosition]}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
        </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {alternarFav(); setNome('Togedemaru'); setId('0777')}}>
          <View style={[styles.buscapokedexChild14, styles.iconChildPosition]}/>
          <Text style={[styles.text11, styles.textTypo]}>#0777</Text>
          <Image
            style={[styles.image12Icon, styles.iconChildPosition]}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
          </TouchableOpacity>



        <Text style={[styles.habitat, styles.tipoTypo]}>Habitat</Text>
        <View
          style={[styles.buscapokedexChild15, styles.buscapokedexChildLayout]}
        />
        <Text style={[styles.geracao, styles.geracaoTypo]}>Geração</Text>
        <Text style={[styles.tipo, styles.tipoTypo]}>Tipo</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
  },
  pokedexLayout: {
    height: 45,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 48,
    width: 133,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  nomeTypo: {
    top: 80,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    position: "absolute",
  },
  geracaoTypo: {
    top: 188,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    position: "absolute",
  },
  buscapokedexChildLayout: {
    left: 211,
    height: 48,
    width: 133,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  buscapokedexChildShadowBox3: {
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    left: 9,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  textTypo2: {
    top: 496,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout3: {
    height: 65,
    width: 65,
    left: 19,
  },
  buscapokedexChildShadowBox2: {
    left: 100,
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  iconLayout2: {
    left: 110,
    height: 65,
    width: 65,
  },
  buscapokedexChildShadowBox1: {
    left: 191,
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  iconLayout1: {
    left: 201,
    height: 65,
    width: 65,
  },
  buscapokedexChildShadowBox: {
    left: 282,
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  iconLayout: {
    left: 292,
    height: 65,
    width: 65,
  },
  iconChildPosition1: {
    top: 531,
    position: "absolute",
  },
  textTypo1: {
    top: 594,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconChildPosition: {
    top: 630,
    position: "absolute",
  },
  textTypo: {
    top: 693,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    position: "absolute",
  },
  tipoTypo: {
    top: 296,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    position: "absolute",
  },
  perfil: {
    top: 0,
    height: 412,
    width: 475,
    backgroundColor: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  voltar: {
    top: 740,
    left: 97,
    width: 181,
    height: 57,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_17xl,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  voltar1: {
    top: 751,
    left: 138,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    color: Color.colorWhite,
    position: "absolute",
  },
  pokedex: {
    top: 11,
    fontSize: 36,
    fontWeight: "800",
    fontFamily: FontFamily.barlowExtraBold,
    textAlign: "center",
    color: Color.colorWhite,
    height: 45,
    width: 375,
    left: 0,
  },
  buscapokedexChild: {
    marginLeft: -188.5,
    top: 407,
    left: "50%",
    borderTopWidth: 2,
    width: 377,
    height: 10,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  buscapokedexItem: {
    top: 321,
    left: 31,
    backgroundColor: Color.colorKhaki,
    width: 131,
    height: 45,
    borderRadius: Border.br_17xl,
  },
  eletric: {
    top: 332,
    left: 62,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    position: "absolute",
  },
  buscapokedexInner: {
    left: 30,
    top: 103,
  },
  cdigo: {
    left: 38,
  },
  rectangleView: {
    left: 27,
    top: 211,
  },
  habilidade: {
    left: 38,
  },
  buscapokedexChild1: {
    top: 103,
  },
  nome: {
    left: 219,
  },
  buscapokedexChild2: {
    top: 319,
  },
  buscapokedexChild3: {
    top: 433,
    position: "absolute",
  },
  text: {
    left: 25,
  },
  image1Icon: {
    top: 433,
    position: "absolute",
  },
  buscapokedexChild4: {
    top: 433,
    position: "absolute",
  },
  text1: {
    left: 116,
  },
  image2Icon: {
    top: 433,
    position: "absolute",
  },
  buscapokedexChild5: {
    top: 433,
    position: "absolute",
  },
  text2: {
    left: 207,
  },
  image3Icon: {
    top: 433,
    position: "absolute",
  },
  buscapokedexChild6: {
    top: 433,
    position: "absolute",
  },
  text3: {
    left: 298,
  },
  image4Icon: {
    top: 433,
    position: "absolute",
  },
  buscapokedexChild7: {
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    left: 9,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  text4: {
    left: 25,
  },
  image5Icon: {
    height: 65,
    width: 65,
    left: 19,
  },
  buscapokedexChild8: {
    left: 100,
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  text5: {
    left: 116,
  },
  image6Icon: {
    left: 110,
    height: 65,
    width: 65,
  },
  buscapokedexChild9: {
    left: 191,
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  text6: {
    left: 207,
  },
  image7Icon: {
    left: 201,
    height: 65,
    width: 65,
  },
  buscapokedexChild10: {
    left: 282,
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  text7: {
    left: 298,
  },
  image8Icon: {
    left: 292,
    height: 65,
    width: 65,
  },
  buscapokedexChild11: {
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    left: 9,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  text8: {
    left: 25,
  },
  image9Icon: {
    height: 65,
    width: 65,
    left: 19,
  },
  buscapokedexChild12: {
    left: 100,
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  text9: {
    left: 116,
  },
  image10Icon: {
    left: 110,
    height: 65,
    width: 65,
  },
  buscapokedexChild13: {
    left: 191,
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  text10: {
    left: 207,
  },
  image11Icon: {
    left: 201,
    height: 65,
    width: 65,
  },
  buscapokedexChild14: {
    left: 282,
    height: 85,
    width: 85,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
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
  },
  text11: {
    left: 298,
  },
  image12Icon: {
    left: 292,
    height: 65,
    width: 65,
  },
  habitat: {
    width: 72,
    height: 24,
    left: 219,
  },
  buscapokedexChild15: {
    top: 211,
  },
  geracao: {
    left: 219,
  },
  tipo: {
    left: 38,
  },
  buscapokedex: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 811,
    overflow: "hidden",
  },
});

export default BuscaPokedex;

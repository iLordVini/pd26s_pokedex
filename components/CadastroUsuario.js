import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import StackNavigator from '../StackNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {exibirEmail, exibirNome} from "../componentes-back/funcoes";
import { useSwipe } from '../useSwipe'
import { useEffect, useState} from 'react';

const CadastroUsuario = ({route ,navigation}) => {
  let IDsecao

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  try {
    IDsecao = route.params.id
    console.log(id); // Esta linha nunca será alcançada se ocorrer um erro acima
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Cannot read property 'id' of undefined")) {
      navigation.navigate('LoginUsuario')
    } else {
      // Outros tipos de erro
      console.error("Ocorreu um erro:", error.message);
    }
  }
  console.log(IDsecao)

  async function coletarInformacoe(){
    setEmail(await exibirEmail(IDsecao));
    setNome(await exibirNome(IDsecao));
    console.log(nome, email)
  }
  coletarInformacoe()

  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)

  function onSwipeLeft(){
    navigation.navigate('BuscaPokedex',{id:IDsecao})
    console.log("oia aqui")
  }

  function onSwipeRight(){
    
  }
  return (
    <ScrollView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={styles.container}>
    <View style={styles.cadastrousuario}>
      <View style={styles.perfil} />
      <Image
        style={[styles.image1Icon, styles.ashk23Position]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={styles.voltar} />
      <View
        style={[styles.cadastrousuarioChild, styles.cadastrousuarioShadowBox]}
      />
      <View
        style={[styles.cadastrousuarioItem, styles.cadastrousuarioShadowBox]}
      />
      <View
        style={[styles.cadastrousuarioInner, styles.cadastrousuarioShadowBox]}
      />
      <Text style={[styles.ashgmailcom, styles.textTypo]}>{email}</Text>
      <Text style={[styles.eMail, styles.nomeTypo]}>E-MAIL</Text>
      <Text style={[styles.ashDaSilva, styles.textTypo]}>{nome}</Text>
      <Text style={[styles.nome, styles.nomeTypo]}>NOME</Text>
      <Text style={styles.informacoesUsuario}>INFORMAÇÕES DO USUÁRIO</Text>
      <Text style={[styles.ashk23, styles.ashk23Typo]}>{nome}</Text>
      <Text style={[styles.voltar1, styles.ashk23Typo]}>VOLTAR</Text>
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.cadastrousuarioChild1, styles.lineViewPosition]} />
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={require("../assets/star-1.png")}
      />
      <Text style={[styles.verPokemonsFavoritos, styles.verPokemonsFavoritos]}>
        VER POKÉMON’S FAVORITOS
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
  },
  ashk23Position: {
    left: 75,
    width: 240,
  },
  cadastrousuarioShadowBox: {
    height: 38,
    width: 270,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 61,
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
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.barlowRegular,
    fontSize: FontSize.size_lg,
    left: 73,
    textAlign: "left",
    position: "absolute",
  },
  nomeTypo: {
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
    width: 200,
  },
  ashk23Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    position: "absolute",
  },
  lineViewPosition: {
    height: 10,
    width: 450,
    borderTopWidth: 2,
    marginLeft: -200.5,
    left: "50%",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  perfil: {
    top: 0,
    left: 0,
    width: 475,
    height: 408,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  image1Icon: {
    top: 20,
    borderRadius: Border.br_37xl,
    height: 218,
    width: 240,
    position: "absolute",
  },
  voltar: {
    top: 736,
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
  cadastrousuarioChild: {
    top: 517,
  },
  cadastrousuarioItem: {
    top: 588,
  },
  cadastrousuarioInner: {
    top: 663,
  },
  ashgmailcom: {
    top: 595,
    width: 164,
    textAlign: "left",
  },
  eMail: {
    top: 565,
    width: 100,
    left: 62,
    fontWeight: "700",
  },
  text: {
    top: 670,
    width: 350,
    textAlign: "left",
  },
  ashDaSilva: {
    top: 524,
    height: 21,
    textAlign: "left",
    width: 250,
  },
  nome: {
    top: 494,
    left: 64,
    width: 54,
  },
  informacoesUsuario: {
    marginTop: 6.5,
    marginLeft: -152.5,
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
  userid484: {
    top: 284,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
    width: 240,
    left: 75,
  },
  ashk23: {
    top: 239,
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    width: 240,
    left: 75,
  },
  voltar1: {
    top: 748,
    left: 138,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
  },
  lineView: {
    top: 451,
    width: 450,
  },
  cadastrousuarioChild1: {
    top: 407,
  },
  starIcon: {
    top: 317,
    left: 166,
    width: 60,
    height: 60,
    position: "absolute",
  },
  verPokemonsFavoritos: {
    top: 384,
    left: 0,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
  },
  cadastrousuario: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 811,
    overflow: "hidden",
  },
});

export default CadastroUsuario;

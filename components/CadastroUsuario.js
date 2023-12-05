import * as React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { exibirEmail, exibirNome, exibirBirthday } from "../componentes-back/Functions";
import { useState } from 'react';

const CadastroUsuario = ({ route, navigation }) => {
  let IDsecao;

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [birthday, setBirthday] = useState('');

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

  async function coletarInformacoes() {
    setEmail(await exibirEmail(IDsecao));
    setNome(await exibirNome(IDsecao));
    setBirthday(await exibirBirthday(IDsecao));
    console.log(nome, email, birthday)
  }
  coletarInformacoes()

  function goPokedex() {
    navigation.navigate('BuscaPokedex', { id: IDsecao })
  }

  function goFav() {
    navigation.navigate('BuscaPokedexFav', { id: IDsecao })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cadastrousuario}>
        <View style={styles.perfil} />
        <Image
          style={[styles.image1Icon, styles.ashk23Position]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.cadastrousuarioChild, styles.cadastrousuarioShadowBox]} />
        <View style={[styles.cadastrousuarioItem, styles.cadastrousuarioShadowBox]} />
        <View style={[styles.cadastrousuarioInner, styles.cadastrousuarioShadowBox]} />
        <Text style={[styles.ashgmailcom, styles.textTypo]}>{email}</Text>
        <Text style={[styles.eMail, styles.nomeTypo]}>E-MAIL</Text>
        <Text style={[styles.text, styles.textTypo]}>{birthday}</Text>
        <Text style={[styles.dataDeNascimento, styles.nomeTypo]}>DATA DE NASCIMENTO</Text>
        <Text style={[styles.ashDaSilva, styles.textTypo]}>{nome}</Text>
        <Text style={[styles.nome, styles.nomeTypo]}>NOME</Text>
        <Text style={[styles.userid484, styles.ashk23Typo]}>UID: {IDsecao}</Text>
        <Text style={styles.informacoesUsuario}>INFORMAÇÕES DO USUÁRIO</Text>
        <Text style={[styles.ashk23, styles.ashk23Typo]}>{nome}</Text>
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <View style={[styles.cadastrousuarioChild1, styles.lineViewPosition]} />
        <Text style={[styles.verPokemonsFavoritos, styles.verPokemonsFavoritos]}>
          VER POKÉMON’S FAVORITOS
        </Text>
        <TouchableOpacity style={styles.starIcon} onPress={goFav}>
          <Image
            style={styles.starIcon}
            contentFit="cover"
            source={require("../assets/star-1.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => goPokedex()} style={styles.backButton}>
          <Image style={styles.pokemonIcon} source={require('../assets/image-12.png')} />
          <Text style={styles.backButtonText}>POKEDEX</Text>
          <Image style={styles.pokemonIcon2} source={require('../assets/image-12.png')} />
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
  dataDeNascimento: {
    top: 637,
    width: 350,
    left: 62,
    fontWeight: "700",
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -75,
    paddingBottom: 8,
  },
  pokemonIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  pokemonIcon2: {
    width: 30,
    height: 30,
    marginLeft: 8,
    transform: [{ scaleX: -1 }],
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    top: 740,
    left: 97,
    width: 181,
    height: 50,
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
    width: 250,
    textAlign: "left",
  },
  eMail: {
    top: 565,
    width: 250,
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
    width: 250,
  },
  informacoesUsuario: {
    marginTop: 6.5,
    top: "50%",
    fontSize: FontSize.size_3xl,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 33,
    textAlign: "center",
    left: "10%",
    fontFamily: FontFamily.barlowBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  userid484: {
    top: 284,
    fontSize: 10,
    paddingTop: 5,
    color: Color.colorWhite,
    textAlign: "center",
    width: 300,
    left: 45,
  },
  ashk23: {
    top: 239,
    fontSize: 35,
    textAlign: "center",
    width: 385,
  },
  voltar1: {
    top: 746,
    left: 126,
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
    top: 160,
    alignSelf: "center",
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

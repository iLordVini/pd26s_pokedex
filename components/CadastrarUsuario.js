import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { cadastrarUsuarioFunc } from '../componentes-back/funcoes';

function CadastrarUsuario({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [birthday, setBirthday] = useState('');

  async function cadastrarUsuarioI() {
    const verificar = await cadastrarUsuarioFunc(nome, email, senha, birthday);
    if (verificar === 1) {
      navigation.navigate('LoginUsuario');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <TextInput
          value={nome}
          onChangeText={(texto) => setNome(texto)}
          style={styles.input}
          placeholder='Nome'
        />
        <TextInput
          value={email}
          onChangeText={(texto) => setEmail(texto)}
          style={styles.input}
          placeholder='E-mail'
        />
        <TextInput
          value={senha}
          onChangeText={(texto) => setSenha(texto)}
          style={styles.input}
          placeholder='Senha'
          secureTextEntry
        />
         <TextInput
          value={birthday}
          onChangeText={(texto) => setBirthday(texto)}
          style={styles.input}
          placeholder='Data de Nascimento (dd/mm/aaaa)'
        />
        <TouchableOpacity style={styles.button} onPress={cadastrarUsuarioI}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Color.colorWhite,
  },
  title: {
    fontSize: FontSize.size_3xl,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Color.colorBlack,
  },
  input: {
    height: 40,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  label: {
    fontSize: FontSize.size_lg,
    marginVertical: 5,
    fontFamily: FontFamily.barlowRegular,
  },
  button: {
    backgroundColor: Color.colorBlack,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: Color.colorWhite,
    textAlign: 'center',
  },
});

export default CadastrarUsuario;

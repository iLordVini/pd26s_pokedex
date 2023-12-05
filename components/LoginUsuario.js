import * as React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { logarUsuarioFunc } from '../componentes-back/funcoes';

function LogarUsuario({ navigation }) {
  const [email, setEmail] = React.useState('vini@teste.com');
  const [senha, setSenha] = React.useState('123456');

  const logarUsuarioI = async () => {
    const secao = await logarUsuarioFunc(email, senha);
    if (secao !== 1) {
      navigation.navigate("BuscaPokedex", { id: secao });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={logarUsuarioI}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CadastrarUsuario")}>
        <Text style={styles.signupText}>Ainda não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  loginButton: {
    backgroundColor: Color.colorBlack,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: Color.colorWhite,
    textAlign: 'center',
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    color: Color.colorBlack,
  },
});

export default LogarUsuario;

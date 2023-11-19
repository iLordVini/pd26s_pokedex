import * as React from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useState} from 'react';
import { initializeApp, apps, lenght } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, onValue, set, update, remove, push, orderByValue, limitToLast, once} from "firebase/database";
import firebase_db from '../src/firebaseconfig';
import {cadastrarUsuarioFunc} from '../componentes-back/funcoes'
import { useRoute } from "@react-navigation/core";


function CadastrarUsuario ({route}){

  var [nome, setNome] = useState('');
  var [email, setEmail] = useState('');
  var [senha, setSenha] = useState('');

  const { itemID } = useRoute(route)
  console.log(route.params.id)
  //alert(itemID)

  function cadastrarUsuarioI(){
    cadastrarUsuarioFunc(nome, email, senha);
  }
  
  return (
    <View style={StyleSheet.container}>
        <Text style={{fontSize:30}}>Nome:</Text>
        <TextInput value={nome} onChangeText={(texto) => setNome(texto)} style={styles.input} placeholder='Insira seu Nome'/> 
        <Text style={{fontSize:30}}>Email:</Text>
        <TextInput value={email} onChangeText={(texto) => setEmail(texto)} style={styles.input} placeholder='Insira seu Email'/> 
        <Text style={{fontSize:30}}>Senha:</Text>
        <TextInput value={senha} onChangeText={(texto) => setSenha(texto)} style={styles.input} placeholder='Insira sua Senha'/> 
        <Button title="Cadastrar" onPress={cadastrarUsuarioI}/>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    fontSize:20,
    margin:10,
    borderColor:'#000',
    borderWidth: 2,
    height:40,
    padding:10
  }
})

export default CadastrarUsuario;

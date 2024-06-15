import { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, Button } from "react-native";
import { estilos } from './estilos'
import logo from '../src/assets/images/logo.png';



export default function Index() {


  return (
    <View style={estilos.background}>

      <Image style={estilos.logoImg} source={logo}/>     

      <Text style={estilos.subtitle}>Fazer login</Text>

      <Text style={estilos.useConta}>Use sua Conta do Google.</Text>

      <Text style={estilos.saibaMais} >Saiba mais sobre como usar sua conta</Text>

      <TextInput style={estilos.input} placeholder={'E-mail ou telefone'}
       placeholderTextColor={'#888'}/>
      
      <Text style={estilos.esqueceuEmail}>Esqueceu seu e-mail?</Text>

      <Text style={estilos.criarConta}>Criar conta</Text>

    <TouchableOpacity activeOpacity={0.5}>       
      <Text style={estilos.avancar}>Avançar</Text>
    </TouchableOpacity>

    </View>
   
  );
}



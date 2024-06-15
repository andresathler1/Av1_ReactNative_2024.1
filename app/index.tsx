import { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, Button } from "react-native";
import { bitcoinStyle } from "./bitcoinStyle";
import lupa from './../src/assets/images/lupa.png'
import flask from './../src/assets/images/flask.png'
import google from './../src/assets/images/logo.png'
import notification from './../src/assets/images/notification.png'
import user from './../src/assets/images/user.png'
import close from './../src/assets/images/close.png'
import mic from './../src/assets/images/mic.png'
import add from './../src/assets/images/add.png'
import arrowDown from './../src/assets/images/arrowDown.png'
import grafico from './../src/assets/images/graficoBtc.jpg'
import drop from './../src/assets/images/dropdown.png'



export default function Index() {

  return (
    <View style={bitcoinStyle.background}>

    <View>
      <Image style={bitcoinStyle.flask}source={flask} />
      <Image style={bitcoinStyle.logo}source={google}/>
      <Image style={bitcoinStyle.notification}source={notification}/>
      <Image style={bitcoinStyle.user}source={user}/> 
    </View>

    <View>     
      <Text style={bitcoinStyle.search}> 
        bitcoin                                        │
      </Text>
    </View>           
    
    <Image style={bitcoinStyle.lupe} source={lupa}/> 
    <Image style={bitcoinStyle.closeBtn} source={close}/> 
    <Image style={bitcoinStyle.micBtn} source={mic}/> 
   
    <Text style={bitcoinStyle.todas}>
      Todas
    </Text>
    <Text style={bitcoinStyle.menu}>
        Notícias   Imagens   Videos   Shopping
    </Text>
    <Text style={bitcoinStyle.linhaTodas} >________</Text>
    <Text style={bitcoinStyle.linhaMenu}>____________________________________________________________</Text>
    <Text style={bitcoinStyle.mercado}> Resumo do mercado   
      <Text style={bitcoinStyle.mercadoBtc}>
        > Bitcoin
      </Text>
    </Text>
    <Text style={bitcoinStyle.preco}>
      66.700,80 
      <Text style={bitcoinStyle.moeda}>
         USD
      </Text>
    </Text>
    <TouchableOpacity activeOpacity={0.6}>
    <Text style={bitcoinStyle.seguir}>      
      Seguir     
    </Text>
    </TouchableOpacity>
    <Image style={bitcoinStyle.addBtn} source={add} />
    <Text style={bitcoinStyle.variacao}>
      -38,00 (0,057%)     hoje
    </Text>
    <Image style={bitcoinStyle.arrowDown} source={arrowDown}/>
    <Text style={bitcoinStyle.data}>
      14 de jun., 03:24 UTC · 
      <Text style={bitcoinStyle.fontes}>Fontes</Text>
    </Text>
    <Image style={bitcoinStyle.grafico} source={grafico}/>
    <Text style={bitcoinStyle.btc}>
        1                                                     │     BTC
    </Text>
    <Text style={bitcoinStyle.btc}>
        66700,80                                       │     USD
    </Text>
    <Image style={bitcoinStyle.dropdown} source={drop}/> 
    <TouchableOpacity activeOpacity={0.6}>
    <Text style={bitcoinStyle.mais}>
      Mais sobre Bitcoin  >
    </Text>
    </TouchableOpacity>
    <Image style={bitcoinStyle.dropdown2} source={drop}/> 

    </View>
   
  );
}



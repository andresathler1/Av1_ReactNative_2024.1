import { StyleSheet } from "react-native";

export const bitcoinStyle = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: '#212421'
    },
    flask:{
        tintColor: '#d3d3d3',
        top: 12,
        left: 20,
        alignSelf: "flex-start",
        width: 25,
        height: 25
    },
    logo:{
        tintColor: 'white',
        alignSelf: 'center',
        top: -17,
        width: 105,
        height: 43
    },
    notification:{
        tintColor: '#d3d3d3',
        alignSelf: 'flex-end',
        right: 64,
        top: -55,
        width: 27,
        height: 27 
    },
    user:{
        tintColor: '#d3d3d3',
        top: -85,
        left: 312,        
        width: 32,
        height: 32
    },
    search:{                  
        textAlign: 'center',
        color: 'white',            
        alignSelf: 'center',         
        borderWidth: 1,
        borderColor: '#3f4244', 
        backgroundColor: '#3f4244',               
        paddingVertical: 7,
        width: 330,
        height: 40,
        top: -67,        
        fontSize: 18,    
        borderRadius: 25
    },
    lupe:{ 
        left: 25,
        bottom: 98,
        width: 27,
        height: 27, 
        tintColor: 'white',            
    },
    closeBtn:{  
        left: 265,
        bottom: 127,
        tintColor: 'white',         
        width: 27,
        height: 27,        
    },
    micBtn:{
        tintColor: 'white',
        bottom: 154,
        left: 306, 
        width: 27,
        height: 27,                
    },
    menu:{        
        textAlign: 'center',
        color: '#a9a9a9',
        fontWeight: '700',
        fontSize: 16.5,        
        left: 50,
        bottom: 160
    },
    todas:{        
        color: 'white',
        fontWeight: '700',
        fontSize: 17.5,        
        left: 20,
        bottom: 137,
    },
    linhaTodas:{
        bottom: 175,
        left: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    linhaMenu:{
        color: '#a9a9a9',
        bottom: 187,
        fontWeight: '100'
    },
    mercado:{
        color: '#a9a9a9',
        bottom: 180,
        left: 22
    },
    mercadoBtc:{
        color: 'white'
    },
    preco:{
        color: 'white',
        fontSize: 28,
        left: 22,
        bottom: 180,
        fontWeight: 'condensedBold'
    },
    moeda:{
        color: '#a9a9a9',
        fontSize: 16,
        fontWeight: 'condensedBold'
    },
    seguir:{
        color: '#212421',
        fontWeight: '900',
        borderWidth: 1,
        borderColor: '#8bb3f5',
        borderRadius: 15,
        backgroundColor: '#8bb3f5',
        width: 88,
        height: 33,
        left: 250,
        bottom: 195,
        textAlign: 'center',
        paddingVertical: 6
    },
    addBtn:{        
        tintColor: '#212421',
        left: 252,
        bottom: 224,
        width: 25,
        height: 25
    },
    variacao:{
        color: '#f58382',
        bottom: 235,
        left: 22
    },
    arrowDown:{
        tintColor: '#f58382',
        bottom: 253,
        width: 20,
        height: 20,
        left: 118
    },
    data:{
        color: '#696969',
        bottom: 240,
        left: 20
    },
    fontes:{
        textDecorationLine: 'underline',
        fontWeight: '700'
    },
    grafico:{
        bottom: 230,
        right: 3,
        height: 195,
        width: 360
    },
    btc:{     
        color: 'white', 
        backgroundColor: '#252628',      
        borderWidth: 0.5,
        bottom: 225,
        fontSize: 16,
        textAlign: 'center',
        borderRadius: 4,
        borderColor: '#a9a9a9', 
        width: 340,
        height: 47,
        alignSelf: 'center',
        paddingVertical: 11,
        margin: 3
    },   
    dropdown:{  
        color: '#2d2d2d',
        bottom: 323,
        left: 316,
        width: 36,
        height: 36
    },
    dropdown2:{  
        color: '#2d2d2d',
        bottom: 349,
        left: 317,
        width: 36,
        height: 36
    },
    mais:{
        color: 'white',
        backgroundColor: '#2d2d2d',
        borderColor: '2d2d2d',
        borderRadius: 18,
        bottom: 259,      
        textAlign: 'center',
        fontWeight: '600',
        width: 330,
        height: 43,
        alignSelf: 'center',
        paddingVertical: 10
    }
})
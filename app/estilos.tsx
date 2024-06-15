import { StyleSheet, Platform } from "react-native";

export const estilos = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: 'black'        
    },

    logoImg: {
        tintColor: 'white',
        top: 40,        
        width: 86,
        height: 34,
        alignSelf: 'center'
        
    },

    subtitle: {
        top:50,
        textAlign: 'center',
        fontSize: 23,
        color: 'white'
    },

    useConta: {
        top: 60,
        textAlign: 'center',
        fontSize: 15,
        color: 'grey',
        fontWeight: "500"
    },
    
    saibaMais: {
        top: 64,
        textAlign: 'center',
        fontSize: 15,
        color: '#89B4F8',
        fontWeight: "700"
    },
    
    input: {          
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: 'grey',  
        alignSelf: 'center',
        top: 60,
        width: 320,
        backgroundColor: 'black',
        paddingVertical: 12,  
        padding: 10,              
        color: 'white',
        fontSize: 16,        
        marginTop: 40,
        borderRadius: 4
    },

    esqueceuEmail: {
        top: 70,        
        fontSize: 14,
        color: '#89B4F8',
        left: 20,
        fontWeight: "500"    
    },

    criarConta: {
        top: 130,        
        fontSize: 14,
        color:'#89B4F8',
        left: 20,
        fontWeight: "500"
    }, 

    avancar: {
        textAlign: 'center',
        alignContent: 'center',
        width: 90,
        height: 39,
        top: 300,
        color: 'black',
        left: 240,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#89B4F8',
        padding: 10      
    }    

})
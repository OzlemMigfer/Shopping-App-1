import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#d1d1e0',
        borderColor:'#b3b3cb',
        borderWidth:1,
        margin:10,
        flexDirection:'row'
    },
    image:{
        minHeight:100,
        width:100,
        resizeMode:'contain',
        backgroundColor:'white '
    },
    body_container:{
        flex:1,
        justifyContent:'space-between',
        padding:10
    },
    title:{
        fontSize:20,
        color:'black'
    },
    price:{
        textAlign:'right',
        fontSize:20,
        fontStyle:'italic'
    }
});
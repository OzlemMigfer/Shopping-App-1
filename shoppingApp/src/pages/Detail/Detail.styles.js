import { StyleSheet,Dimensions } from "react-native";
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#b4b4cb'
    },
    image:{
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    body_container:{
        padding:10
    },
    title:{
        fontWeight:'bold',
        fontSize:28,
        color:'black'
    },
    description:{
        fontStyle:'italic',
        fontSize:20,
        marginVertical:5
    },
    price:{
        fontWeight:'bold',
        fontSize:30,
        color:'white',
        marginTop:20,
        textAlign:'right'
    }
});
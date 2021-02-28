import { Button } from 'native-base';
import React ,{useState} from 'react';
import { View, Text, TouchableOpacity,StyleSheet ,Image,TextInput} from 'react-native';

export default function Adminlogin({navigation}){
    const [password,setPassword] =useState("saimoon");
    const login=()=>{
        if (password==="Saimoon") {
            navigation.replace("Adminscreen")
        }
        else if (password===""){
            alert("Please Enter password")
        }
        else {
            alert("Please enter correct password")
        }
    }
    return(
        <View>
             <Image style={{ width: 400, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
            <Text style={styles.main} >Enter Admin Password</Text>
           <View style={styles.in}>
            <TextInput onChangeText={(text)=>setPassword(text)} style={styles.text} placeholder="Admin password" />
            {/* <View onPress={()=>navigation.replace("Adminscreen")}> */}
            <TouchableOpacity onPress={login}>
                <Text style={styles.abtn}>Admin Login</Text>
            </TouchableOpacity>
            {/* </View> */}
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        width:350,
        paddingLeft:15,
        fontSize:20,
        height:50,
        marginBottom:30,
        // paddingTop:50,
        // borderColor:"black",
        borderWidth:1,
        // borderStyle:'solid'  ,
        borderColor:"lightgray",
    },
    abtn:{
        backgroundColor:"#cfabab",
        // fontWeight: "bold",
        borderColor:"blue",
        paddingTop:5 ,
        width:290,
        fontSize:20,
        borderRadius:3,
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        height:40,
        // borderWidth:2,
        textAlign:"center",
        color:"red",
            },
    main:{
        fontSize:30,
    alignContent:"center",
    textAlign:"center",
    justifyContent:"center",
alignItems:"center",
    },
    in:{
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center",
        // paddingLeft:20,
        paddingTop:10,
    }
})
import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet ,Image} from 'react-native';


export default function Mlogin({navigation}) {
    return(
        <View style={styles.main}>
            <Image style={{ width: 400, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
            {/* <Text style={styles.main} >Wellcom To Crescent Grammer School Orginatation</Text> */}
            <TouchableOpacity onPress={()=>navigation.navigate("Adminlogin")}>
                <Text style={styles.abtn}>Administrator Login</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Studentlogin")}>
                <Text style={styles.sbtn}>Student Login</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Companylogin")}>
                <Text style={styles.cbtn}>Company Login</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        justifyContent:"center",
        alignItems:"center",
        fontSize:30,
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
            cbtn:{
                backgroundColor:"#a5d9c4",
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
                color:"#05452b",
                    },
                    sbtn:{
                        backgroundColor:"#cad0ed",
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
                        color:"blue",
                            },
})
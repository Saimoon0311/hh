import * as React from 'react';
import { Text, View,TouchableOpacity ,Image,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





const Tab = createBottomTabNavigator();

export default function Adminscreen({navigation}) {
  return (
  <View style={styles.main}>
              <Image style={{ width: 380, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
            <Text style={styles.dash} >DashBoard</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Stdails")}>
                <Text style={styles.abtn}>Student Details</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Comdetails")}>
                <Text style={styles.abtn}>Company Details</Text>
            </TouchableOpacity>
  </View>
  );
}
const styles = StyleSheet.create({
    main:{
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center",
    },
    dash:{
fontSize:30,
paddingBottom:10,
fontWeight:'bold',
    },
abtn:{
    backgroundColor:"#a3baf0",
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
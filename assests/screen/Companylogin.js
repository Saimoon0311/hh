import React,{useState} from 'react';
import { View, Text, TouchableOpacity,StyleSheet ,Image,SafeAreaView,ScrollView,TextInput} from 'react-native';
import database from "@react-native-firebase/database"
export default function Companylogin({navigation}){
    const [name,setName] =useState("");
    const [cname,setCname] =useState("");
    const [address,setAddress] =useState("");
    const [number,setNumber] =useState("");
    // const [gender,setGender] =useState("");
    // const [name,setName] =useState("");
    const login =()=>{
        let user ={
            name,
            cname,
            address,
            number,
            // gender,
        }
  
        database().ref('/').child('Company').push(user)
    navigation.navigate("Cshome")
    }
    return(
        <ScrollView>
            <SafeAreaView>
        <View style={styles.inter}>
              <Image style={{ width: 380, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
            <Text style={styles.main} >Company Login</Text>
            <TextInput onChangeText={(text)=>setName(text)} style={styles.text} placeholder="Owner Name" />
            <TextInput onChangeText={(text)=>setCname(text)} style={styles.text} placeholder="Comapny Name" />
            <TextInput onChangeText={(text)=>setAddress(text)} style={styles.text} placeholder="Address" />
            <TextInput onChangeText={(text)=>setNumber(text)} style={styles.text} placeholder="Company Number" />
            {/* <TextInput onChangeText={(text)=>setGender(text)} style={styles.text} placeholder="Gender" /> */}


            <TouchableOpacity onPress={login}>
                <Text style={styles.abtn}>Comapny Login</Text>
            </TouchableOpacity>
<Text></Text>
        </View>
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inter:{
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center",
    },
    main:{
fontSize:30,
    },
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




















// import React, { useState, useEffect } from 'react';
// import { View, Text ,ScrollView,SafeAreaView,TouchableOpacity,StyleSheet,Image,TextInput} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import database from "@react-native-firebase/database"
// // import { TouchableOpacity } from 'react-native-gesture-handler';
// import Schome from "../screen/Schome"
// import Adminscreen from "../screen/Adminscreen"
// import { NavigationContainer } from '@react-navigation/native';
// export default function Studentlogin({navigation}) {
//      const [name,setName] =useState("");
//     const [cname,setCname] =useState("");
//     const [address,setAddress] =useState("");
//     const [number,setNumber] =useState("");
//         const [companyemail,setCompanyemail] =useState("");
//     const login =()=>{
 
//         auth()
//   .createUserWithEmailAndPassword(companyemail, 'SuperSecretPassword!')
  
//   .then(() => {
//     console.log('User account created & signed in!');

//         let user ={
//             name,
//                         cname,
//                         address,
//                         number,
//                         companyemail
//         }
//         database().ref('/').child('Comapany').push(user)
    
//     // navigation.replace("Schome")
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
//     }
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [users, setUsers] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(users) {
//     setUser(users);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!users) {
//     return (
//         <ScrollView>
//             <SafeAreaView>
//         <View style={styles.inter}>
//               <Image style={{ width: 380, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
//             <Text style={styles.main} >Student Login</Text>
//             <TextInput onChangeText={(text)=>setName(text)} style={styles.text} placeholder="Owner Name" />
//             <TextInput onChangeText={(text)=>setCname(text)} style={styles.text} placeholder="Comapny Name" />
//             <TextInput onChangeText={(text)=>setAddress(text)} style={styles.text} placeholder="Address" />
//             <TextInput onChangeText={(text)=>setNumber(text)} style={styles.text} placeholder="Company Number" />
//             <TextInput onChangeText={(text)=>setCompanyemail(text)} style={styles.text} placeholder="Comapny Email" />


//             <TouchableOpacity onPress={login}>
//                 <Text style={styles.abtn}>Comapny Login</Text>
//             </TouchableOpacity>
// <Text></Text>
//         </View>
//         </SafeAreaView>
//         </ScrollView>
     
//     );
//   }

//   return (
//     <View>
//       {/* <Text>Welcome {user.email}</Text> */}
//     <Schome/>
    
//     </View>
//   );
// }
// import React,{useState} from 'react';
// import { View,SafeAreaView,ScrollView, Text,TextInput, TouchableOpacity,StyleSheet ,Image} from 'react-native';
// import firestore, { firebase } from '@react-native-firebase/firestore';
// import database from "@react-native-firebase/database"
// export default function Studentlogin({navigation}){
//     const [name,setName] =useState("");
//     const [fname,setFname] =useState("");
//     const [student,setStudent] =useState("");
//     const [section,setClass] =useState("");
//     const [gender,setGender] =useState("");
//     // const [name,setName] =useState("");
  
//     const login =()=>{

//         let user ={
//             name,
//             fname,
//             student,
//             section,
//             gender,
//         }
//         navigation.navigate("Schome")
//         database().ref('/').child('Students').push(user)
    
//     }
//     return(
//         <ScrollView>
//             <SafeAreaView>
//         <View style={styles.inter}>
//               <Image style={{ width: 380, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
//             <Text style={styles.main} >Student Login</Text>
//             <TextInput onChangeText={(text)=>setName(text)} style={styles.text} placeholder="Full Name" />
//             <TextInput onChangeText={(text)=>setFname(text)} style={styles.text} placeholder="Fareed Name" />
//             <TextInput onChangeText={(text)=>setStudent(text)} style={styles.text} placeholder="Student ID" />
//             <TextInput onChangeText={(text)=>setClass(text)} style={styles.text} placeholder="Class & Section" />
//             <TextInput onChangeText={(text)=>setGender(text)} style={styles.text} placeholder="Gender" />


//             <TouchableOpacity onPress={login}>
//                 <Text style={styles.abtn}>Student Login</Text>
//             </TouchableOpacity>
// <Text></Text>
//         </View>
//         </SafeAreaView>
//         </ScrollView>
//     )
// }

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













import React, { useState, useEffect } from 'react';
import { View, Text ,ScrollView,SafeAreaView,TouchableOpacity,StyleSheet,Image,TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from "@react-native-firebase/database"
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Schome from "../screen/Schome"
import Adminscreen from "../screen/Adminscreen"
import { NavigationContainer } from '@react-navigation/native';
export default function Studentlogin() {
    const [name,setName] =useState("");
        const [fname,setFname] =useState("");
        const [student,setStudent] =useState("");
        const [section,setClass] =useState("");
        const [gender,setGender] =useState("");
        const [email,setEmail] =useState("");
    const login =()=>{
 
        auth()
  .createUserWithEmailAndPassword(email, 'SuperSecretPassword!')
  
  .then(() => {
    console.log('User account created & signed in!');

        let user ={
            name,
            fname,
            student,
            email,
            section,
            gender,
        }
        database().ref('/').child('Students').push(user)
    
    // navigation.replace("Schome")
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
        <ScrollView>
            <SafeAreaView>
        <View style={styles.inter}>
              <Image style={{ width: 380, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
            <Text style={styles.main} >Student Login</Text>
            <TextInput onChangeText={(text)=>setName(text)} style={styles.text} placeholder="Full Name" />
            <TextInput onChangeText={(text)=>setFname(text)} style={styles.text} placeholder="Fareed Name" />
            <TextInput onChangeText={(text)=>setEmail(text)} style={styles.text} placeholder="Email Address" />
            <TextInput onChangeText={(text)=>setStudent(text)} style={styles.text} placeholder="Student ID" />
            <TextInput onChangeText={(text)=>setClass(text)} style={styles.text} placeholder="Class & Section" />
            <TextInput onChangeText={(text)=>setGender(text)} style={styles.text} placeholder="Gender" />


            <TouchableOpacity onPress={login}>
                <Text style={styles.abtn}>Student Login</Text>
            </TouchableOpacity>
<Text></Text>
        </View>
        </SafeAreaView>
        </ScrollView>
     
    );
  }

  return (
    <View>
        {/* <Text>Wellcome</Text>
      <Text>{user.name}</Text> */}
      {/* <View style={styles.inter}>
                       <Image style={{ width: 380, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
          <TouchableOpacity onPress={navigation.navigate("Stdails")} >
                <Text style={styles.abtn}>Student Details</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity>
                <Text style={styles.abtn}>Company Details </Text>
            </TouchableOpacity>
     </View> */}
    <Schome/>
    <TouchableOpacity>
        <Text>Sign out</Text>
    </TouchableOpacity>
    </View>
  );
}
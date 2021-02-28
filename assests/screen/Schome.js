import React, {Component} from 'react';
import {View,Text, FlatList,StyleSheet,TouchableOpacity,Image,SafeAreaView,ScrollView} from 'react-native';
import database from "@react-native-firebase/database"
// import { Icon } from 'react-native-elements'
export default class Schome extends Component{
  constructor(props){
 super(props);
 this.state={ 
 list:[],
 } }
  componentDidMount(){
    database().ref('/Students').on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
       li.push({
        key: child.key,
        name:child.val().name,
                email:child.val().email,
                section:child.val().section,
                student:child.val().student,
                fname:child.val().fname,
                gender:child.val().gender,
                // age: child.val().age
      })
    })
   this.setState({list:li})
  })
 }
 render(){
  const  Donate=()=>{
          alert("             ***Thank you for help***")
          }
          
  return(
  <ScrollView><SafeAreaView>
 
      
    <View style={styles.inter}>
                              <Image style={{ width: 380, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
        <Text style={styles.abtn}>Student details</Text>
       <FlatList style={{width:'100%'}}
          data={this.state.list}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
             return(
              <View style={styles.hh}>
                <View style={styles.itemsList}>
                   {/* <TouchableOpacity  onPress={Donate} > */}
                   <View style={styles.blood}>
                   <Text style={styles.itemtexts}>Student ID</Text>
                   <Text style={styles.itemtextss}>{item.student}</Text>
                   </View>
                   <View>
                              <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Name : </Text>        {item.name}</Text>
               <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Father Name : </Text>    {item.fname}</Text>
                <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Email : </Text>    {item.email}</Text>
                <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Gender :  </Text>     {item.gender}</Text>
                <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Class & Section : </Text>    {item.section}</Text>
                {/* <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Student ID :  </Text>           {item.student}</Text> */}
                    </View>
                    
                    {/* <TouchableOpacity
        style={styles.btn}
       
        
      >
        <Text style={styles.btn}>Donate your Blood</Text>
      </TouchableOpacity> */}
                   {/* <Text>{item.name}  </Text> */}
                     {/* </TouchableOpacity> */}

                   {/* <Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/> */}



                </View>
                </View>   )

             }}/>
     </View>
     </SafeAreaView></ScrollView>
  )}
}


const styles = StyleSheet.create({
    inter:{
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center",
    },
    hh:{
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center",
        paddingTop:30,
        // fontSize:60,
    },
    main:{
fontSize:30,
    },
    itemtext:{
fontSize:20,

    },
    itemtexts:{
fontSize:30,
justifyContent:"center",
alignContent:"center",
textAlign:"center",
alignItems:"center",
    },
    itemtextss:{
        fontSize:35,
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center",
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
    mm:{
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        alignItems:"center",
    },
    abtn:{
        // backgroundColor:"#cad0ed",
        // fontWeight: "bold",
        borderColor:"blue",
        paddingTop:5 ,
        width:290,
        fontSize:40,
        borderRadius:3,
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        // height:40,
        // borderWidth:2,
        textAlign:"center",
        color:"blue",
            },
})


// import React, {Component} from 'react';
// import {View,Text, FlatList,StyleSheet,TouchableOpacity,Image, ScrollView, SafeAreaView} from 'react-native';
// import database from "@react-native-firebase/database"
// // import { Icon } from 'react-native-elements'
// export default class Stdails extends Component{
//   constructor(props){
//  super(props);
//  this.state={ 
//  list:[],

//  }
//  this.state={ 
//     lists:[],
   
//     }
//  }
//   componentDidMount(){
//     database().ref('/Company').on('value', (snapshots) =>{
//         var lis = []
//         snapshots.forEach((child)=>{
//          lis.push({
//           key: child.key,
//           cname:child.val().cname,
//           address:child.val().address,
//           number:child.val().number,
//         //   student:child.val().student,
//           name:child.val().name,
//         //   gender:child.val().gender,
//           // age: child.val().age
//         })
//       })
//      this.setState({lists:lis})
//     })
//     database().ref('/Students').on('value', (snapshot) =>{
//       var li = []
//       snapshot.forEach((child)=>{
//        li.push({
//         key: child.key,
//         name:child.val().name,
//         email:child.val().email,
//         section:child.val().section,
//         student:child.val().student,
//         fname:child.val().fname,
//         gender:child.val().gender,
//         // age: child.val().age
//       })
//     })
//    this.setState({list:li})
//   })
//  }
//  render(){
//   const  Donate=()=>{
//           alert("             ***Thank you for help***")
//           }
          
//   return(
//     <ScrollView>
//     <View style={styles.mm}>
//                              <Image style={{ width: 380, height: 300 }} source={require('../images/LogoMakerForBusiness_28022021122235.png')}/>
//         <Text style={styles.abtn}>Student details</Text>
//        <FlatList style={{width:'100%'}}
//           data={this.state.list}
//           keyExtractor={(item)=>item.key}
//           renderItem={({item})=>{
              
//              return(
//                 <ScrollView><SafeAreaView>

//               <View style={styles.hh}>
//                 <View style={styles.itemsList}>
//                    {/* <TouchableOpacity  onPress={Donate} > */}
//                    <View style={styles.blood}>
//                    <Text style={styles.itemtexts}>Blood Group</Text>
//                    <Text style={styles.itemtextss}>{item.blood}</Text>
//                    </View>
//                    <View>
//                    <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Name : </Text>        {item.name}</Text>
//                    <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Father Name : </Text>    {item.fname}</Text>
//                     <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Email : </Text>    {item.email}</Text>
//                     <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Gender :  </Text>     {item.gender}</Text>
//                     <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Class & Section : </Text>    {item.section}</Text>
//                     <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Student ID :  </Text>           {item.student}</Text>
//                     </View>
                    
         
//                      {/* </TouchableOpacity> */}



//                 </View>
//                 </View>  
//                 </SafeAreaView></ScrollView> )

//              }}/>
//              <Text>Company details</Text>
//              <FlatList style={{width:'100%'}}
//           data={this.state.list}
//           keyExtractor={(item)=>item.key}
//           renderItem={({item})=>{
              
//              return(
//                 <ScrollView><SafeAreaView>

//               <View style={styles.hh}>
//                 <View style={styles.itemsList}>
//                    {/* <TouchableOpacity  onPress={Donate} > */}
//                    <View style={styles.blood}>
//                    <Text style={styles.itemtexts}>Blood Group</Text>
//                    <Text style={styles.itemtextss}>{item.blood}</Text>
//                    </View>
//                    <View>
//                    <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Name : </Text>        {item.name}</Text>
//                    <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Father Name : </Text>    {item.cname}</Text>
//                     <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Email : </Text>    {item.address}</Text>
//                     <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Gender :  </Text>     {item.number}</Text>
//                     {/* <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Class & Section : </Text>    {item.section}</Text>
//                     <Text style={styles.itemtext}><Text style={{fontWeight:"bold"}}>Student ID :  </Text>           {item.student}</Text> */}
//                     </View>
                    
         
//                      {/* </TouchableOpacity> */}



//                 </View>
//                 </View>  
//                 </SafeAreaView></ScrollView> )

//              }}/>
//      </View>
//      </ScrollView>
//   )}
// }

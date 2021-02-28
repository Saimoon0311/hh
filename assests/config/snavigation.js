import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Mlogin from '../screen/Mlogin'
import Schome from '../screen/Schome'
import Studentlogin from '../screen/Studentlogin'
import Companylogin from '../screen/Companylogin'
import Adminlogin from '../screen/Adminlogin'
import Adminscreen from "../screen/Adminscreen"
import Tabscreen from '../screen/Tabscreen'
import Stdails from "../screen/Stdails"
import Textss from "../screen/Textss"
import Comdetails from "../screen/Comdetails"
import Cshome from "../screen/Cshome"




const Stack = createStackNavigator();

function Snavigation() {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="m" component={Mlogin}
        
        options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }}
        />
        <Stack.Screen name="Schome" component={Schome}  options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }} />
        <Stack.Screen name="Studentlogin" component={Studentlogin}   options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }}/>
        <Stack.Screen name="Companylogin" component={Companylogin}  options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }} />
        <Stack.Screen name="Adminlogin" component={Adminlogin}  options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }} />
        <Stack.Screen name="Adminscreen" component={Adminscreen}   options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }}/>
        <Stack.Screen name="Tabscreen" component={Tabscreen}  options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }} />
        <Stack.Screen name="Stdails" component={Stdails}  options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }} />
        <Stack.Screen name="Textss" component={Textss}   options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }}/>
        <Stack.Screen name="Comdetails" component={Comdetails}   options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }}/>
        <Stack.Screen name="Cshome" component={Cshome}  options={{
            title: 'Crescent Grammer School',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'blue',
            
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:"center",
            },
          }} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
export default Snavigation
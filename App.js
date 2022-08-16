import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import DashboardScreen from './screens/Dashboard'
import ScreenNavigater from './screens/ScreeningNavigater'
import PatientInfoScreen from './screens/PatientInfoScreen'
import Prescriptionsettings from './screens/Prescriptionsettings'
import ShowFavourites from './screens/ShowFavourites';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ShowFavourites' screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
           options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="Dashboard"
          component={DashboardScreen}
           options = {{title:'Welcome to Dashboard'}}
          />
        <Stack.Screen 
           name="Register" 
           component = {RegisterScreen} 
           options = {{title:'Welcome to register'}}
           />
        <Stack.Screen
        name = "Navigation"
        component = {ScreenNavigater}
         options = {{title:'Welcome'}} 
        >
        </Stack.Screen>
         <Stack.Screen
        name = "PatientInfo"
        component = {PatientInfoScreen}
         options = {{title:"Welcome"}} 
        >
        </Stack.Screen>
        <Stack.Screen
         name = "PrescriptionSettings"
         component = {Prescriptionsettings}
         options = {{title:"welcome"}}
        > 
        </Stack.Screen>
        <Stack.Screen
         name = "ShowFavourites"
         component = {ShowFavourites}
         options = {{title:"welcome"}}
        > 
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack















/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,TextInput} from 'react-native';
import { Card,CheckBox, Button, Icon } from '@rneui/themed' */;

/* export default function App() {
  return (
    <View style={{ flex: 1}}>
      <View style =  {{ height:'20%',backgroundColor: 'red' }} />
      <Text style= {{textAlign:"center",color:"#6D6D6D",fontSize:"12dp"}}>Welcome to {"\n"} Docisn Provider App</Text>
      <View style = {{ height:'25%', backgroundColor:'black'}}/>
      <Text style = {{color:'#000000',marginTop:5}}>Login to continue</Text>
      <Card style={{}}><TextInput style = {{outlineColor:'white'}}>id</TextInput></Card>
       <Card style={{}}><TextInput>password</TextInput></Card>
       <View style ={{flexDirection:"row",justifyContent:"space-between"}}>
        <CheckBox style = {{color:'292929'}}title="Remember me"></CheckBox>
        <Text style={{marginTop:17,marginRight:10,color:'#06A4B7'}}>Forgot password?</Text>
       </View>
       <Button title ="Login" style={{marginTop:25,height:''}}></Button>
      <View></View>
      <View style =  {{flex:1}}></View>
    </View>
  );
} */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

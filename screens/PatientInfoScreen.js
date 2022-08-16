import React from 'react'
import { StyleSheet, View,Text,TextInput,ScrollView,Image, ImageBackground} from 'react-native';
import { Card,CheckBox, Button, Icon } from '@rneui/themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PatientScreening from './PatientScreening';
import { style } from './Styles/patientScreeningStyles';
import Demographics from './Demographics';
import Lifeline from './Lifeline';
import Vitals from './Vitals';



const Tab = createMaterialTopTabNavigator();

const PatientInfoSceen = () => {
return(
    <Tab.Navigator style={{marginTop:30}}>
      <Tab.Screen style={{fontSize:15}} name="Demographics" component={Demographics} />
       <Tab.Screen name="vitals" component={Vitals}/>
      <Tab.Screen name="Lifeline" component={Lifeline}/>
    </Tab.Navigator>
)
}

export default PatientInfoSceen
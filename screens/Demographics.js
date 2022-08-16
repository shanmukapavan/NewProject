import react from 'react'
import { StyleSheet, View,Text,TextInput} from 'react-native';
import PatientScreening from './PatientScreening';
import { style } from './Styles/patientScreeningStyles';
import { Card,CheckBox, Button, Icon } from '@rneui/themed';

const Demographics = () =>{
    return(
        <View style={{flex:1,height:'100%',padding:10}}>
             <View><Text style={style.patienttext}>Patient information</Text></View>
        <View style={{ flexDirection:'row',height:'20%',width:'100%',backgroundColor:'#58C2CD',borderRadius:10,
             shadowColor: '#8CC8C3',
             shadowOffset: { width: 0, height: 2 },
             shadowOpacity: 0.5,
             shadowRadius: 2,
             elevation: 2,
             }}>
            <View style = {{justifyContent:'center',width:'40%'}}>
               <Icon name='user' type='font-awesome-5' size={70} color="#fff" ></Icon> 
            </View>
            <View style = {{justifyContent:'center'}}>
                <Text style = {style. patientDetails1}>Sandeep Pennugonda</Text>
                <Text style = {style. patientDetails1}>Patient ID : BID0025467</Text>
                <Text style = {style. patientDetails1}>Gender:Male</Text>
                <Text style = {style. patientDetails1}>Mobile:+91 9845833551</Text>
            </View>
        </View>
        <View style ={{ flexDirection:'row', justifyContent:"space-between",height:'70%',width:'100%',backgroundColor:'#fff',borderRadius:5,marginTop:25,padding:15,
             shadowColor: '#8CC8C3',
             shadowOffset: { width: 0, height: 2 },
             shadowOpacity: 0.5,
             shadowRadius: 2,
             elevation: 2,}}>
           <View >
            <Text style = {style.patientDetails}>Location</Text>
            <Text style = {style.patientDetails}>Date of Birth</Text>
            <Text style = {style.patientDetails}>Occupation</Text>
            <Text style = {style.patientDetails}>Marital Status</Text>
            <Text style = {style.patientDetails}>Blood Group</Text>
            <Text style = {style.patientDetails}>Height</Text>
            <Text style = {style.patientDetails}>Languages Known</Text>
           </View>
           <View style={{marginLeft:15,Width:'50%'}}>
            <Text style = {style.patientDetailsLeft}>Banglore</Text>
            <Text style = {style.patientDetailsLeft}>jun 20,1991</Text>
            <Text style = {style.patientDetailsLeft}>Civil Engineer</Text>
            <Text style = {style.patientDetailsLeft}>Married</Text>
            <Text style = {style.patientDetailsLeft}>AB+</Text>
            <Text style = {style.patientDetailsLeft}>5.7</Text>
            <Text style = {style.patientDetailsLeft}>English,Telugu,Hindi</Text>
        </View>
        </View>
        </View>
        
        
    )
}

export default Demographics
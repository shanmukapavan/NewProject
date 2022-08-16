import react from 'react'
import { StyleSheet, View,Text,TextInput,ScrollView} from 'react-native';
import { Card,CheckBox, Button, Icon } from '@rneui/themed';
import PatientScreening from './PatientScreening';
import { style } from './Styles/patientScreeningStyles';

const ScreeningNavigater = () =>{
    return(
    <View style = {{flex:1}}>
       <View style = {{height:'10%', width:"100%",flexDirection:"row",backgroundColor:'#00BACE',alignItems:'center',justifyContent:'space-between',marginTop:30}}>
       
       <ScrollView horizontal={true}>
    
        <View style={{height:'100%',width:80,alignItems:'center',justifyContent:'center'}}>
       <Icon name='video' type='font-awesome-5' size={25} color="white"></Icon>
       <Text style={style.text}>Video</Text></View>
        <View style={{height:'100%',width:80,alignItems:'center',justifyContent:'center'}}>
       <Icon name='user' type='font-awesome-5' size={25} color="white"></Icon>
       <Text style={style.text}>Patient info</Text></View>
        <View style={{height:'100%',width:80,alignItems:'center',justifyContent:'center'}}>
       <Icon name='notes-medical' type='font-awesome-5' size={25} color="white"></Icon>
        <Text style={style.text}>Complaint</Text></View>
        <View style={{height:'100%',width:80,alignItems:'center',justifyContent:'center'}}>
        <Icon name='file-prescription' type='font-awesome-5' size={25} color="white"></Icon>
         <Text style={style.text}>Prescribe</Text></View>
        <View style={{height:'100%',width:80,alignItems:'center',justifyContent:'center'}}>
        <Icon name='stethoscope' type='font-awesome-5' size={25} color="white"></Icon>
        <Text style={style.text}>Encounter</Text></View>
    </ScrollView>
      </View>
      <PatientScreening></PatientScreening>
    </View>
    )
}

export default ScreeningNavigater


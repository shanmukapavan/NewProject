import react from 'react'
import { StyleSheet, View,Text,TextInput} from 'react-native';
import { style } from './Styles/patientScreeningStyles';
import { Card,CheckBox, Button, Icon } from '@rneui/themed';

const Vitals = () =>{
    return(
        <View style={{flex:1,height:'100%',padding:10}}>
               <View><Text style={style.patienttext}>Patient information</Text></View>
        <View style={{
             flexDirection:'row',height:'20%',width:'100%',backgroundColor:'#58C2CD',borderRadius:10,
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
        <View style = {{ flexDirection:'row',backgroundColor:"#fff",height:'10%',width:'100%',marginTop:20,borderTopLeftRadius:10,borderTopRightRadius:10,
             shadowColor: '#8CC8C3',
             shadowOffset: { width: 0, height: 2 },
             shadowOpacity: 0.5,
             shadowRadius: 2,
             elevation: 2,}}>
            <View style = {{width:"50%",justifyContent:'center'}}>
              <Text style = {{marginBottom:5,marginLeft:20}}>BMI - 21.5</Text>
              <Text style = {{color:'#00AC06',marginLeft:20}}>NORMAL WEIGHT</Text>
            </View>
            <View style = {{flexDirection:'row',marginLeft:100,alignItems:'center',}}>
                 <Icon name='marker' type='font-awesome-5' size={20} color="black"></Icon>
                 <Text style={{marginLeft:10}}>Edit</Text> 
            </View>
        </View>
        <View style = {{backgroundColor:"#fff",height:'45%',width:'100%',marginTop:3,shadowColor: '#8CC8C3',
             shadowOffset: { width: 0, height: 2 },
             shadowOpacity: 0.5,
             shadowRadius: 2,
             elevation: 2,
             padding:10}}>
             <View style ={{ flexDirection:'row', justifyContent:"space-between",height:'50%',width:'100%',backgroundColor:'#fff'}}>
           <View style={{width:'50%'}} >
            <Text style = {style.patientDetails}>Temperature</Text>
            <Text style = {style.patientDetails}>Heart Rate</Text>
            <Text style = {style.patientDetails}>Blood Pressure</Text>
            <Text style = {style.patientDetails}>Weight</Text>
            <Text style = {style.patientDetails}>SP02</Text>
           </View>
           <View style={{marginLeft:15,Width:'50%'}}>
            <Text style = {style.patientDetailsLeft}>97 C</Text>
            <Text style = {style.patientDetailsLeft}>75 BPM</Text>
            <Text style = {style.patientDetailsLeft}>80/120 MMHG</Text>
            <Text style = {style.patientDetailsLeft}>74 kgs</Text>
            <Text style = {style.patientDetailsLeft}>96 %</Text>
        </View>
        </View>
         </View>
           <View style={{backgroundColor:'#fff',height:"7%",alignItems:'center',justifyContent:'center',borderColor:'yellow',borderBottomLeftRadius:10,borderBottomRightRadius:10}}><Text>History of Vitals</Text></View>
        </View>
    )
}

export default Vitals
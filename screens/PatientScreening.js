import React from 'react'
import { StyleSheet, View,Text,TextInput,ScrollView,Image, ImageBackground} from 'react-native';
import { Card,CheckBox, Button, Icon } from '@rneui/themed';

const PatientScreening = () => {
  return (
    <View style={{flex:1,height:'100%'}}>
          <ImageBackground
          style={{height:'100%',width:400}}
          source ={require("../assets/patientImages/joe-hepburn-qr7rfIthbvc-unsplash.jpg")}>
       </ImageBackground>
       <View style={{ height:'8%',width:"100%",flexDirection:'row',position:'absolute',bottom:50}}>
        <View style={{marginTop:10,marginLeft:7}}>
            <View style={{backgroundColor:'#7B7877',borderTopLeftRadius:5,borderTopRightRadius:5,alignItems:'center'}}><Text>17:21</Text></View>
            <Text style={{color:'white'}}>Duration</Text>
        </View>
        <View style={{ flexDirection:'row',alignItems: 'center', justifyContent:'space-around',backgroundColor:'rgba(255, 255, 255, 0.5)',width:"60%",marginLeft:25,borderTopLeftRadius:5,borderTopRightRadius:5}}>
            <Icon name='microphone' type='font-awesome-5' size={25} color="#fff"></Icon> 
            <Icon name='video' type='font-awesome-5' size={25} color="#fff"></Icon> 
            <Icon name='bars' type='font-awesome-5' size={25} color="#fff"></Icon>
            <Icon name='phone' type='font-awesome-5' size={25} color="#fff"></Icon> 
      </View>
       </View>
    </View>
  )
}

export default PatientScreening
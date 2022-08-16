import {useState}from 'react'
import { StyleSheet, View,Text,TextInput,Switch} from 'react-native';
import { Card,CheckBox, Button, Icon } from '@rneui/themed';
import { style } from './Styles/patientScreeningStyles';

const Prescriptionsettings = () =>{
    const [isEnabled, setIsEnabled] =  useState(true)
    const [text,setText] = useState('press the switch');

    const toggleSwitch = () =>{
        if(isEnabled){
            setText('inactive')        
        }
        else{
            setText('Active')
        }
        setIsEnabled(previousState =>!previousState)
    }
    return(
        <View style = {{flex:1,height:'100%',padding:10,marginTop:40,justifyContent:'center'}}>
      <View style = {{backgroundColor:'#fff',borderTopLeftRadius:5,borderTopRightRadius:5}}>
        <View style = {{ marginTop:20,marginBottom:15,alignItems:'center',justifyContent:'center'}}><Text>MANAGE PRESCRIPTION SETTINGS</Text></View>
        <View style = {{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#fff'}}>
            <Text>choose your Options</Text>
            <Text style = {style.Prescriptionsetting}>Select all</Text>
            <Text style = {style.Prescriptionsetting}>Deselect all</Text>
        </View>
        <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:30,paddingRight:20,paddingLeft:20}}>
            <Text style = {{color:'#656565'}}>Drug Name</Text>
            <Switch></Switch>
        </View>
        <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:30,paddingRight:20,paddingLeft:20,color:'#656565'}}>
            <Text style = {{color:'#656565'}}>Dosage Route</Text>
            <Switch></Switch>
        </View>
        <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:30,paddingRight:20,paddingLeft:20}}>
            <Text style = {{color:'#656565'}}>Frequency</Text>
            <Switch></Switch>
        </View>
        <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:30,paddingRight:20,paddingLeft:20}}>
            <Text style = {{color:'#656565'}}>Duration</Text>
            <Switch></Switch>
        </View>
        <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:30,paddingRight:20,paddingLeft:20}}>
            <Text style = {{color:'#656565'}}>Instruction</Text>
            <Switch></Switch>
        </View>
        <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:30,marginBottom:15,paddingRight:20,paddingLeft:20}}>
            <Text style = {{color:'#656565'}}>Allow refills</Text>
            <Switch></Switch>
        </View>
        </View>
        <View style = {{flexDirection:'row',marginTop:2,justifyContent:'center',height:'8%',backgroundColor:'#fff',alignItems:'center',
        borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
        <View style = {{ marginLeft:10,width:'25%'}}>
            <Button  color = "#0C7C87">
                <Text style = {{color:'#FFFFFF'}}>
                    SUBMIT
                </Text>
            </Button>
        </View>
        <View style = {{marginLeft:15,width:'25%'}}>
        <Button title = "CANCEL" color = '#E5E5E5'>
            <Text>
                CANCEL
            </Text>
        </Button>
        </View>    
        </View>
     </View>
    )
}

export default Prescriptionsettings
import react,{useState} from 'react'
import { StyleSheet, View,Text,TextInput} from 'react-native';
import { Card,CheckBox, Button, Icon } from '@rneui/themed';

const ReschedulePermission = () =>{
    const [title,settitle] = useState('RESCHEDULE APPOINTMENT')
    const [textMessage,setTextMessage] = useState('Are you sure you want to RESCHEDULE Sandeep Pennugonda appointment on 25/08/2022 at time 11:30')
    const [revertMessage,setRevertMesage] = useState('you wont be able to revert this action later!')
    return(
        <View style = {{flex:1,padding:10,justifyContent:'center'}}>
        <View style= {{backgroundColor:'#fff',marginTop:50,alignItems:'center',height:'35%',borderRadius:10}}>
            <Text style = {styles.title}>
            {title}
            </Text>
        <View style= {{marginTop:40}}>
            <Text style = {{padding:10,fontSize:15}}>
                {textMessage}
            </Text>
       </View>
       <View style= {{borderBottomColor:'#D5D5D5',borderBottomWidth:3,width:'100%',alignItems:'center'}}>
        <Text style= {{marginTop:15,color:'#AEAEAE',marginBottom:25}}>
            {revertMessage}
        </Text>
       </View>
       <View style = {{flexDirection:'row',padding:10,justifyContent:'center'}}>
       <Button
              onPress={() => {
                onLoginClick();
              }}
              title={'DISMISS'}
              titleStyle={{fontSize: 14, fontFamily: 'Roboto-Bold',color:'black'}}
              buttonStyle={{
                marginLeft:15,
                height: 45,
                width: '70%',
                borderRadius: 5,
                backgroundColor:'#E5E5E5'
              }}></Button>
               <Button
              onPress={() => {
                onLoginClick();
              }}
              title={'YES'}
              titleStyle={{fontSize: 14, fontFamily: 'Roboto-Bold'}}
              buttonStyle={{
                backgroundColor:'#14636A',
                height: 45,
                width: '70%',
                borderRadius: 5,
              }}></Button>
       </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:15,
        marginTop:20

    }
})

export default ReschedulePermission



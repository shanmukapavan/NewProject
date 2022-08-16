import react from 'react'
import { StyleSheet, View,Text,TextInput} from 'react-native';
import { Card,CheckBox, Button, Icon } from '@rneui/themed';

const Register = () => {
  return(
    <View style = {{flex:1}}>
        <View style = {{height:'40%',backgroundColor:'black'}}></View>
        <View><Text style = {{color:'black',textAlign:'center',fontSize:20}}>REGISTER</Text></View>
        <Card><TextInput>First Name</TextInput></Card>
        <Card><TextInput>Last Name</TextInput></Card>
        <Card><TextInput>Email</TextInput></Card>
        <Card><TextInput>Mobile</TextInput></Card>
      <View style = {{flexDirection:'row'}}>
        <Card
         style = {{}}><TextInput style = {{width:35}}>Otp</TextInput>
        </Card>
         <Button color = "#FFBB00" title = "Get OTP" style={{marginTop:20,justifyContent:'space-between'}}></Button>
           <Text style = {{marginTop:30,fontSize:13,marginLeft:10}}>Did'nt recieve OTP</Text>
          <Text style={{color : "#0071FF",marginTop:30,fontSize:13,marginLeft:10}}>Resend</Text>
      </View>
      <View style = {{flexDirection:'row'}}>
        <Button style = {{width:200,padding:20}}title = "SUBMIT"></Button>
        <Button style = {{width:180,padding:20}}title = "RESET"></Button>
      </View>
   </View>
  )
}

export default Register
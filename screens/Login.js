import { StyleSheet, View,Text,TextInput} from 'react-native';
import { Card,CheckBox, Button, Icon } from '@rneui/themed';


export default function Login({navigation}){
     return (
    <View style={{ flex: 1}}>
      <View style =  {{ height:'20%',backgroundColor: 'red' }} />
      <Text style= {{textAlign:"center",color:"#6D6D6D"}}>Welcome to {"\n"} Docisn Provider App</Text>
      <View style = {{ height:'25%', backgroundColor:'black'}}/>
      <Text style = {{color:'#000000',marginTop:5}}>Login to continue</Text>
      <Card style={{}}><TextInput style = {{outlineColor:'white'}}>id</TextInput></Card>
       <Card style={{}}><TextInput>password</TextInput></Card>
       <View style ={{flexDirection:"row",justifyContent:"space-between"}}>
        <CheckBox style = {{color:'292929'}}title="Remember me"></CheckBox>
        <Text style={{marginTop:17,marginRight:10,color:'#06A4B7'}}>Forgot password?</Text>
       </View>
       <Button onPress={() => navigation.navigate('Dashboard')} title ="Login" style={{marginTop:25}}></Button>
      {/* <View style =  {{ height:'45%', backgroundColor:'blue'}}/> */}
      <View><Text onPress={() =>navigation.navigate('Register') }style ={{color:'#06A4B7',textAlign:'center',marginTop:10}}>Don't have account?</Text></View>
      <View style =  {{flex:1}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});  

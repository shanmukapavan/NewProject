import react from 'react'
import { StyleSheet, View,Text,TextInput} from 'react-native';
import { Card,CheckBox,Button,Icon } from '@rneui/themed';
import { style } from './Styles/patientScreeningStyles';

const ShowFavourites = () =>{
    return(
        <View style = {{flex:1,marginTop:50,padding:10}}>
            <View style = {{backgroundColor:'#fff',height:'100%'}}>
            <View style = {{ flexDirection:'row',height:'10%',justifyContent:'center',borderTopLeftRadius:5,borderTopRightRadius:5}}>
            <Text style = {{marginTop:10,marginLeft:30}} >MY FAVORITES</Text>
            <Icon name='xmark' type='font-awesome-5' size={15} style = {{marginLeft:50,marginTop:10}}></Icon>
            </View>
            <View style = {{height:'10%',padding:10}}>
              <TextInput style = {{
              backgroundColor:'#F8F8F8',
              height:'70%',
              borderTopLeftRadius:7,
              borderTopRightRadius:7,
              borderBottomLeftRadius:7,
              borderBottomRightRadius:7
              }}
              placeholder ="Search your favorites"
              ></TextInput>
            </View>
            <View style = {{height:'70%',padding:10}}>
                <View style = {styles.MedicineCont}>
                    <Text style = {{fontSize:15}}>Fasting Blood sugar {"\n"}<Text style = {styles.Per}>Per Oral - After food</Text></Text>
                    <View>
                    <Icon name='check' type='font-awesome-5' size={15}></Icon> 
                    </View>
                </View>
                <View style = {styles.MedicineCont}>
                    <Text>Fasting Blood sugar {"\n"}<Text style = {styles.Per}>Per Oral - After food</Text></Text>
                    <View>
                       <Icon name='check' type='font-awesome-5' size={15}></Icon> 
                    </View>
                </View>  
                <View style = {styles.MedicineCont}>
                    <Text>Fasting Blood sugar {"\n"}<Text style = {styles.Per}>Per Oral - After food</Text></Text>
                    <View>
                       <Icon name='check' type='font-awesome-5' size={15}></Icon> 
                    </View>
                </View>  
                <View style = {styles.MedicineCont}>
                    <Text>Fasting Blood sugar {"\n"}<Text style = {styles.Per}>Per Oral - After food</Text></Text>
                    <View>
                      <Icon name='check' type='font-awesome-5' size={15}></Icon> 
                    </View>
                </View>  
                <View style = {styles.MedicineCont}>
                    <Text>Fasting Blood sugar {"\n"}<Text style = {styles.Per}>Per Oral - After food</Text></Text>
                    <View>
                        <Icon name='check' type='font-awesome-5' size={15}></Icon> 
                    </View>
                </View>  
                <View style = {styles.MedicineCont}>
                    <Text>Fasting Blood sugar {"\n"}<Text style = {styles.Per}>Per Oral - After food</Text></Text>
                    <View>
                       <Icon name='check' type='font-awesome-5' size={15}></Icon> 
                    </View>
                </View>   
            </View>
            <View style = {{ flexDirection:'row', justifyContent:'center',borderBottomLeftRadius:10,borderBottomRightRadius:10,alignItems:'center'}}>
            <View >
             <Button color = "#14636A"><Text style = {{color:'#fff'}}>ADD TO PRESCRIPTION</Text></Button>
            </View>
            <View style = {{marginLeft:10}}>
             <Button color = "#F9F8F8"><Text style = {{color:'#000'}}>CLEAR ALL</Text></Button>
             </View>
            </View>
         </View> 
       </View>
    )
}

 const styles  = StyleSheet.create({
    MedicineCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor: '#F8F8F8',
        borderBottomWidth: 2,
        height:'14%',
        marginTop:10
    },

    Per : {
    color:'#747474',
    fontSize:13
    }
 })

export default ShowFavourites
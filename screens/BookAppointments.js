import react, { useState, useSelector } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import { Card, CheckBox, Button, Icon } from '@rneui/themed';
import { style } from './Styles/patientScreeningStyles';
import moment from 'moment';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React from 'react';

const BookAppointments = () => {
    // const [bookDetails] = useSelector()
    const [appointmentDetails, setAppointmentsDetails] = React.useState([
        {
            patientName: '',
            mobileNumber: '',
            gender: '',
            email: '',
            appointmentDate: '',
            appointmentTime: '',
            appointmentType: '',
            symptoms: ''
        }
    ])
    const [patientName, setText] = useState();
    const [number, onChangeNumber] = useState();
    const [email, onChangeEmail] = useState('');
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(
        new moment().format(''),
    );
    //   const [datePicker,setDatePicker]=React.useState(false)
    const [openCalender, setOpenCalender] = useState(false);
    const [time, setTime] = useState('');
    const onSelectedDate = (date) => {
        setDate(date);
        // setDatePicker(false);
    }
    getValues = () => {
        setAppointmentsDetails({
            ...appointmentDetails,
            appointmentDate: date,
        })
        console.log("PatientName", appointmentDetails);
        // console.log("date", date)
        // console.log(this.onChangeNumber.useState);
        // console.log(this.onChangeEmail.useState);
        let array = ['']
        array.push(
            {
                patientName: appointmentDetails.patientName,
                mobNumber: appointmentDetails.mobileNumber,
                gender: appointmentDetails.gender,
                email: appointmentDetails.email,
                appDate: appointmentDetails.appointmentDate,
                appTime: appointmentDetails.appointmentTime,
                appType: appointmentDetails.appointmentType
            }
        )
        console.log("ARRAYY", array)
    }

    const Gender = [
        { label: 'Select', value: '1' },
        { label: 'Male', value: '2' },
        { label: 'Female', value: '3' },
    ];

    const AppointmentType = [
        { label: 'clinic walk in', value: '1' }
    ]
    return (
        <View style={{ flex: 1, marginTop: 50, height: '100%', backgroundColor: '#FFFFFF' }}>
            <ScrollView>
                <Text style={styles.label}>Patient Name</Text>
                <TextInput
                    style={{
                        height: '11%', backgroundColor: '#fff', shadowColor: '#00000029',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 4,
                        elevation: 5,
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 10
                    }}
                    // value={patientName}
                    onChangeText={text => setAppointmentsDetails({
                        ...appointmentDetails,
                        patientName: text
                    })}
                >
                </TextInput>
                <Text style={styles.label}>Gender</Text>
                <Dropdown style={styles.dropdown}
                    placeholder="Select item"
                    onChange={i => setAppointmentsDetails({
                        ...appointmentDetails,
                        gender: i.label,
                    })}
                    labelField="label"
                    valueField="value"
                    data={Gender}

                >
                </Dropdown>
                <Text style={styles.label}>Mobile Number</Text>

                <TextInput
                    style={{
                        height: '11%', backgroundColor: '#fff', shadowColor: '#00000029',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 4,
                        elevation: 5,
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 10
                    }}
                    // value={number}
                    onChangeText={newNumber => setAppointmentsDetails({
                        ...appointmentDetails,
                        mobileNumber: newNumber
                    })}
                    keyboardType='numeric'
                >
                </TextInput>

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={{
                        height: '11%', backgroundColor: '#fff', shadowColor: '#00000029',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 4,
                        elevation: 5,
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 10
                    }}
                    // value={email}
                    onChangeText={email => setAppointmentsDetails({
                        ...appointmentDetails,
                        email: email,
                    })}
                >
                </TextInput>
                <Text style={styles.label}>Appointment Date  </Text>
                {/* <DateTimePicker
          mode="date"
          placeholderText="DD/MM/YY"
          style={{
            width: '100%',
            height: '100%',
            fontWeight: 'bold',
            color: colors.lightText,
            elevation: 2,
          }}
          dateFormat="shortdate"
          display="calendar"
          value={selectedDate === '' ? new Date() : new Date(selectedDate)}
          // minimumDate={new Date()}
          onChange={(event, date) => {
            onValueChange(date);
          }}></DateTimePicker> */}

                <DateTimePicker
                    style={{
                        height: '11%', backgroundColor: '#fff', shadowColor: '#00000029',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 4,
                        elevation: 5,
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 10
                    }}
                    value={date}
                    mode="date"
                    onChange={(event, date) => onSelectedDate(date)}
                    display="default"
                >
                </DateTimePicker>
                <Text style={styles.label}>Appointment Time </Text>
                <TextInput
                    style={{
                        height: '11%', backgroundColor: '#fff', shadowColor: '#00000029',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 4,
                        elevation: 5,
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 10
                    }}
                    //  value = {time}
                    onChangeText={newTime => setAppointmentsDetails({
                        ...appointmentDetails,
                        appointmentTime: newTime,
                    })}
                >
                </TextInput>

                <Text style={styles.label}>Appointment type</Text>

                <Dropdown style={styles.dropdown}
                    onChange={i => setAppointmentsDetails({
                        ...appointmentDetails,
                        appointmentType: i.label,
                    })}
                    data={AppointmentType}
                    labelField="label"
                    valueField="value"
                >
                </Dropdown>

                <Text style={styles.label}>Symptoms</Text>
                <Dropdown style={styles.dropdown}
                >
                </Dropdown>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 20 }}>
                    <View style={{ width: '50%' }}>
                        <Button
                            //   disabled={patientName!== '' && email!== '' ? number!==''&& false : true} 
                            title="SUBMIT" color="#0C7C87"
                            onPress={() => {
                                getValues();
                            }}
                            titleStyle={{
                                fontSize: 15,
                                fontWeight: 'bold',
                            }}
                        >
                        </Button>
                    </View>
                    <View style={{ width: '50%', marginLeft: 20 }}>
                        <Button title="CANCEL" color='#E5E5E5'
                            titleStyle={{
                                color: 'black',
                                fontSize: 15,
                                fontWeight: 'bold',
                            }}
                        >
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    dropdown: {
        height: '11%',
        backgroundColor: '#fff',
        shadowColor: '#00000029',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
    },

    label: {
        marginLeft: 15,
        color: '#9C9B9B',
        marginTop: 10,
        marginBottom: 5
    }

})

export default BookAppointments



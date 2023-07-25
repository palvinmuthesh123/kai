import React, { useEffect ,useState} from "react";
import { SafeAreaView, StatusBar, FlatList, Image, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";

import Back from '../../assets/svg/register/back.svg'
import Patient from '../../assets/svg/Clinic/Patient.svg'
import Chat from '../../assets/svg/Clinic/Chat.svg'
import { communicationMode, docProfile } from "../../row/data";
import CustomButton from "../../component/Button/CustomButton";

export default DoctorDetails = (props) => {

    const [select, setSelect] = useState()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <TouchableOpacity 
                    onPress={() => props.navigation.goBack()}
                    style={styler.header}>
                <Back />
            </TouchableOpacity>
            <ScrollView style={styler.container}>
                <View style={styler.proPart}>
                    <Image 
                        style={{borderRadius:100,height:120,width:120}}
                        source={require('../../assets/images/Doctor.png')}/>
                    <Text style={styler.name}>Dr. Astrid Helena</Text>
                    <Text style={{marginTop:5,fontSize:FONT_SIZE.small}}>Cardiologist</Text>
                    <View style={{marginVertical:'5%',height:HEIGHT/100*14}}>
                    <FlatList
                            style={{}}
                            data={docProfile}
                            horizontal={true}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <View style={styler.proBox}>
                            <ImageBackground
                                    source={require('../../assets/images/oval.png')}
                                    style={{height:60,width:43,alignItems:"center",paddingTop:10}}>
                                {item.image}
                            </ImageBackground>
                            <View style={{alignItems:"center"}}>
                                <Text style={styler.thouText}>{item.name}</Text>
                                <Text style={styler.patText}>{item.content}</Text>
                            </View>
                        </View>}/>
                    </View>
                </View>

                <View style={{marginTop:'5%'}}>
                    <Text style={styler.name}>About</Text>
                    <Text style={[styler.patText,{marginTop:10}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
                </View>

                <View style={{marginTop:'5%'}}>
                    <Text style={styler.name}>Working Time</Text>
                    <Text style={[styler.patText,{marginTop:10}]}>Mon - Sat (08:30 AM - 09:00 PM)</Text>
                </View>
                <View style={{marginTop:'5%'}}>
                    <Text style={styler.name}>Communication</Text>
                    <View style={{marginVertical:10}}>
                    <FlatList
                            style={{}}
                            data={communicationMode}
                            // horizontal={true}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <TouchableOpacity 
                                 onPress={() => setSelect(index)}
                                style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                            <View style={styler.mesBox}>
                                {item.image}
                            </View>
                            <View style={{marginLeft:10,}}>
                                <Text style={[styler.name,{fontSize:14}]}>{item.name}</Text>
                                <Text style={[styler.patText,{marginTop:5}]}>{item.content}</Text>
                            </View>
                        </TouchableOpacity>}/>
                    </View>
                </View>
               
                <View style={{marginVertical:'5%'}}>
                    <CustomButton title={'Book Appointment'} onPress={() => props.navigation.push('NewAppointment')}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    container: {
        height: HEIGHT / 100 * 92,
        width: WIDTH,
        paddingHorizontal: WIDTH / 100 * 5,
    },
    mesBox:{
        height:60,
        width:60,
        borderWidth:3,
        borderColor:COLOR.blue,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"
    },
    header: {
        height: HEIGHT / 100 * 8,
        width: WIDTH,
        justifyContent: 'center',
        paddingHorizontal: WIDTH / 100 * 7,
    },
    thouText:{
        // textAlign:"center",
        color:"black",
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.medium
    },
    patText:{
        // textAlign:"center",
        color:"#464646",
        fontSize:FONT_SIZE.small,
    },
    proBox:{
        height:100,
        width:80,
        borderRadius:10,
        backgroundColor:COLOR.white,
        alignItems:"center",
        elevation:3,
        marginLeft:3,
        marginBottom:3,
        marginRight:15
    },
    name:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
    },
    proPart:{
        height: HEIGHT / 100 * 41,
        width: '100%',
        borderColor:"red",
        justifyContent: 'center',
        alignItems: 'center',
    },
}) 
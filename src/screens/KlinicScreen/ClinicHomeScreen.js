import React, { useEffect ,useState} from "react";
import { SafeAreaView, StatusBar, FlatList, Image, View, Text, TextInput, TouchableOpacity,ScrollView, StyleSheet, ImageBackground } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import AppBarHeder from "../../component/header/AppBarHeder";

import Filter from '../../assets/svg/dashboard/Filter.svg'
import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Doctors from '../../assets/svg/Clinic/Doctors.svg'
import Ortho from '../../assets/svg/Clinic/Ortho.svg'
import Chat from '../../assets/svg/profile/Chat.svg'
import Issue1 from '../../assets/svg/Clinic/issue1.svg'
import { clinicSpecialization, issuesList } from "../../row/data";
import JobFooter from "../../component/Bottom/JobFooter";

export default ClinicHomeScreen = (props) => {
    
    const [modalVisible,setModalVisible] =useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.primary} />
            <AppBarHeder 
                    name={'Hi Siyona'} 
                    location={true} 
                    onClick={() => props.navigation.push('NotificationScreen')}
                    address={'San Francisco, CA'}/>
            <View style={styler.container}>
                <View style={styles.searchView}>
                    <View style={styles.searchBar}>
                        <WFSearch />
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'white'}
                            placeholder="Find a clinician or health problem"
                        />
                    </View>
                    <TouchableOpacity 
                            onPress={() => props.navigation.push('ClinicFilter')}
                            >
                        <ImageBackground
                            style={{ height: 35, width: 44, alignItems: 'center', justifyContent: "center",marginLeft:10, }}
                            source={require('../../assets/images/fillBox.png')}
                        >
                            <Filter />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{width:'100%',height:'100%',paddingVertical:'6%',}}>
                    <ImageBackground
                            style={styler.imgBack}
                            imageStyle={{borderRadius:10}}
                            source={require('../../assets/images/Background.png')}
                        >
                        <View style={styler.imgView}>
                            <View style={{width:'62%',justifyContent:'space-between',height:'95%'}}>
                                <Text style={styler.bannerText1}>GET HEALTHCARE TREATMENT AT EASE</Text>
                                <Text style={styler.bannerText2}>Book your next online appointment</Text>
                                <TouchableOpacity 
                                        onPress={() =>props.navigation.push('NewAppointment')}
                                        style={styler.appBox}>
                                    <View style={{width:'60%'}}>
                                        <Text  style={styler.bannerText3}>Book your first  Consultation </Text>
                                    </View>
                                    <View  style={{width:'30%'}}>
                                        <View  style={styler.freeBox}>
                                            <Text style={{color:'white',fontSize:10,fontStyle:'italic'}}>Free</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:'40%',marginTop:10}}>
                                <Doctors/>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styler.titleBar}>
                        <Text style={styler.title}>Top Specialization</Text>
                        <Text style={styler.seeall}>See all</Text>
                    </View>

                    <View style={{width:'100%',}}>
                    <FlatList
                            style={{}}
                            data={clinicSpecialization}
                            horizontal={true}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <TouchableOpacity
                                onPress={() => props.navigation.push('DoctorList')}
                                style={styler.specialBox}>
                            <Text style={{color:'black',fontWeight:'600'}}>{item.name}</Text>
                            {item.image}
                        </TouchableOpacity>}/>
                    </View>

                    <View style={{marginVertical:'7%'}}>
                        <Text style={[styler.title,{color:COLOR.green,fontWeight:'500'}]}>Not Feeling Well ?</Text>
                        <Text style={{width:'70%',color:'#707070',marginTop:5}}>Treat common symptoms instantly via video consultation.</Text>
                    </View>

                    <View style={{width:'100%',}}>
                    <FlatList
                            style={{}}
                            data={issuesList}
                            // horizontal={true}
                            numColumns={4}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <TouchableOpacity 
                                onPress={() => props.navigation.push('DoctorList')}
                                style={{width:'26%',marginBottom:'6%',}}>
                            <View style={styler.injuryBox}>
                                {item.image}
                            </View>
                            <Text style={{color:'black',textAlign:'center', width:65,}}>{item.name}</Text>
                        </TouchableOpacity>}/>
                    </View>

                </ScrollView>
                <TouchableOpacity 
                    onPress={()=> props.navigation.push('ChatList')}
                    style={styles.chatView}>
                <ImageBackground 
                    source={require('../../assets/icons/Bg.png')}
                    style={{height:70,width:70,alignItems:'center',justifyContent:"center"}}>
                        <View style={{top:-3}}><Chat/></View>
                    </ImageBackground>
            </TouchableOpacity>
            </View>

            

            <JobFooter
                    sport={true}
                    clinic={true}
                    onClick={() =>setModalVisible(!modalVisible)} 
                    visible={modalVisible}
                    prop={props}
                    onHome={() =>props.navigation.push('ClinicHomeScreen')}
                    onSecond={()=>props.navigation.push('TopSpecialist')}
                    onFourth={()=>props.navigation.push('AppointmentTabbar')}
                    onProfile={()=>props.navigation.push('ProfileScreen')}/>
        </SafeAreaView>
    )}

const styler = StyleSheet.create({
    container: {
        height: HEIGHT / 100 * 85,
        width:WIDTH,
        paddingHorizontal:WIDTH/100*5,
        paddingVertical:HEIGHT/100*2
        // alignItems: 'center',
    },
    title:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium
    },
    injuryBox:{
        height:65,
        width:65,
        borderRadius:10,
        backgroundColor:COLOR.blue,
        alignItems:"center",
        justifyContent:"center",
        marginRight:10,
    },
    specialBox:{
        height:120,
        width:98,
        borderRadius:10,
        backgroundColor:COLOR.white,
        alignItems:"center",
        justifyContent:'space-evenly',
        elevation:3,
        marginLeft:3,
        marginBottom:3,
        marginRight:10
    },
    seeall:{
        color:COLOR.blue,
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular
    },
    input: {
        fontSize: 13,
        top: 3,
    },
    imgBack:{
        height: 170, 
        width: '100%',
    },
    imgView:{
        width:'94%',
        height:'85%',
        marginHorizontal:'3%',
        marginVertical:'4%',
        flexDirection:"row",
        alignItems:"center",
    },
    freeBox:{
        width:35,
        height:35,
        borderRadius:120,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#E8311A",
        transform: [{ scaleX: 1.8 }]
    },
    bannerText1:{
        color:COLOR.white,
        fontSize:FONT_SIZE.compact,
        // lineHeight:23,
        fontWeight:FONT_WEIGHT.semibold
    },
    bannerText2:{
        color:COLOR.white,
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular
    },
    bannerText3:{
        color:COLOR.blue,
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.medium
    },
    appBox:{
        width:'100%',
        height:50,
        backgroundColor:COLOR.white,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    titleBar:{
        width:'100%',
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        marginVertical:'6%',
    },
}) 
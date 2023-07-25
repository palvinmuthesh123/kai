import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';

import Notification from '../../assets/svg/dashboard/notify.svg'
import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Green from '../../assets/svg/Clinic/Green.svg'
import { clinicChat } from "../../row/data";
import JobFooter from "../../component/Bottom/JobFooter";

export default ChatList = (props) => {

    const [modalVisible,setModalVisible] =useState(false)

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='transparent' />
            <View style={styler.header}>
                <Text style={styler.heading}>Message</Text>
                <TouchableOpacity onPress={() =>props.navigation.push('NotificationScreen')}>
                    <Notification />
                </TouchableOpacity>
            </View>
            <View style={styler.container}>
                <View style={[styles.searchBar, { width: WIDTH / 100 * 90, }]}>
                    <WFSearch />
                    <TextInput
                        style={[styles.input, { fontSize: 13, top: 3 }]}
                        placeholderTextColor={'white'}
                        placeholder="Find a clinician or health problem"
                    />
                </View>
                <View style={{ paddingVertical: '5%' }}>
                <FlatList
                        data={clinicChat}
                        // horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                    <TouchableOpacity 
                            onPress={() => props.navigation.push('DrChatScreen')}
                            style={styles.messageBox}>
                        <View style={{ flexDirection: 'row', alignItems: "center", paddingVertical: 5, }}>
                            <Image
                                style={{ borderRadius: 100, height: 60, width: 60, top:5}}
                                source={(item.image)} />
                                {item.status == 'on' ? 
                                <View style={{right:15,top:18}}>
                                    <Green />
                                </View> : null }
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styler.name}>{item.name}</Text>
                                <Text style={{ marginTop: 5, fontSize: FONT_SIZE.small }}>{item.message}</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'flex-end',}}>
                            <Text style={{color:'#464646',fontSize:11,}}>{item.time}</Text>
                            <View style={styles.countBox}>
                                <Text style={{color:'white',fontSize:11,}}>{item.count}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>}/>
                </View>
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
    )
}

const styler = StyleSheet.create({
    header: {
        width: WIDTH,
        height: HEIGHT / 100 * 8,
        paddingHorizontal: WIDTH / 100 * 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    heading: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.semibold
    },
    name:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
    },
    container: {
        height: HEIGHT / 100 * 85,
        width: WIDTH,
        paddingHorizontal: WIDTH / 100 * 5,
        paddingVertical: HEIGHT / 100 * 2
        // alignItems: 'center',
    },

}) 
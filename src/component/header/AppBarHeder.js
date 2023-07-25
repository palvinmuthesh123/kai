import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


import  Menu from '../../assets/svg/dashboard/menu.svg'
import  Search from '../../assets/svg/dashboard/srch.svg'
import  Notification from '../../assets/svg/dashboard/notify.svg'
import Location from '../../assets/svg/Clinic/Location.svg'
import Setting from '../../assets/svg/profile/Setting.svg'
import Tick from '../../assets/svg/profile/tick.svg'

const AppBarHeder = props => {
    return (
        <SafeAreaView style={styles.appbar}>
            <TouchableOpacity
                style={[styles.mains]}
                onPress={() => {
                    try {
                        props.onPress();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <Text style={styles.title}>{props.name}</Text>

                {props.location ? 
                <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Location/>
                    <Text style={{fontSize:12,color:"#AAB2B7",marginLeft:7}}>{props.address}</Text>
                </View>
                :
                <Text style={styles.title1}>KIA Sports Training</Text>}

            </TouchableOpacity>

            <View style={styles.titleBar}>
            {/* <Text
                style={styles.title}>
                {props.title}
            </Text> */}
            </View>

            {props.tick ?
            <View
            style={styles.touch}>
            <TouchableOpacity onPress={() => props.onClick()} >
                <Tick />
            </TouchableOpacity>
            </View>:
            <View
                style={styles.touch}>
                
                <TouchableOpacity onPress={() => props.onClick()} >
                {props.back ?<Setting/> :<Notification/>}
                </TouchableOpacity>
            </View>}
        </SafeAreaView>
    );
};

export default AppBarHeder;

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('window').width,
        height: HEIGHT / 100 * 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: WIDTH/100*5,
        flexDirection: 'row',
        // paddingVertical: 20,

    },
    mains: {
        width: WIDTH / 100 * 50,
        alignItems: 'flex-start',
        justifyContent:'space-between',
        height: HEIGHT / 100 * 6,
        top:5
    },
    titleBar:{
        width: WIDTH / 100 * 30,
        alignItems: 'center',
        justifyContent:'center',
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.medium,
        fontWeight: FONT_WEIGHT.regular,
    },
    title1:{
        color: COLOR.blue,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.regular,
    },
    touch: {
        width: WIDTH / 100 * 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:"center"
    },
    highlitetext: {
        color: '#066FF9',
        alignSelf: 'center',
    },
    gradientContainer: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grad: {
        backgroundColor: '#ffffff',
        height: 44,
        width: 44,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

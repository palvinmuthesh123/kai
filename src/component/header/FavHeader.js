import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


import  Menu from '../../assets/svg/dashboard/menu.svg'
import  Search from '../../assets/svg/dashboard/srch.svg'
import  Notification from '../../assets/svg/dashboard/notify.svg'
import Back from '../../assets/svg/register/back.svg'
import Share from '../../assets/svg/athlete/Share.svg'
import Fav from '../../assets/svg/filter/Fav.svg'
import Setting from '../../assets/svg/profile/Setting.svg'
import Tick from '../../assets/svg/profile/tick.svg'

const FavHeader = props => {
    return (
        <SafeAreaView style={[styles.appbar,props.large? {height: HEIGHT / 100 * 10,}:{}]}>
            <TouchableOpacity
                style={[styles.mains]}
                onPress={() => {
                    try {
                        props.onPress();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <Back/>

            </TouchableOpacity>

            <View style={styles.titleBar}>
            <Text
                style={[styles.title,{textAlign:'center'}]}>
                {props.title}
            </Text>
            </View>
            {props.nothing ?
            <View
            style={styles.touch}>
            </View>
            :
            <View
            style={styles.touch}>
            <TouchableOpacity onPress={() => props.onClick()} >
                <Fav />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.onClick()} >
                <Share />
            </TouchableOpacity>
            </View>}
        </SafeAreaView>
    );
};

export default FavHeader;

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
        width: WIDTH / 100 * 10,
        alignItems: 'flex-start',
        justifyContent:'center',
    },
    titleBar:{
        width: WIDTH / 100 * 65,
        alignItems: 'center',
        justifyContent:'center',
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.large,
        fontWeight: FONT_WEIGHT.medium,
    
    },
    title1:{
        color: COLOR.green,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.medium,
    },
    touch: {
        width: WIDTH / 100 * 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:"space-between"
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

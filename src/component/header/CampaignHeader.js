import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


import  Menu from '../../assets/svg/dashboard/menu.svg'
import  Search from '../../assets/svg/dashboard/srch.svg'
import  Notification from '../../assets/svg/dashboard/notify.svg'
import Add from '../../assets/svg/athlete/Add.svg'
const CampaignHeader = props => {
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
                {props.title ? <Text style={[styles.title,{fontSize: FONT_SIZE.large,}]}>{props.name}</Text>
                :
                <Text style={styles.title}>{props.name}</Text>}
            </TouchableOpacity>

            <View style={styles.titleBar}>
            {/* <Text
                style={styles.title}>
                {props.title}
            </Text> */}
            </View>

           {props.nothing ?
           null:
            <View
                style={styles.touch}>
                <TouchableOpacity onPress={() => props.onAdd()}>
                    <Add/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.onNote()}>
                    <Notification/>
                </TouchableOpacity>
            </View>}
        </SafeAreaView>
    );
};

export default CampaignHeader;

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('window').width,
        height: HEIGHT / 100 * 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: WIDTH/100*5,
        flexDirection: 'row',
    },
    mains: {
        width: WIDTH / 100 * 50,
        alignItems: 'flex-start',
        justifyContent:'center',
    },
    titleBar:{
        width: WIDTH / 100 * 23,
        alignItems: 'center',
        // alignSelf:'flex-start',
        justifyContent:'center',
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.medium,
        fontWeight: FONT_WEIGHT.medium,
    },
    title1:{
        color: COLOR.green,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.medium,
    },
    touch: {
        width: WIDTH / 100 * 17,
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

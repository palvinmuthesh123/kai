import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

import Call from '../../assets/svg/Clinic/HCall.svg'
import Video from '../../assets/svg/Clinic/HVideo.svg'
import Set from '../../assets/svg/Clinic/HSet.svg'
import Back from '../../assets/svg/Clinic/Backer.svg'

const ChatHeader = props => {
    return (
        <SafeAreaView style={styles.appbar}>
            <TouchableOpacity
                style={[styles.mains,]}
                onPress={() => {
                    try {
                        props.onPress();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <Back /> 
            </TouchableOpacity>

            <View style={styles.titleBar}>
            <Text
                style={styles.title}>
                {props.title}
            </Text>
            </View>

            
            <View
                style={styles.touch}>
                <TouchableOpacity>
                   <Call/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Video/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onSet()}>
                    <Set/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ChatHeader;

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
        alignItems: 'center',
        justifyContent:'center',
        top:5
    },
    titleBar:{
        width: WIDTH / 100 * 60,
        alignItems: 'center',
        justifyContent:'center',
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.medium,
        paddingHorizontal: 20,
        left: 10,

    },
    touch: {
        width: WIDTH / 100 * 22,
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

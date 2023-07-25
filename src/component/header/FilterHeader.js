import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

import Wrong from '../../assets/svg/filter/Wrong.svg'


const CustomHeader = props => {
    return (
        <SafeAreaView style={styles.appbar}>
            <TouchableOpacity
                style={[styles.mains,{top:-2}]}
                onPress={() => {
                    try {
                        props.onPress();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <Wrong />
            </TouchableOpacity>

            <View style={styles.titleBar}>
            <Text
                style={styles.title}>
                {props.title}
            </Text>
            </View>

            {props.tick ?
            <View
            style={styles.touch}>
            <TouchableOpacity onPress={() => props.onClick()} >
                {/* <Tick /> */}
            </TouchableOpacity>
            </View>:
            <View
                style={styles.touch}>
                <TouchableOpacity onPress={() => props.onClick()}>
                    <Text style={{color:COLOR.black}}>{props.reset}</Text>
                </TouchableOpacity>
            </View>}
        </SafeAreaView>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('window').width,
        height: HEIGHT / 100 * 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: WIDTH/100*5,
        flexDirection: 'row',
        // backgroundColor:"red"

    },
    mains: {
        width: WIDTH / 100 * 10,
        alignItems: 'center',
        justifyContent:'center',
        top:5
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
        paddingHorizontal: 20,
        left: 10,

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

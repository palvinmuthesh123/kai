import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

import  Info from '../../assets/svg/athlete/Info.svg'

const PostHeader = props => {
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
                <Info/>
            </TouchableOpacity>

            <View style={styles.titleBar}>
            {/* <Text
                style={styles.title}>
                {props.title}
            </Text> */}
            </View>

           
            <View
                style={styles.touch}>
                
            </View>
        </SafeAreaView>
    );
};

export default PostHeader;

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
        width: WIDTH / 100 * 70,
        height: HEIGHT / 100 * 8,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    titleBar:{
        width: WIDTH / 100 * 10,
        alignItems: 'center',
        // alignSelf:'flex-start',
        justifyContent:'center',
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.medium,
        marginRight:10,
    },
    touch:{
        width: WIDTH / 100 * 10,
        alignItems: 'center',
        // alignSelf:'flex-start',
        justifyContent:'center',
    },
});

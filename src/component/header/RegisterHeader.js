import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

import Back from '../../assets/svg/register/back.svg'

const RegisterHeader = props => {
    return (
        <SafeAreaView style={styles.appbar}>
            <TouchableOpacity
                style={styles.mains}
                onPress={() => {
                    try {
                        props.onPress();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <Back />
            </TouchableOpacity>
            
            <View>
                <Text
                    style={styles.title}>
                    {props.title}
                </Text>
                <Text
                    style={styles.highlitetext}>
                    {props.sub}
                </Text>
            </View>

            
        </SafeAreaView>
    );
};

export default RegisterHeader;

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('window').width,
        height: HEIGHT / 100 * 15,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    mains: {
        width: WIDTH / 100 * 10,
        alignItems: 'flex-start',
    },
    title: {
        color: COLOR.blue,
        fontSize: FONT_SIZE.huge,
        fontWeight: FONT_WEIGHT.medium,
    },
    highlitetext: {
        color: COLOR.gray,
        fontSize:FONT_SIZE.small,
        marginTop:3
        // alignSelf: 'center',
    },
    gradientContainer: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

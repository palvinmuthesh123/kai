import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

import Back from '../../assets/svg/filter/Shape.svg'
import Set from '../../assets/svg/filter/Setting.svg'
import Add from '../../assets/svg/message/New.svg'
import Share from '../../assets/svg/athlete/Share.svg'
import Refresh from '../../assets/svg/dashboard/Refresh.svg'


const MainHeader = props => {
    return (
        <SafeAreaView style={styles.appbar}>
            <TouchableOpacity
                style={[styles.mains, { top: -2 }]}
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
                {props.nothing ?
                    null :

                    <TouchableOpacity onPress={()=>{props.onSet()}}>
                        {props.message ? <Add />: props.share ? <Share /> : <Set />}
                    </TouchableOpacity>}

            </View>
        </SafeAreaView>
    );
};

export default MainHeader;

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('window').width,
        height: HEIGHT / 100 * 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: WIDTH / 100 * 5,
        flexDirection: 'row',
        // SetgroundColor:"red"

    },
    mains: {
        width: WIDTH / 100 * 10,
        alignItems: 'center',
        justifyContent: 'center',
        top: 5
    },
    titleBar: {
        width: WIDTH / 100 * 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.large,
        fontWeight: FONT_WEIGHT.medium,
        paddingHorizontal: 20,
        left: 10,

    },
    touch: {
        width: WIDTH / 100 * 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "center"
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

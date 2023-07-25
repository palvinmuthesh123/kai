import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import CustomButton from "../../component/Button/CustomButton";

import Logo from '../../assets/svg/splash/Logo.svg'
import Eye from '../../assets/svg/login/view.svg';

export default ResetPassword = (props) => {

    const [change, setChange] = useState(false)
    const [open, setOpen] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.white} />
            <View style={styler.containBox}>
                <View style={{ marginVertical: '5%' }}>
                    <Logo/>
                </View>
                <Text style={styler.title}>Reset Your Password</Text>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'grey'}
                        placeholder="Registered Email ID" />
                </View>
                

                <View style={{marginVertical:'8%'}}>
                    <CustomButton 
                            title={'Reset Password'} 
                            onPress={() => props.navigation.push('DashBoardScreen')}/>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: COLOR.black, fontSize: FONT_SIZE.compact, marginHorizontal: 3 }}>Don't have an account?</Text>
                    <TouchableOpacity><Text style={{ color: '#14BC66', fontSize: FONT_SIZE.compact, }}>Register now!</Text></TouchableOpacity>
                </View>
                <TouchableOpacity><Text style={styler.title1}>Log In</Text></TouchableOpacity>
            </View>
            <View style={{ height: HEIGHT / 100 * 20 }}></View>


        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    containBox: {
        height: HEIGHT / 100 * 80,
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%'
    },
    title: {
        fontSize: FONT_SIZE.huge,
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.semibold,
        marginVertical: '10%',
        marginTop: '20%'
    },
    content: {
        textAlign: 'center',
        color: 'grey',
        fontSize: FONT_SIZE.medium,
        marginTop: 20,
    },
    title1: {
        fontSize: FONT_SIZE.compact,
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.semibold,
        marginVertical: '5%',
    },
})

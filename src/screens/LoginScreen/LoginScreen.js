import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";

import Logo from '../../assets/svg/splash/Logo.svg'
import Eye from '../../assets/svg/login/view.svg';
import CustomButton from "../../component/Button/CustomButton";

export default LoginScreen = (props) => {

    const [change, setChange] = useState(false)
    const [open, setOpen] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.white} />
            <View style={styler.containBox}>
                <View style={{ marginVertical: '5%' }}>
                    <Logo/>
                </View>
                <Text style={styler.title}>Log In</Text>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'grey'}
                        placeholder="Email / Phone number" />
                </View>
                <View style={[styles.inputBox, {}]}>
                    <TextInput
                        secureTextEntry={open}
                        style={styles.input}
                        placeholderTextColor={'grey'}
                        placeholder="Password" />
                    <TouchableOpacity onPress={() => setOpen(!open)}>{open ? <Image source={require('../../assets/images/eye.png')} /> : <Image source={require('../../assets/images/eye_open.png')} style={{ height: 25, width: 25 }} />}</TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 5, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            value={change}
                            disabled={false}
                            onChange={() => setChange(!change)}
                        />
                        <TouchableOpacity onPress={() => setChange(!change)}><Text style={{ color: 'grey' }}>Remember Me</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => props.navigation.push('ResetPassword')}
                        >
                        <Text style={{ color: 'grey' }}>Forgot Password?</Text></TouchableOpacity>
                </View>

                <View style={{marginVertical:'8%'}}>
                    <CustomButton 
                            title={'Log In'} 
                            onPress={() => props.navigation.push('HomeScreen')}/>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: COLOR.black, fontSize: FONT_SIZE.compact, marginHorizontal: 3 }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => props.navigation.push('CreateAccount1')}>
                        <Text style={{ color: '#14BC66', fontSize: FONT_SIZE.compact, }}>Register now!</Text></TouchableOpacity>
                </View>
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
    title1: {
        fontSize: FONT_SIZE.huge,
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.semi_light,
        textAlign: 'center',
        lineHeight: 40,
    },
    content: {
        textAlign: 'center',
        color: 'grey',
        fontSize: FONT_SIZE.medium,
        marginTop: 20,
    },
})

import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import CustomButton from "../../component/Button/CustomButton";
import ProgressHeader from "../../component/header/ProgressHeader";

import Logo from '../../assets/svg/splash/Logo.svg'
import Eye from '../../assets/svg/login/view.svg';
import RegisterHeader from "../../component/header/RegisterHeader";
import { back } from "../../utils/navigation";

export default CreateAccount1 = (props) => {


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.white} />
            <RegisterHeader 
                    title={'Create account'} 
                    sub={'3 easy signup process'} 
                    onPress={() => props.navigation.goBack()} />
            <View style={{ width: WIDTH, height: HEIGHT / 100 * 6 }}>
                <ProgressHeader 
                one={true}
                progress={0.25}/>
            </View>

            <View style={styles.titleView}>
                <Text style={styles.title}>Enter your basic details</Text>
            </View>

            <ScrollView contentContainerStyle={styler.containBox}>
                <View style={styler.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'grey'}
                        placeholder="First Name"
                    />
                </View>

                <View style={styler.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'grey'}
                        placeholder="Last Name"
                    />
                </View>

                <View style={styler.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'grey'}
                        placeholder="Email"
                    />
                </View>

                <View style={styler.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'grey'}
                        placeholder="Password"
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", width: WIDTH / 100 * 90 }}>
                    <View style={[styler.inputBox, { width: WIDTH / 100 * 20 }]}>
                        <TextInput
                            style={{ width: '100%', }}
                            placeholderTextColor={'grey'}
                            placeholder="+33"
                        />
                    </View>
                    <View style={[styler.inputBox, { width: WIDTH / 100 * 65 }]}>
                        <TextInput
                            style={[styles.input, { width: '50%' }]}
                            placeholderTextColor={'grey'}
                            placeholder="Mobile Number"
                        />
                    </View>
                </View>

                <View style={{ marginVertical: '8%' }}>
                    <CustomButton
                        title={'Next'}
                        onPress={() => props.navigation.push('CreateAccount2')}    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    containBox: {
        height: HEIGHT / 100 * 60,
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    inputBox: {
        height: HEIGHT / 100 * 6,
        width: WIDTH / 100 * 90,
        marginVertical: HEIGHT / 100 * 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.white,
        paddingHorizontal: 10,
        borderRadius: 15,
        elevation: 5
    },
    input: {
        width: '90%',
        paddingStart: 5
    },
})

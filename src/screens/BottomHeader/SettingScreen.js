import React, { useState } from "react";
import { View, Text, SafeAreaView, ToastAndroid,StyleSheet,TouchableOpacity, ScrollView, TextInput, FlatList, StatusBar } from 'react-native';
import CustomHeader from "../../component/header/CustomHeader";
import { images, statistics } from "../../row/data";
import { RadioButton, } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native'
import { COLOR, FONT_SIZE, HEIGHT, WIDTH } from "../../theme/typography";
import styles from "./styles";

import Swit from '../../assets/svg/profile/Swit.svg'
import SettingHeader from "../../component/header/SettingHeader";

export default SettingScreen = (props) => {

    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(true)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(true)
    const [toggle4, setToggle4] = useState(false)

    function log(){
        props.navigation.push('HomeScreen');
        ToastAndroid.show('Logged Out Successfully',ToastAndroid.SHORT)
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <SettingHeader 
                    title={'Settings'}
                    onPress={()=>props.navigation.goBack()} />
            <View style={styler.container}>
                <Text style={styles.name}>Disturb</Text>
                <View style={styler.box}>
                    <View style={styler.content}>
                        <Text style={styler.age}>Do not disturb</Text>
                        <ToggleSwitch
                            isOn={toggle}
                            onColor={COLOR.green}
                            offColor="#DFE0E0"
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="compact"
                            onToggle={isOn => {
                                console.log("changed to : ", isOn)
                                setToggle(!toggle)
                            }}
                        />
                    </View>

                    <View style={styler.content}>
                        <Text style={styler.time}>Start at</Text>
                        <Text style={styler.time}>15:45</Text>
                    </View>

                    <View style={styler.content}>
                        <Text style={styler.time}>Ends at</Text>
                        <Text style={styler.time}>21:00</Text>
                    </View>
                </View>

                <Text style={[styles.name,{marginVertical:15}]}>Notifications</Text>
                <View style={styler.box}>
                    <View style={styler.content}>
                        <Text style={styler.age}>Someone mentions me</Text>
                        <ToggleSwitch
                            isOn={toggle1}
                            onColor={COLOR.green}
                            offColor="#DFE0E0"
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="compact"
                            onToggle={isOn => {
                                console.log("changed to : ", isOn)
                                setToggle1(!toggle1)
                            }}
                        />
                    </View>

                    <View style={styler.content}>
                        <Text style={styler.age}>Anyone follows me</Text>
                        <ToggleSwitch
                            isOn={toggle2}
                            onColor={COLOR.green}
                            offColor="#DFE0E0"
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="compact"
                            onToggle={isOn => {
                                console.log("changed to : ", isOn)
                                setToggle2(!toggle2)
                            }}
                        />
                    </View>

                    <View style={styler.content}>
                        <Text style={styler.age}>Someone comments me</Text>
                        <ToggleSwitch
                            isOn={toggle3}
                            onColor={COLOR.green}
                            offColor="#DFE0E0"
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="compact"
                            onToggle={isOn => {
                                console.log("changed to : ", isOn)
                                setToggle3(!toggle3)
                            }}
                        />
                    </View>

                    <View style={styler.content}>
                        <Text style={styler.age}>A player follows me</Text>
                        <ToggleSwitch
                            isOn={toggle4}
                            onColor={COLOR.green}
                            offColor="#DFE0E0"
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="compact"
                            onToggle={isOn => {
                                console.log("changed to : ", isOn)
                                setToggle4(!toggle4)
                            }}
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={() => props.navigation.push('ChangePassword')}>
                    <Text style={[styles.name,{marginVertical:15}]}>Change Password</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() =>  log()}>
                    <Text style={[styles.name,{marginVertical:15}]}>Logout</Text>
                </TouchableOpacity>
            </View>

           
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,
        paddingHorizontal: WIDTH / 100 * 5,
        paddingVertical: HEIGHT / 100 * 2
    },
    box: {
        width: "100%",
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        backgroundColor: COLOR.blue,
        marginVertical: '5%',
        borderRadius: 10,

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    age: {
        color: COLOR.white,
        fontSize: 13,
    },
    time:{
        color: COLOR.gray,
        fontSize: 13,
    },
})
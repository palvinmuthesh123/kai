import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import RegisterHeader from "../../component/header/RegisterHeader";
import { RadioButton } from 'react-native-paper';
import {
    RoundedCheckbox,
    PureRoundedCheckbox,
  } from "react-native-rounded-checkbox";

import Logo from '../../assets/svg/splash/Logo.svg'
import Eye from '../../assets/svg/login/view.svg';
import Male from '../../assets/svg/register/male.svg'
import Female from '../../assets/svg/register/female.svg'
import Tick from '../../assets/svg/register/tick.svg'
import { back } from "../../utils/navigation";

export default CreateAccount4 = (props) => {

    const [value, setValue] = useState('first');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.white} />
            <RegisterHeader 
                    title={'Select your role '} 
                    sub={'Exclusively made for each role'}
                    onPress={() => props.navigation.goBack()}  />
            <View style={{ width: WIDTH, height: HEIGHT / 100 * 6 }}>
            <ProgressHeader progress={1}/>
            </View>

            {/* <View style={styles.titleView}>
                <Text style={styles.title}>Select gender</Text>
            </View> */}

                <View style={styler.containBox}>

                    <View style={styler.mainView}>
                        <View style={styler.subView}>
                            {/* <View style={styler.radio}>
                            <View style={styler.dot}></View>
                        </View> */}
                            <TouchableOpacity onPress={() => setValue('first')} style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={[styler.imgBack, value === 'first' ? {borderColor:COLOR.green} : null]}>
                                    <Text style={{color:"black"}}>Athlete</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{right:18,bottom:15}}>
                            {/* <RadioButton.IOS
                                value="first"
                                status={ value === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('first')}
                                color="#00A962"
                            /> */}
                            {/* <RoundedCheckbox text=""  rctCheckBox={{height:22,width:22}} onPress={(checked) => console.log("Checked: ", checked)} /> */}
                            {value === 'first' ? <View style={{height:30, width:30, backgroundColor:'#00A962', justifyContent:'center', alignItems:'center', borderRadius:100}}>
                                <Tick/>
                            </View> : <View style={{height:30, width:30}}>
                            </View> }
                            </View>
                        </View>

                        <View style={styler.subView}>
                       
                            <TouchableOpacity onPress={() => setValue('second')} style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={[styler.imgBack, value === 'second' ? {borderColor:COLOR.green} : null]}>
                                    <Text style={{color:"black"}}>Expert</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{right:18,bottom:15}}>
                            {/* <RadioButton.IOS
                                value="first"
                                status={ value === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('first')}
                                color="#00A962"
                            /> */}
                            {value === 'second' ? <View style={{height:30, width:30, backgroundColor:'#00A962', justifyContent:'center', alignItems:'center', borderRadius:100}}>
                                <Tick/>
                            </View> : <View style={{height:30, width:30}}>
                            </View> }
                            </View>
                        </View>
                    </View>

                    <View style={{ marginVertical: '8%' }}>
                        <CustomButton title={value === 'first' ? 'Continue as Athlete' : 'Continue as Expert'}
                        onPress={() => {value === 'first' ? props.navigation.push('HomeScreen') : props.navigation.push('ExpertDashboardScreen')}} />
                    </View>
                </View>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    containBox: {
        height: HEIGHT / 100 * 70,
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical:HEIGHT/100*10
    },
    mainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: '10%',
        // marginVertical:'10%',
        width: WIDTH / 100 * 80,
        height: HEIGHT / 100 * 20,
    },
    subView: {
        flexDirection: "row",
        width: WIDTH / 100 * 38,
        height: '100%',
        justifyContent: "center",
        alignContent:'center',
    },
    radio: {
        borderWidth: 1,
        borderColor: COLOR.gray,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 22,
        width: 22,
    },
    dot: {
        backgroundColor: COLOR.green,
        borderRadius: 100,
        height: 12,
        width: 12,
    },
    imgBack: {
        borderWidth: 1,
        borderColor: COLOR.gray,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical:10,
        height: 130,
        width: 100,
        marginLeft:30
    },

})


import React , {useState}from "react";
import { View, Text, SafeAreaView,StyleSheet, ScrollView,TextInput, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { COLOR, FONT_SIZE, HEIGHT,FONT_WEIGHT, WIDTH } from "../../theme/typography";
import styles from "./styles";
import SettingHeader from "../../component/header/SettingHeader";
import CustomButton from "../../component/Button/CustomButton";

export default ChangePassword = (props) => {
    
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <SettingHeader title={'Change Password'}/>
            <View style={styler.container}>
                <Text style={styler.name}>Kaelan Halliday</Text>  
                <View>
                    <Text style={styler.para}>You’ll be logged out of all sessions.</Text> 
                    <Text style={styler.para}>Your password must be at list six characters and should {'\n'}include a combination of numbers, letters and special {'\n'}characters (!$@%).</Text> 
                </View>

                <View style={styler.inputBox}>
                    <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="Current password"
                        />
                </View>

                <View style={styler.inputBox}>
                    <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="New password"
                        />
                </View>

                <View style={styler.inputBox}>
                    <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="Retype new password"
                        />
                </View>
                <TouchableOpacity onPress={() => props.navigation.push('ResetPassword')}>
                    <Text style={[styler.forgot]}>Forgotten your password?</Text>
                </TouchableOpacity>

            </View>
            <View style={{alignItems:"center"}}>
                <CustomButton 
                        title={'Change Password'}
                        onPress = {() => props.navigation.push('SettingScreen')}/>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT/100*80,
        paddingHorizontal:WIDTH/100*5,
        paddingVertical:HEIGHT/100*2
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
        borderRadius: 10,
        elevation: 8
    },
    input: {
        width: '90%',
        paddingStart: 5
    },
    name:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
        marginVertical:3,
    },
    forgot:{
        fontWeight:FONT_WEIGHT.medium,
        marginVertical:3,
        color:COLOR.blue,
        fontSize:FONT_SIZE.medium,
        left:5,
        top:10
    },
    para:{
        color:COLOR.xGray,
        marginVertical:5,
        fontSize: FONT_SIZE.small,
        lineHeight:20
    },
})
import React, { useState } from "react";
import { SafeAreaView, StyleSheet,ScrollView, StatusBar, View, Image, Text, TextInput,FlatList, TouchableOpacity } from 'react-native';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import RegisterHeader from "../../component/header/RegisterHeader";
import CustomButton from "../../component/Button/CustomButton";

import Current from '../../assets/svg/register/Current.svg'
import Location from '../../assets/svg/register/Location.svg'
import Highlite from '../../assets/svg/register/highlited.svg'
import Black from '../../assets/svg/register/blackLocate.svg'
import { locationList } from "../../row/data";
import { back } from "../../utils/navigation";

export default CreateAccount3 = (props) => {

    const [change,setChange] = useState()

    function highlite(ind){
        setChange(ind)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.white} />
            <RegisterHeader 
                    title={'Create account'} 
                    sub={'3 easy signup process'}
                    onPress={() => props.navigation.goBack()}  />
            <View style={{ width: WIDTH, height: HEIGHT / 100 * 5 }}>
            <ProgressHeader 
                    three={true}
                    progress={0.75}/>
            </View>

            <View style={styles.titleView}>
                <Text style={styles.title}>Where are you from?</Text>
            </View>

            <View style={styler.locatorView}>
                <View style={[styler.inputBox,styler.locatorInput]}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                        <Location/>
                        <Text style={styles.greenText}>Search for city</Text>
                    </View>
                    <Current />
                </View>
            </View>

            <ScrollView contentContainerStyle={styler.containBox}>

                <View style={{width:WIDTH/100*88}}>
                    <Text style={styler.highlitetext}>
                        Popular places
                    </Text>
                </View>
                <FlatList
                    style={{marginBottom:10}}
                    data={locationList}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => 
                <TouchableOpacity 
                        onPress={() => highlite(index)}
                        style={[styler.inputBox,{justifyContent:'flex-start'}]}>
                    { change==index ? <Highlite /> : <Black/> }
                    <Text style={{marginHorizontal:10}}>{item.Location}</Text>
                </TouchableOpacity>}/>
                
                </ScrollView>
                <View style={[styler.btnView,{ marginVertical: '5%' }]}>
                    <CustomButton 
                        title={'Done'}
                        onPress={() => props.navigation.push('CreateAccount4')} />
                </View>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    containBox: {
        height: HEIGHT / 100 * 40,
        width: WIDTH,
        alignItems: 'center',
        // justifyContent: 'center',
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
        borderColor:COLOR.lightBorder,
        borderWidth:0.5
    },
    locatorInput:{
        backgroundColor:COLOR.blue,
        borderColor:COLOR.green,
        borderWidth:1.5
    },
    input: {
        width: '90%',
        paddingStart: 5
    },
    highlitetext: {
        color: COLOR.gray,
        fontSize:FONT_SIZE.small,
        marginVertical:'2%'
        // alignSelf: 'center',
    },
    btnView:{
        height:HEIGHT/100*8,
        width:WIDTH/100*90,
        justifyContent:"center",
        marginHorizontal:WIDTH/100*5,
        // backgroundColor: 'red',
    },
    locatorView:{
        height:HEIGHT/100*6,
        width:WIDTH/100*90,
        justifyContent:"center",
        marginHorizontal:WIDTH/100*5,
        marginVertical:15,
    },
})

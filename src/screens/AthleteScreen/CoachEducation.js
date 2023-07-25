import React from 'react';
import { View ,ScrollView, SafeAreaView,StyleSheet,TextInput} from 'react-native';
import { WIDTH , HEIGHT, FONT_SIZE, FONT_WEIGHT } from '../../theme/typography';
import styles from './styles';
import FavHeader from '../../component/header/FavHeader';

import Calender from '../../assets/svg/athlete/Calender.svg'

export default CoachEducation = (props) => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <FavHeader nothing={true} title={'Education'}  />
            <ScrollView style={styler.container}>
            <View style={{alignItems:"center"}}>
                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="School"
                            />
                    </View>

                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="Degree"
                            />
                    </View>

                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="Start year"
                            />
                        <Calender />
                    </View>

                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="End Year (optional)"
                            />
                        <Calender />
                    </View>

                </View>
            </ScrollView>
            <View style={styler.btnContainer}>
                <CustomButton title={'Save'}/>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container:{
        height:HEIGHT/100*82,
        width:WIDTH,
        paddingVertical:HEIGHT/100*2,
    },   
    btnContainer:{
        height:HEIGHT/100*10,
        width:'100%',
        alignItems:"center",
        justifyContent:'center'
    }, 
    input: {
        width: '90%',
        paddingStart: 5
    },
    title:{
        color:'#778087',
        fontSize:FONT_SIZE.compact,
        marginHorizontal:WIDTH/100*5,
        // fontWeight:FONT_WEIGHT.medium
    },
})
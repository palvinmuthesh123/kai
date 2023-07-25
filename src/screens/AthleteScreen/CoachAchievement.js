import React from 'react';
import { View ,TouchableOpacity, SafeAreaView,StyleSheet,Text,ScrollView,TextInput} from 'react-native';
import { WIDTH , HEIGHT, FONT_SIZE, FONT_WEIGHT, COLOR } from '../../theme/typography';
import styles from './styles';
import FavHeader from '../../component/header/FavHeader';

export default CoachAchievement = (props) => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <FavHeader nothing={true} title={'Coaching Honors and Achievement'} large={true} />
            <ScrollView style={styler.container}>
            <View style={{marginVertical:'3%'}}>
                <Text style={styler.title}>Add coaching highlights</Text>
            </View>
            <View style={{alignItems:"center"}}>
                    <View style={[styler.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'#778087'}
                            placeholder=" Description..."
                            multiline={true}
                            />
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
    inputBox: {
        height: HEIGHT / 100 * 18,
        width: WIDTH / 100 * 90,
        marginVertical: HEIGHT / 100 * 1.2,
        backgroundColor: COLOR.white,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 5
    },
})
import React from 'react';
import { View ,TextInput, SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import { WIDTH , HEIGHT, FONT_SIZE, FONT_WEIGHT,COLOR } from '../../theme/typography';
import styles from './styles';
import FavHeader from '../../component/header/FavHeader';

export default CoachProfile = (props) => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <FavHeader nothing={true} title={'Basic Info'}  />
            <ScrollView style={styler.container}>
            <View style={{alignItems:"center"}}>
                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="Name"
                            />
                    </View>

                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="Contact"
                            />
                    </View>

                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="Email"
                            />
                    </View>

                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="Location"
                            />
                    </View>

                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="Position"
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
})
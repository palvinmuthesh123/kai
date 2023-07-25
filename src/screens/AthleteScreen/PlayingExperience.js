import React , {useState}from 'react';
import { View ,TouchableOpacity,ScrollView,SafeAreaView,StyleSheet,Text,TextInput} from 'react-native';
import { WIDTH , HEIGHT, FONT_SIZE, FONT_WEIGHT } from '../../theme/typography';
import styles from './styles'
import FavHeader from '../../component/header/FavHeader';
import { Dropdown } from 'react-native-element-dropdown';

import Down from '../../assets/svg/athlete/Drop.svg'

export default PlayingExperience = (props) => {


    const[isFocus, setIsFocus] = useState(true)
    const[values, setValues] = useState('')

    const dropdownList = [
        { label: 'Category 1', key: '1' },
        { label: 'Category 2', key: '2' },
        { label: 'Category 3', key: '3' },
        { label: 'Category 4', key: '4' },
    ];

    return(
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <FavHeader nothing={true} title={'Playing Experience'}/>
            <ScrollView style={styler.container}>
                <View style={{alignItems:"center"}}>
                    <View style={[styles.inputBox,{}]}>
                            <Dropdown
                                style={{ height: 'auto', borderRadius: 5, borderColor: 'rgba(0,0,0,0.5)', width: '100%', paddingHorizontal: 10, }}
                                data={dropdownList}
                                maxHeight={250}
                                labelField="label"
                                valueField="value"
                                placeholder={'Level' }
                                value={values}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValues(item.value);
                                    setIsFocus(false);
                                }}
                            />
                    </View>

                    <View style={[styles.inputBox,{}]}>
                            <Dropdown
                                style={{ height: 'auto', borderRadius: 5, borderColor: 'rgba(0,0,0,0.5)', width: '100%', paddingHorizontal: 10, }}
                                data={dropdownList}
                                maxHeight={250}
                                labelField="label"
                                valueField="value"
                                placeholder={'Sports'}
                                value={values}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValues(item.value);
                                    setIsFocus(false);
                                }}
                            />
                    </View>

                    <View style={[styles.inputBox,{}]}>
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'grey'}
                            placeholder="School name / team"
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
                            placeholder="Experience"
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
})
import React, { useState } from "react";
import { View,Text, TextInput, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import FilterHeader from '../../component/header/FilterHeader';
import Location from '../../assets/svg/filter/Location.svg'
import { Dropdown } from 'react-native-element-dropdown';
import CustomButton from "../../component/Button/CustomButton";

export default ClinicFilter = (props) =>{
    
    const[values, setValues] = useState('')
    const dropdownList = [
        { label: 'Category 1', key: '1' },
        { label: 'Category 2', key: '2' },
        { label: 'Category 3', key: '3' },
        { label: 'Category 4', key: '4' },
    ];


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="transparent" />
            <FilterHeader 
                title={'Filter'} 
                reset={'Reset'}
                onClick={() => props.navigation.goBack()} 
                onPress={() => props.navigation.goBack()} />
            <View style={styler.container}>
                <View style={{ height: HEIGHT / 100 * 85, width: '100%', paddingVertical: '5%' }}>
                    <View style={{ marginVertical: 3 }}>
                        <Text style={styler.title}>Select location</Text>
                        <View style={[styler.inputBox, { justifyContent: 'flex-start' }]}>
                            <Location />
                            <TextInput
                                style={styler.input}
                                placeholderTextColor={'grey'}
                                placeholder="Search"
                            />
                        </View>
                    </View>

                    <View style={{ marginVertical: 3 }}>
                        <Text style={styler.title}>Specialization</Text>
                        <View style={[styler.inputBox]}>
                            <Dropdown
                                style={{ height: 'auto', borderRadius: 5, borderColor: 'rgba(0,0,0,0.5)', width: '100%', paddingHorizontal: 5, }}
                                data={dropdownList}
                                maxHeight={250}
                                labelField="label"
                                valueField="value"
                                placeholder={'Choose Category'}
                                value={values}
                                // onFocus={() => setIsFocus(true)}
                                // onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValues(item.value);
                                    // setIsFocus(false);
                                }}
                            />
                        </View>
                    </View>

                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <CustomButton 
                        title={'Apply'} 
                        onPress={() => props.navigation.goBack()}/>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT / 100 * 80,
        paddingHorizontal: WIDTH / 100 * 5,
        paddingVertical: HEIGHT / 100 * 2,
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.semibold,
    },
    inputBox: {
        height: HEIGHT / 100 * 6,
        width: WIDTH / 100 * 90,
        marginVertical: HEIGHT / 100 * 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.white,
        paddingHorizontal: 15,
        borderRadius: 20,
        elevation: 5
    },
})
import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import FilterHeader from '../../component/header/FilterHeader';

import Location from '../../assets/svg/filter/Location.svg'
import Calender from '../../assets/svg/filter/Calender.svg'
import DropDown from '../../assets/svg/filter/Down.svg'
import { contractList, experienceList, typeList } from "../../row/data";
import { Dropdown } from 'react-native-element-dropdown';
import { Checkbox } from 'react-native-paper';
import CustomButton from "../../component/Button/CustomButton";
import Tick from '../../assets/svg/filter/tick.svg'
import Ticks from '../../assets/svg/filter/tickss.svg'

export default JobFilter = (props) => {

    const [checked, setChecked] = React.useState(false);
    const [type, setType] = useState()
    const [exper, setExper] = useState()
    const[isFocus, setIsFocus] = useState(true)
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
            <FilterHeader title={'Filter'} reset={'Reset'} />
            <View style={styler.container}>
                <View style={{ height: HEIGHT / 100 * 85, width: '100%', paddingVertical: '5%' }}>
                    <View style={{ marginVertical: 3 }}>
                        <Text style={styler.title}>Select location</Text>
                        <View style={[styles.inputBox, { justifyContent: 'flex-start' }]}>
                            <Location />
                            <TextInput
                                style={styler.input}
                                placeholderTextColor={'grey'}
                                placeholder="Search"
                            />
                        </View>
                    </View>

                    <View style={{ marginVertical: 3 }}>
                        <Text style={styler.title}>Type</Text>
                        <View style={{ height: HEIGHT / 100 * 6, marginVertical: HEIGHT / 100 * 1.2, flexDirection: 'row', alignItems: 'center', }}>
                            <FlatList
                                style={{}}
                                data={typeList}
                                horizontal={true}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity
                                        onPress={() => setExper(index)}
                                        style={[styler.positionBox, exper == index ? { backgroundColor: COLOR.blue } : { backgroundColor: '#DFE0E0' }]}>
                                        <Text style={[styler.position, exper == index ? { color: 'white' } : { color: COLOR.black }]}>{item.name}</Text>
                                    </TouchableOpacity>} />
                        </View>
                    </View>

                    <View style={{ marginVertical: 3 }}>
                        <Text style={styler.title}>Category</Text>
                        <View style={[styles.inputBox]}>
                            <Dropdown
                                style={{ height: 'auto', borderRadius: 5, borderColor: 'rgba(0,0,0,0.5)', width: '100%', paddingHorizontal: 10, }}
                                data={dropdownList}
                                maxHeight={250}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Choose category' : ''}
                                value={values}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValues(item.value);
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginVertical: 5 }}>
                        <Text style={styler.title}>Contract</Text>
                        <View style={{ marginVertical: 10 }}>
                        <FlatList
                            style={{}}
                            data={contractList}
                            // horizontal={true}
                            numColumns={3}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                                <View style={{ marginVertical: HEIGHT / 100 *1, flexDirection: 'row', alignItems: 'center', width: WIDTH / 100 * 30, }}>
                                    <TouchableOpacity onPress={() => { setChecked(index) }} style={[{ width: 20, height: 20, borderRadius: 3, justifyContent: "center", alignItems: "center" }, checked == index ?  {}:{ borderWidth: 2, borderColor: "grey" }]}>
                                        {checked == index?  <Ticks width={20} height={20} />:null }
                                    </TouchableOpacity>
                                    <Text style={[styler.greenText, { color: 'grey', marginLeft: 5 }]}>{item.name} </Text>
                                </View>} />
                            </View>
                    </View>

                    <View style={{ marginVertical: 3 }}>
                        <Text style={styler.title}>Experience</Text>
                        <View style={{ marginVertical: HEIGHT / 100 * 1.2, flexDirection: 'row', alignItems: 'center', }}>
                            <FlatList
                                style={{}}
                                data={experienceList}
                                // horizontal={true}
                                numColumns={2}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity
                                        onPress={() => setType(index)}
                                        style={[styler.exBox, type == index ? { backgroundColor: COLOR.blue } : { backgroundColor: '#DFE0E0' }]}>
                                        <Text style={[styler.position, type == index ? { color: 'white' } : { color: COLOR.black }]}>{item.name}</Text>
                                    </TouchableOpacity>} />
                        </View>
                    </View>

                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <CustomButton title={'Apply'} onPress={() => props.navigation.push('JobSearch')} />
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
    greenText: {
        color: COLOR.green,
        fontSize: FONT_SIZE.medium
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.semibold,
    },
    positionBox: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#DFE0E0',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    exBox: {
        width: '45%',
        paddingVertical: 7,
        backgroundColor: '#DFE0E0',
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    position: {
        color: COLOR.black,
        fontSize: FONT_SIZE.small,
        fontWeight: FONT_WEIGHT.medium,
    },
})
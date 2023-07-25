import React ,{useState}from "react";
import { View, TouchableOpacity, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import FilterHeader from '../../component/header/FilterHeader';
import CheckBox from '@react-native-community/checkbox';


import Location from '../../assets/svg/filter/Location.svg'
import Calender from '../../assets/svg/filter/Calender.svg'
import DropDown from '../../assets/svg/filter/DropDown.svg'
import { positionList } from "../../row/data";
import CustomButton from "../../component/Button/CustomButton";


export default FilterScreen = (props) => {

    const [change, setChange] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <FilterHeader title={'Filter'} reset={'Reset'}/>
            <View style={styler.container}>
                <View style={{}}>
                    <Text style={styler.greenText}>16,653 athlete match your search</Text>
                </View>
                <View style={{height:HEIGHT/100*85,width:'100%',paddingVertical:'5%'}}>
                    <View style={{marginVertical:3}}>
                        <Text style={styler.title}>Select location</Text>
                        <View style={[styles.inputBox,{justifyContent:'flex-start'}]}>
                            <Location/>
                            <TextInput
                                style={styler.input}
                                placeholderTextColor={'grey'}
                                placeholder="Search"
                                />
                        </View>
                    </View>

                    <View style={{marginVertical:3}}>
                        <Text style={styler.title}>Date of Birth</Text>
                        <View style={[styles.inputBox]}>
                            <Text style={{color:'grey',}}>DOB</Text>
                            <Calender/>
                        </View>
                    </View>

                    <View style={{marginVertical:3}}>
                        <Text style={styler.title}>Position</Text>
                        <View style={{height: HEIGHT / 100 * 6,marginVertical: HEIGHT / 100 * 1.2,flexDirection: 'row',alignItems: 'center',}}>
                        <FlatList
                            style={{}}
                            data={positionList}
                            horizontal={true}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                            <View style={styler.positionBox}>
                                <Text style={styler.position}>{item.name}</Text>
                            </View>}/>
                        </View>
                    </View>

                    <View style={{marginVertical:3,flexDirection:"row",justifyContent:'space-between'}}>
                        <View style={{marginVertical:3}}>
                            <Text style={styler.title}>Height</Text>
                            <View style={[styles.inputBox,{width:WIDTH/100*43}]}>
                                <Text style={{color:'grey',}}>Any</Text>
                                <DropDown/>
                            </View>
                        </View>

                        <View style={{marginVertical:3}}>
                            <Text style={styler.title}>Weight</Text>
                            <View style={[styles.inputBox,{width:WIDTH/100*43}]}>
                                <Text style={{color:'grey',}}>Any</Text>
                                <DropDown/>
                            </View>
                        </View>

                    </View>

                    <View style={{marginVertical:3}}>
                        <Text style={styler.title}>GPA / Scores</Text>
                        <View style={[styles.inputBox]}>
                            <Text style={{color:'grey',}}>Any</Text>
                            <DropDown/>
                        </View>
                    </View>

                    <View style={{marginVertical:3}}>
                        <Text style={styler.title}>Connected</Text>
                        <View style={{height: HEIGHT / 100 * 6,marginVertical: HEIGHT / 100 * 1.2,flexDirection: 'row',alignItems: 'center',}}>
                            <CheckBox
                                value={change}
                                disabled={false}
                                onChange={() => setChange(!change)}
                            />
                            <Text style={[styler.greenText,{color:'grey'}]}>Coach is a connection</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',}}>
                <CustomButton title={'Apply'} onPress={()=>props.navigation.push('RecruitmentScreen')}/>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT/100*80,
        paddingHorizontal:WIDTH/100*5,
        paddingVertical:HEIGHT/100*2,
    },
    greenText:{
        color:COLOR.green,
        fontSize:FONT_SIZE.medium
    },
    title:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.semibold,
    },
    positionBox:{
        height:25,
        width:30,
        backgroundColor:'#DFE0E0',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
    },
    position:{
        color:COLOR.black,
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.medium,
    },
})
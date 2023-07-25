import React ,{useState}from "react";
import { View, TouchableOpacity, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import FilterHeader from '../../component/header/FilterHeader';
import CheckBox from '@react-native-community/checkbox';


import Location from '../../assets/svg/filter/Location.svg'
import Ticks from '../../assets/svg/filter/tickss.svg'
import DropDown from '../../assets/svg/filter/DropDown.svg'
import { contractList, jobTypeList, positionList, recruitingClass, recruitingLevel, typeList } from "../../row/data";
import CustomButton from "../../component/Button/CustomButton";


export default AthleteFilter = (props) => {

    const [checked, setChecked] = React.useState();
    const [change, setChange] = useState(false)
    const [exper, setExper] = useState()
    const [position, setPosition] = useState()

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
                        <Text style={styler.title}>Recruiting Class</Text>
                        <View style={{height: HEIGHT / 100 * 6,marginVertical: HEIGHT / 100 * 1.2,flexDirection: 'row',alignItems: 'center',}}>
                        <FlatList
                            style={{}}
                            data={recruitingClass}
                            horizontal={true}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => setExper(index)}
                                style={[styler.poseBox, exper == index ? { backgroundColor: COLOR.blue } : { backgroundColor: '#DFE0E0' }]}>
                                <Text style={[styler.position, exper == index ? { color: 'white' } : { color: COLOR.black }]}>{item.name}</Text>
                            </TouchableOpacity>}/>
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
                            <TouchableOpacity
                                onPress={() => setPosition(index)}
                                style={[styler.positionBox, position == index ? { backgroundColor: COLOR.blue } : { backgroundColor: '#DFE0E0' }]}>
                                <Text style={[styler.position, position == index ? { color: 'white' } : { color: COLOR.black }]}>{item.name}</Text>
                            </TouchableOpacity>}/>
                        </View>
                    </View>

                    <View style={{ marginVertical: 5 }}>
                        <Text style={styler.title}>For which level are you recruiting?</Text>
                        <View style={{ marginVertical: 10 }}>
                        <FlatList
                            style={{}}
                            data={recruitingLevel}
                            // horizontal={true}
                            // numColumns={2}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                                <View style={{ marginVertical: HEIGHT / 100 *2, flexDirection: 'row', alignItems: 'center', width: WIDTH / 100 * 30, }}>
                                    <TouchableOpacity onPress={() => { setChecked(index) }} style={[{ width: 20, height: 20, borderRadius: 3, justifyContent: "center", alignItems: "center" }, checked == index?  {} :{ borderWidth: 2, borderColor: "grey" } ]}>
                                        {checked == index ?   <Ticks width={20} height={20}  />: null}
                                    </TouchableOpacity>
                                    <Text style={[styler.greenText, { color: 'grey', marginLeft: 10 }]}>{item.name} </Text>
                                </View>} />
                            </View>
                    </View>

                </View>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',height: HEIGHT/100*10,}}>
                <CustomButton title={'Apply'} onPress={()=>props.navigation.push('AthleteOpening')}/>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT/100*82,
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
        marginRight:15,
    },
    poseBox:{
        paddingHorizontal:30,
        paddingVertical:5,
        backgroundColor:'#DFE0E0',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginRight:15,
    },
    position:{
        color:COLOR.black,
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.medium,
    },
})
import React, { useState } from "react";
import { View, TouchableOpacity, Modal,Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import FilterHeader from '../../component/header/FilterHeader';
import { recruitList } from "../../row/data";
import CustomButton from "../../component/Button/CustomButton";
import CheckBox from '@react-native-community/checkbox';



import  WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Drop from '../../assets/svg/filter/Drop.svg'
import Ticks from '../../assets/svg/filter/Ticks.svg'
import CustomFooter from "../../component/Bottom/CustomFooter";


export default RecruitmentScreen = (props) => {

    const [change, setChange] = useState(false)
    const [data, setData] = useState(recruitList)
    const [modalVisible, setModalVisible] = useState(false);

    const changes = (ind) => {
        var arr = []
        for(var i = 0; i<recruitList.length; i++)
        {
            if(ind == i || recruitList[i].status)
            {
            arr.push({
                'name' : recruitList[i].name,
                'title' : recruitList[i].title,
                'subtitle' : recruitList[i].subtitle,
                'status' : true
            })
            }
            else
            {
                arr.push(recruitList[i]);
            }
        }
        setData(arr);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <View style={styler.container}>
                <View style={{}}>
                    <Text style={styler.title}>My Recruitment</Text>
                </View>

                <View style={styles.searchView}>
                    <View style={styles.searchBar}>
                        <WFSearch />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={'white'}
                            placeholder="Search for athlete / team"
                        />
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
                    <Text>100 athlete are recruited by you.</Text>
                    <TouchableOpacity
                                onPress={() =>setModalVisible(true)}>
                    <ImageBackground 
                            source={require('../../assets/images/sort.png')}
                            style={{height:38,width:116,alignItems:"center",justifyContent:"space-between",flexDirection:"row",paddingHorizontal:10}}
                        >
                        <Text style={{fontSize:14,color:'black'}}>Sort By</Text>
                        <Drop/>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical:'3%',flexDirection:"row",alignItems:'center'}}>
                    <CheckBox
                        value={change}
                        disabled={false}
                        onChange={() => setChange(!change)}
                    />
                    <Text style={[styler.greenText,{color:'grey'}]}>Unfollow athlete</Text>
                </View>
            </View>

            <View style={styler.containerBox}>

            <FlatList
                style={{}}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                <TouchableOpacity onPress={()=> props.navigation.push('RecruiterProfile')} style={styler.box}>
                    <View style={[styler.imgPart,{width:WIDTH/100*25}]}>
                        <View style={{height:40,width:40,backgroundColor:'grey',borderRadius:100}}></View>
                    </View>
                    <View style={styler.textPart}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={[styles.news,{marginVertical:5}]}>{item.title}</Text>
                    <Text style={styles.news}>{item.subtitle}</Text>
                    </View>
                    <View style={[styler.imgPart,{left:WIDTH/100*10}]}>
                        <TouchableOpacity onPress={()=>{changes(index)}} style={[styler.tickBox, item.status ? {backgroundColor:'#00A962'} : {backgroundColor:'grey'}]}>
                            {item.status ? <Ticks/> :null }
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>}/>
            </View>
            <CustomFooter
                    expert={true}
                    onClick={() =>props.navigation.push('AthleteOpening')} 
                    prop={props}
                    onHome={() =>props.navigation.push('ExpertDashboardScreen')}
                    onSecond={()=>props.navigation.push('RecruitmentScreen')}
                    onFourth={()=>props.navigation.push('AthleteTabbar')}
                    onProfile={()=>props.navigation.push('AthleteProfile')}/>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styler.centeredView}>
                        <View style={styler.modalView}>
                            <TouchableOpacity 
                                    onPress={()=> setModalVisible(!modalVisible)}
                                    style={{ alignItems: 'center',flexDirection:"row" }}>
                                <Text style={styles.title}> All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                    onPress={()=> setModalVisible(!modalVisible)}
                                    style={{ alignItems: 'center',flexDirection:"row" }}>
                                <Text style={styles.title}> Name</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={{ alignItems: 'center',flexDirection:"row" }}>
                                <Text style={styles.title}> Date</Text>
                            </TouchableOpacity> */}
                            </View>
                    </View>
                </Modal>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT / 100 * 25,
        paddingHorizontal: WIDTH / 100 * 5,
        paddingVertical: HEIGHT / 100 * 2,
    },
    containerBox: {
        width: WIDTH,
        height: HEIGHT / 100 * 68,
        paddingVertical: HEIGHT / 100 * 2,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingRight:15,
        marginTop:HEIGHT/100*22,
        backgroundColor:'rgba(0, 0, 0, 0.5)'
      },
    greenText: {
        color: COLOR.green,
        fontSize: FONT_SIZE.medium
    },
    imgPart:{
        width:WIDTH / 100 * 20,
        height:HEIGHT/100*12,
        alignItems:'center',
        justifyContent:'center'
    },
    textPart:{
        width:WIDTH / 100 * 45,
        height:HEIGHT/100*12,
        paddingLeft:15,
        justifyContent:'center'
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.semibold,
    },
    positionBox: {
        height: 25,
        width: 30,
        backgroundColor: '#DFE0E0',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    position: {
        color: COLOR.black,
        fontSize: FONT_SIZE.small,
        fontWeight: FONT_WEIGHT.medium,
    },
    box:{
        height:HEIGHT/100*12,
        width:WIDTH / 100 * 90,
        backgroundColor:COLOR.blue,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:'space-between',
        marginVertical:10
        // paddingLeft: WIDTH / 100 * 5,
    },
    tickBox:{
        height:40,
        width:40,
        backgroundColor:'grey',
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    modalView : {
        backgroundColor: COLOR.primary,
        borderRadius: 10,
        height:'17%',
        width:'30%',
        justifyContent:'space-between',
        paddingVertical: '5%',
        paddingHorizontal:'3%',
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})
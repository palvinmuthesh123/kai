import React, { useState } from "react";
import { View, TouchableOpacity, Image, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from "../../component/Button/CustomButton";

import Drop from '../../assets/svg/athlete/Drop.svg'
import Fav from '../../assets/svg/filter/Fav.svg'
import { allCampaign, responses, sportsCampaign, timeLine } from "../../row/data";
import CampaignHeader from "../../component/header/CampaignHeader";
import CustomFooter from "../../component/Bottom/CustomFooter";

export default CampaignScreen = (props) => {

    const [modalVisible,setModalVisible] =useState(false)
    const [select , setselect] = useState()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <CampaignHeader 
                    title={true} name={'Campaign'} 
                    onAdd={() => props.navigation.push('AddCampaign')}
                    onNote ={() =>props.navigation.push('NotificationScreen')}/>
            <View style={{ height: HEIGHT / 100 * 6, width: WIDTH, }}>
                <FlatList
                    data={timeLine}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    renderItem={({ item, index }) =>
                        <View style={styler.blueBox}>
                            <Text style={[styler.blueBoxfill,select == index ? {color:'white'} :{}]}>{item.time}</Text>
                        </View>} />
            </View>
            <ScrollView style={styler.container}>
                <View style={styler.header}>
                    <View>
                        <Text style={styler.Heading}>Top Sports Campaigns</Text>
                    </View>
                    <View style={styler.allBox}>
                        <Text>All</Text>
                        <Drop />
                    </View>
                </View>

                <LinearGradient
                    end={{ x: 1, y: 0 }}
                    start={{ x: 0, y: 2 }}
                    // colors={['#14BC66', '#192D51']}
                    colors={props.space ? ['rgba(20,188,102,0.4)', 'rgba(25,45,81,0.4)'] : ['#14BC66', '#192D51']}
                    style={[
                        styler.gradientContainer,]}>
                    <FlatList
                        data={sportsCampaign}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        renderItem={({ item, index }) =>

                            <View style={styles.cupView}>
                                <View style={styles.imgView}>
                                    <Image
                                        source={(item.image)}
                                        style={{ height: 70, width: 70, borderRadius: 100, }} />
                                </View>
                                <View style={styles.cupTitView}>
                                    <Text style={styles.cupTitle}>{item.title}</Text>
                                </View>
                                <View style={styles.dateView}>
                                    <Text style={styles.dateText}>{item.time}</Text>
                                </View>
                                <View style={styles.placeView}>
                                    <Text style={styles.placeText}>{item.place}</Text>
                                </View>
                            </View>} />
                </LinearGradient>

                <View style={{marginVertical:5}}>
                    <Text style={styler.Heading}>All Campaigns</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <FlatList
                        data={allCampaign}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        renderItem={({ item, index }) =>   
                <TouchableOpacity 
                    onPress={() => props.navigation.push('CampaignDetail')}
                    style={styler.camBox}>
                    <View style={{height:HEIGHT/100*20,alignItems:"center",justifyContent:'center'}}>
                        <ImageBackground 
                                source={(item.image)}
                                style={{height:'100%',width:'100%',alignItems:"flex-start",justifyContent:"flex-end"}}>
                            <View style={styler.dateBox}>
                                <Text style={{width:30,textAlign:'center'}}> Feb 09</Text>
                                <Text> -</Text>
                                <Text style={{width:30,textAlign:'center'}}> Mar 11</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styler.detailBox}>
                        <View style={[styler.header,{marginVertical: '2%',}]}>
                            <Text>{item.place}</Text>
                            <Fav />
                        </View>
                        <Text style={styles.BigTitle}>{item.title}</Text>
                        <View style={{alignItems:"center",marginTop:7,}}>
                        <LinearGradient
                    end={{ x: 1, y: 0 }}
                    start={{ x: 0, y: 2 }}
                    colors={['#14BC66', '#192D51']}
                    style={[
                        styler.btn,]}>
                            <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>Join</Text>
                        </LinearGradient>
                        </View>
                    </View>
                </TouchableOpacity>}/>

                </View>
            </ScrollView>
            <CustomFooter 
                    onClick={() =>setModalVisible(!modalVisible)} 
                    visible={modalVisible}
                    prop={props}
                    onHome={() =>props.navigation.push('CampaignScreen')}
                    onSecond={()=>props.navigation.push('MyCampaigns')}
                    onFourth={()=>props.navigation.push('SavedCampaigns')}
                    onProfile={()=>props.navigation.push('ProfileScreen')}/>


        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        height: HEIGHT / 100 * 78,
        width: '100%',
        paddingHorizontal: WIDTH / 100 * 5,
    },
    gradientContainer: {
        // height: HEIGHT / 100 * 25,
        width: WIDTH / 100 * 90,
        borderRadius: 6,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    dateBox:{
        height:40,
        width:80,
        borderRadius:10,
        backgroundColor:'#D7f6E9',
        margin:15,
        paddingHorizontal:2,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center"
    },
    btn: {
        width: WIDTH / 100 * 60,
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems:'center'
    },
    camBox:{
        width: WIDTH / 100 * 89,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor:'white',
        elevation:3
    },
    detailBox:{
        width: WIDTH / 100 * 89,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '5%',
    },
    blueBox: {
        backgroundColor: COLOR.blue,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginLeft: 10,
    },
    blueBoxfill: {
        color: 'rgba(254, 254, 254, 0.62)',
        fontSize: FONT_SIZE.compact,
    },
    allBox: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000000',
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 5,
        width: '30%'
    },
    Heading: {
        fontSize: FONT_SIZE.compact,
        color: COLOR.black,
        fontWeight: FONT_WEIGHT.medium,
    },

})
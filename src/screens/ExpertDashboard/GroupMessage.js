import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import DocumentPicker, {
    isInProgress,
    types,
} from 'react-native-document-picker';

import Camera from '../../assets/svg/filter/Camera.svg'
import Add from '../../assets/svg/filter/Add.svg'
import Back from '../../assets/svg/group/Back.svg'
import Boy from '../../assets/svg/group/MiniBoy.svg'
import Ball from '../../assets/svg/group/MiniBall.svg'
import Small from '../../assets/svg/group/SmallBoy.svg'
import SBall from '../../assets/svg/group/Ball.svg'
import Wrong from '../../assets/svg/group/Wrong.svg'
import { GroupChats } from "../../row/data";

export default GroupMessage = (props) => {

    const [change, setChange] = useState(false)
    const [expand, setExpand] = useState(false)
    const [chating, setChating] = useState([]);
    const [texts, setTexts] = useState();
    const [group, setGroup] = useState();

    function sets() {
        var arr = chating;
        var values = {
            'name': texts,
            'whom': 'me',
            'time': "02:22"
        }
        var values1 = {
            'name': 'OK Sure',
            'whom': 'them',
            'time': "02:22"
        }
        arr.push(values, values1);
        setChating(arr);
        // setTexts(arr);
    }

    function filePicker() {
        DocumentPicker.pick({
            type: types.images,
        })
            .then(async res => {
                console.log('Response   ', res);
                // addFile(res)
                // setPhoto(res[0].uri);
                // let arr = files;
                // arr.push(res[0]);
                // setFiles(arr);
            })
            .catch(handleError);
    }

    const handleError = err => {
        if (DocumentPicker.isCancel(err)) {
            console.warn('cancelled', err);
        } else if (isInProgress(err)) {
            console.warn(
                'multiple pickers were opened, only the last will be considered',
                err,
            );
        } else {
            console.log('err', err);
            throw err;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <View style={styler.header}>
            <TouchableOpacity 
                onPress={() => props.navigation.goBack()}>
                    <Back />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={styler.smallpro}><Ball /></View>
                    <View style={[styler.smallpro, { marginTop: -15, marginLeft: 12 }]}><Boy /></View>
                </View>
                <View>
                    <Text style={styler.grpName}>{group ? group : props.route.params.datas}</Text>
                    <Text style={styler.actSts}>1 active now</Text>
                </View>
            </View>
            <View style={styler.namebar}>
                <TextInput
                    style={styler.input}
                    placeholderTextColor={'#9699A0'}
                    placeholder="Name this group..."
                    value={group}
                    onChangeText={(text) => setGroup(text)}
                />
                <Wrong />
            </View>


            <ScrollView contentContainerStyle={styler.container}>

                <View style={styler.proView}>
                    <View style={{ marginHorizontal: 20, marginTop:HEIGHT*3/100 }}>
                        <View style={styler.smallpro}><Small /></View>
                        <View style={[styler.smallpro, { marginTop: -15, marginLeft: 12 }]}><SBall /></View>
                    </View>
                    <Text style={{color:"black",marginTop:HEIGHT*2/100,width:'60%',textAlign:"center"}}>
                    {group ? group : props.route.params.datas}
                    </Text>
                    <Text style={{fontSize:13,marginTop:HEIGHT*1/100}}>
                        You follow to people
                    </Text>
                    <View style={styler.nameBars}> 
                        <Text 
                            style={{color:'white',fontSize:FONT_SIZE.medium,fontWeight:FONT_WEIGHT.medium}}>
                        See Group Members</Text> 
                    </View>
                </View>

                {chating.length==0 ? <View style={styler.dateView}>
                    <Text style={{ color: 'black',marginBottom:HEIGHT*2/100 }}>Today 4:09 pm</Text>
                    <Text style={{ color: '#AAB2B7' }}>You created the group.</Text>
                </View>
:
                <FlatList
                    data={chating}
                    inverted
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) =>
                        <View style={[item.whom == 'me' ? { alignItems: "flex-end", marginRight: WIDTH * 10 / 100 } : { marginLeft: WIDTH * 5 / 100 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: WIDTH * 5 / 100, }}>
                                {item.whom == 'me' ? null : <View style={{ height: 70, width: 70, backgroundColor: '#A0A0A0', borderRadius: 100, marginRight: WIDTH * 2 / 100 }}></View>}
                                <View style={[{ paddingVertical: WIDTH * 5 / 100, backgroundColor: "#14BC66", borderRadius: 15, alignItems: 'flex-start' }, item.whom == 'me' ? { width: WIDTH * 50 / 100 } : { width: WIDTH * 60 / 100, backgroundColor: '#19214F' }]}><Text style={{ marginHorizontal: WIDTH * 8 / 100, color: "white" }}>{item.name}</Text></View></View>
                            <Text style={[{ color: "#AAB2B7", fontSize: 13 }, item.whom == 'me' ? null : { textAlign: 'right', width: WIDTH * 80 / 100 }]}>{item.time}</Text>
                        </View>}
                /> }
            </ScrollView>
            <View style={styler.chatbot}>
                <View style={styler.cam}>
                    <TouchableOpacity
                        onPress={() => filePicker()}
                        style={styler.camback}>
                        <Camera />
                    </TouchableOpacity>
                </View>
                <View style={styler.mes}>
                    <TextInput
                        style={styler.input}
                        placeholderTextColor={'#9699A0'}
                        placeholder="Type message here..."
                        value={texts}
                        onChangeText={(text) => setTexts(text)}
                    />
                </View>
                <TouchableOpacity onPress={() => { sets() }} style={styler.cam}>
                    <Add />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT / 100 * 80,
        paddingVertical: HEIGHT / 100 * 2,
        // justifyContent: 'flex-end'
    },
    header: {
        flexDirection: 'row',
        height: HEIGHT / 100 * 7,
        paddingHorizontal: '5%',
        alignItems: 'center'
    },
    proView: {
        alignItems: "center",
        justifyContent: 'center',
        // height:HEIGHT/100*30,
    },
    grpName: {
        color: 'black',
        fontSize: FONT_SIZE.medium,
        width:WIDTH/100*70,
        height:19,
        fontWeight: FONT_WEIGHT.semibold
    },
    namebar: {
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        height: HEIGHT / 100 * 5,
        width: '100%'
    },
    actSts: {
        color: 'grey',
        fontSize: FONT_SIZE.small,
        marginTop: 3
    },
    smallpro: {
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 100
    },
    chatbot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: HEIGHT / 100 * 8,
        borderTopWidth: 2,
        borderTopColor: "#E0E0E0"
    },
    camback: {
        height: 40, width: 40,
        borderWidth: 1,
        borderColor: '#00A962',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cam: {
        width: WIDTH / 100 * 15,
        height: HEIGHT / 100 * 8,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    mes: {
        width: WIDTH / 100 * 70,
        height: HEIGHT / 100 * 8,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    dateView: {
        alignItems: 'center',
        marginVertical: 10,
        flex:1,
        justifyContent:'flex-end'
    },
    nameBars:{
        backgroundColor:COLOR.blue,
        borderRadius:10,
        paddingVertical:7,
        paddingHorizontal:15,
        width:'auto',
        marginVertical:HEIGHT*2/100,
        alignItems:'center',
        justifyContent:'center'
    },
}) 
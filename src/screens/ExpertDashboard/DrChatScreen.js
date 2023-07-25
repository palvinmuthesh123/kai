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
import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import MainHeader from "../../component/header/MainHeader";
import { chats, drChat } from "../../row/data";
import ChatHeader from "../../component/header/ChatHeader";

export default DrChatScreen = (props) => {

    const [change, setChange] = useState(false)
    const [expand, setExpand] = useState(false)
    const [chating, setChating] = useState(chats);
    const [texts, setTexts] = useState();

    function sets() {
        var arr = chating;
        var values = {
            'name' : texts,
            'whom' : 'me',
            'time': "02:22"  
        }
        var values1 = {
            'name' : 'OK Sure',
            'whom' : 'them',
            'time': "02:22"  
        }
        arr.push(values,values1);
        setTexts(arr);
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
            <StatusBar backgroundColor={COLOR.white} />
            <ChatHeader title={'Dr. Astrid Helena'} onPress={() => props.navigation.goBack()}/>
            <ScrollView contentContainerStyle={styler.container}>
                <View style={styler.dateView}>
                    <Text style={{color:'#AAB2B7'}}>Today</Text>
                </View>
                <FlatList
                    data={drChat}
                    inverted 
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) =>
                        <View style={[item.whom=='me' ? {alignItems:"flex-end",marginRight:WIDTH*10/100} : {marginLeft:WIDTH*5/100}]}>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:WIDTH*5/100,}}>
                            {item.whom=='me' ? null : <View style={{height:70, width:70, backgroundColor:'#A0A0A0', borderRadius:100,marginRight:WIDTH*2/100}}></View>}
                            <View style={[{paddingVertical:WIDTH*5/100, backgroundColor:"#14BC66", borderRadius:15,alignItems:'flex-start'},item.whom=='me' ? {width:WIDTH*50/100} : {width:WIDTH*60/100, backgroundColor:'#19214F'}]}><Text style={{marginHorizontal:WIDTH*8/100,color:"white"}}>{item.name}</Text></View></View>
                            <Text style={[{color:"#AAB2B7",fontSize:13}, item.whom=='me' ? null : {textAlign:'right',width:WIDTH*80/100}]}>{item.time}</Text>
                        </View>}
                />
            </ScrollView>
            <View style={styler.chatbot}>
                <View style={styler.cam}>
                    <TouchableOpacity 
                        onPress={()=>filePicker()}
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
                        onChangeText={(text)=> setTexts(text)}
                    />
                </View>
                <TouchableOpacity onPress={()=> {sets()}} style={styler.cam}>
                    <Add />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT / 100 * 82,
        paddingVertical: HEIGHT / 100 * 2,
        justifyContent:'flex-end'
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
    mes:{
        width: WIDTH / 100 * 70,
        height: HEIGHT / 100 * 8,
        alignItems: 'flex-start',
        justifyContent: 'center', 
    },
    dateView:{
        alignItems:'center',
        marginVertical:10,
    },
}) 
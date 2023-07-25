import React, { useState } from "react";
import { View, TouchableOpacity, PermissionsAndroid,ScrollView,ToastAndroid, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import * as ImagePicker from 'react-native-image-picker';
import DocumentPicker, {
    isInProgress,
    types,
  } from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';

import Wrong from '../../assets/svg/post/wrong.svg'
import Image from '../../assets/svg/post/image.svg'
import Camera from '../../assets/svg/post/Camera.svg'
import Gallery from '../../assets/svg/post/Gallery.svg'
import Smiley from '../../assets/svg/post/Smiley.svg'
import Locate from '../../assets/svg/post/Locate.svg'
import Down from '../../assets/svg/post/Down.svg'
import { imagesList } from "../../row/data";


export default AddStory = (props) => {

    const [texts, setTexts] = useState();
    const [photo, setPhoto] = useState();

    

    function post(){
        props.navigation.push('HomeScreen');
        ToastAndroid.show('Story Created Successfully',ToastAndroid.SHORT)
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
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <StatusBar backgroundColor={COLOR.white} />
            <LinearGradient
                end={{ x: 0, y: 0 }}
                start={{ x: 1, y: 1.5 }}
                colors={['#14BC66', '#19214F']}
                style={styler.gradientBox} >
                <View style={styler.header}>
                    <View style={styler.head}> 
                        <View style={{flexDirection:"row",alignItems:'center'}}>
                           <TouchableOpacity
                                    onPress={() => props.navigation.goBack()}>
                                <Wrong/>
                            </TouchableOpacity >
                            <Text style={styler.heading}>Add to story</Text>
                        </View>
                       
                    </View>
                    <View style={{flexDirection:"row",alignItems:'center'}}>
                        <Text style={[styler.heading1,{fontWeight:FONT_WEIGHT.regular}]}>Gallery</Text>
                        <Down/>
                    </View>
                </View>
            </LinearGradient>
            <View style={styler.container}>
            <View style={{paddingTop:5,height:HEIGHT/100*90,alignItems:"center"}}>
                <FlatList
                        data={imagesList}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        numColumns={3}
                        renderItem={({ item, index }) =>
                <TouchableOpacity 
                    onPress={()=> post()}
                    style={{width:WIDTH/100*33,marginBottom:10}}>
                    {item.image}
                </TouchableOpacity>}/>
            </View>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    header: {
        width: WIDTH/100*90,
        height: HEIGHT / 100 * 15,
        paddingVertical:'5%',
        paddingHorizontal:'5%',
        justifyContent:'space-between',
    },
    container:{
        width:'100%',
        height:HEIGHT/100*80,
        // backgroundColor:"red",
        flexDirection:"column",
        justifyContent:'space-between',
        paddingVertical:'5%'
    },
    heading:{
        color:'white',
        marginLeft:20,
        fontSize:FONT_SIZE.compact
    },
    heading1:{
        color:'white',
        marginRight:20,
        fontSize:FONT_SIZE.compact
    },
    gradientBox: {
        width: WIDTH,
        height: HEIGHT / 100 * 15,
    },
    head:{
        flexDirection:"row",
        width: WIDTH/100*90,
        justifyContent:'space-between',
        alignItems:"center"
    },
    pro:{
        height:60,
        width:60,
        backgroundColor:'grey',
        borderRadius:100,
        alignItems:"center",
        justifyContent:'center'
    },
    camView:{
        flexDirection:'row',
        alignItems:'center',
        height:HEIGHT/100*6,
        borderBottomWidth:1,
        borderBottomColor:COLOR.lightGray,
        paddingHorizontal:'5%',
    },
    camText:{
        color:'#464646',
        fontSize:FONT_SIZE.medium,
        marginLeft:10
    },
    camImage:{
        width:'10%',
        alignItems:"center"
    },
    input: {
        width: '90%',
        paddingStart: 5,
        fontSize:FONT_SIZE.large
    },
})
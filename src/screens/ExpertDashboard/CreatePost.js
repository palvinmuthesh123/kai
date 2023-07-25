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


export default CreatePost = (props) => {

    const [texts, setTexts] = useState();
    const [photo, setPhoto] = useState();

    const cameraPermission = async () => {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Heiminspecktor Camera Permission',
              message: 'Heiminspecktor needs access to your camera',
              buttonPositive: 'Allow',
              buttonNegative: 'Cancel',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            await launchCamera();
          } else {
            alert('CAMERA Permission Denied');
          }
        } else {
          await launchCamera();
        }
      };
    
      const launchCamera = async () => {
        try {
          let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
            includeBase64: true,
            maxWidth: 640,
            maxHeight: 480,
            compressImageQuality: 1,
          };
          await ImagePicker.launchCamera(options,async response => {
            console.log('Response = ', response.assets[0]);
            try {
              console.log('Canceled image request ', response.didCancel);
              // addFile(response.assets)
            //   let arr = files;
            //   arr.push(response.assets[0]);
            //   setFiles(arr);
              setPhoto(`data:image/jpg;base64,${response.assets[0].base64}`);
              // adds(response.assets[0].base64);
            } catch (e) {
              console.error('Catch err >>> ', e);
              // handleError;
            }
          });
          
        } catch (error) {
          console.log("first",error)
        }
       
      };

    function post(){
        props.navigation.push('HomeScreen');
        ToastAndroid.show('Post Created Successfully',ToastAndroid.SHORT)
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
                            <Text style={styler.heading}>Create Post</Text>
                        </View>
                        <TouchableOpacity
                                onPress={() => post()}
                                >
                            <Text style={[styler.heading1,{fontWeight:FONT_WEIGHT.semibold}]}> Post</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",alignItems:'center'}}>
                        <View style={styler.pro}>
                            <Image/>
                        </View>
                        <Text style={[styler.heading1,{fontWeight:FONT_WEIGHT.regular}]}>Siyona</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={styler.container}>
                <View style={{height:HEIGHT/100*50,paddingHorizontal:'5%',}}>
                    <TextInput 
                        style={styler.input}
                        placeholderTextColor={'#7ad2ad'}
                        placeholder="Say something..."
                        value={texts}
                        onChangeText={(text)=> setTexts(text)}/>

{!photo ? <View style={[styles.image,{backgroundColor:"white"}]}></View> : <Image style={styles.image} source={{uri: photo}}/>}
                </View>
                <View style={{height:HEIGHT/100*40}}>
                    <TouchableOpacity
                            onPress={() =>cameraPermission()}
                            style={styler.camView}>
                        <View style={styler.camImage}>
                            <Camera />
                        </View>
                        <Text style={styler.camText}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress={() =>filePicker()}
                             style={styler.camView}>
                        <View style={styler.camImage}>
                            <Gallery />
                        </View>
                        <Text style={styler.camText}>Photo / video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styler.camView}>
                        <View style={styler.camImage}>
                            <Smiley />
                        </View>
                        <Text style={styler.camText}>Feeling / activity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styler.camView}>
                        <View style={styler.camImage}>
                            <Locate />
                        </View>
                        <Text style={styler.camText}>Check in</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    header: {
        width: WIDTH/100*90,
        height: HEIGHT / 100 * 20,
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
        marginLeft:20,
        fontSize:FONT_SIZE.large
    },
    gradientBox: {
        width: WIDTH,
        height: HEIGHT / 100 * 20,
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
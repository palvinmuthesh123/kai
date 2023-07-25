import React ,{useState}from "react";
import { View, TouchableOpacity, Text, PermissionsAndroid,FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import * as ImagePicker from 'react-native-image-picker';
import FilterHeader from '../../component/header/FilterHeader';
import CheckBox from '@react-native-community/checkbox';


import Location from '../../assets/svg/filter/Location.svg'
import Camera from '../../assets/svg/athlete/Camera.svg'
import Calender from '../../assets/svg/filter/Calender.svg'
import DropDown from '../../assets/svg/filter/DropDown.svg'
import { positionList } from "../../row/data";
import CustomButton from "../../component/Button/CustomButton";
import FavHeader from "../../component/header/FavHeader";


export default AddCampaign = (props) => {

    const [photo, setPhoto] = useState();

    const CameraPermission = async () => {
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


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor= "transparent" />
            <FavHeader 
                    nothing={true} 
                    title={'MLB'}
                    onPress={() => props.navigation.goBack()}/>
            <View style={styler.container}>
                <TouchableOpacity 
                        onPress={() => CameraPermission()}
                        style={{flexDirection:'row',alignItems:'center'}}>
                    <Camera />
                    <Text style={styler.greenText}>Add Cover Photo</Text>
                </TouchableOpacity>
                <View style={{height:HEIGHT/100*85,width:'100%',paddingVertical:'5%'}}>
                    <View style={{marginVertical:3}}>
                        <View style={[styles.inputBox,{justifyContent:'flex-start'}]}>
                            <TextInput
                                style={styler.input}
                                placeholderTextColor={'grey'}
                                placeholder="Campaign Title  / Name"
                                />
                        </View>
                    </View>

                    <View style={{marginVertical:3}}>
                        <View style={[styles.inputBox,{height:HEIGHT/100*15,alignItems:'flex-start'}]}>
                            <TextInput
                                style={styler.input}
                                multiline={true}
                                placeholderTextColor={'grey'}
                                placeholder="Description"
                                />
                        </View>
                    </View>

                    {/* <View style={{marginVertical:3}}>
                        <View style={[styles.inputBox]}>
                            <Text style={{color:'grey',}}>DOB</Text>
                            <Calender/>
                        </View>
                    </View>

                    */}

                    <View style={{marginVertical:3,flexDirection:"row",justifyContent:'space-between'}}>
                            <View style={[styler.smallBox,{}]}>
                                <Calender/>
                                <View style={{marginLeft:5}}> 
                                    <Text>Start Date</Text>
                                    <Text style={styler.date}>12/02/2023</Text>
                                </View>
                            </View>

                            <View style={[styler.smallBox,{}]}>
                                <Calender/>
                                <View style={{marginLeft:5}}> 
                                    <Text>End Date</Text>
                                    <Text style={styler.date}>12/02/2023</Text>
                                </View>
                            </View>

                    </View>

                    <View style={{marginVertical:3}}>
                        <View style={[styles.inputBox]}>
                            <Text style={{color:'grey',}}>Venue</Text>
                        </View>
                    </View>

                    <View style={{marginVertical:3}}>
                        <View style={[styles.inputBox]}>
                            <Text style={{color:'grey',}}>Host Name</Text>
                        </View>
                    </View>

                    <View style={{marginVertical:3}}>
                        <View style={[styles.inputBox]}>
                            <Text style={{color:'grey',}}>Email ID</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',}}>
                <CustomButton title={'Save'} onPress={()=>props.navigation.push('CampaignScreen')}/>
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
        fontSize:FONT_SIZE.medium,
        marginLeft:10,
    },
    date:{
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.medium,
        color:COLOR.black,
        marginTop:3
    },
    smallBox: {
        marginVertical: HEIGHT / 100 * 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:10,
        backgroundColor: COLOR.white,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 5,
        width:WIDTH/100*43, justifyContent:'flex-start'
    },
})
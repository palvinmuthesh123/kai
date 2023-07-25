import React , {useState}from "react";
import { View, Text, SafeAreaView, StyleSheet,PermissionsAndroid,Platform, ScrollView,Image,TextInput,TouchableOpacity, FlatList, StatusBar } from 'react-native';
import CustomHeader from "../../component/header/CustomHeader";
import { images, statistics } from "../../row/data";
import * as ImagePicker from 'react-native-image-picker';
import { RadioButton } from 'react-native-paper';
import { COLOR, FONT_SIZE, HEIGHT, WIDTH } from "../../theme/typography";
import styles from "./styles";

import Camera from '../../assets/svg/profile/camera.svg'

export default EditProfile = (props) => {
    
    const [value, setValue] = useState('first');
    const [name , setName] = useState('Kaelan Halliday')
    const [country , setCountry] = useState('-')
    // const [files, setFiles] = useState([]);
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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <CustomHeader 
                    title={props.route.params && props.route.params.datas? props.route.params.datas:'Edit Profile'} 
                    back={true} tick={true}
                    onPress={() => props.navigation.push('ProfileScreen')} 
                    onClick={() => props.navigation.push('ProfileScreen')} />
          <ScrollView>
            <View style={styler.container}>
                <View style={styler.profilePart}>
                    {!photo ? <View style={[styles.image,{backgroundColor:COLOR.grey}]}></View> : <Image style={styles.image} source={{uri: photo}}/>}
                    <TouchableOpacity 
                            onPress={() => cameraPermission()}
                            style={styler.camBack}><Camera/></TouchableOpacity>
                </View>
                <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:"flex-start",width:WIDTH/100*90,}}>
                    <Text style={[styles.age,{}]}>Name</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={(text) => setName(text) }/>
                    </View>

                    <Text style={styles.age}>Age</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value="23"/>
                    </View>

                    <Text style={styles.age}>Height</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value="5’8"/>
                    </View>

                    <Text style={styles.age}>Weight</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value="58"/>
                    </View>

                    <Text style={styles.age}>Gender</Text>
                    <View style={[styles.inputBox,{borderBottomWidth:0,width:WIDTH/100*60}]}>
                       <View style={{flexDirection:"row",alignItems:'center'}}>
                            <RadioButton
                                value="first"
                                status={ value === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('first')}
                                color="#00A962"
                            />
                            <Text style={value === 'first' ? {color:COLOR.green} : {color:"#b3b3b3"}}>Female</Text>
                       </View>

                       <View style={{flexDirection:"row",alignItems:'center'}}>
                            <RadioButton
                                value="first"
                                status={ value === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('second')}
                                color="#00A962"
                            />
                            <Text style={value === 'second' ? {color:COLOR.green} : {color:"#b3b3b3"}}>Male</Text>
                       </View>
                    </View>

                    <Text style={styles.age}>Country</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value={country}
                            onChangeText={(text) => setCountry(text) }/>
                    </View>

                    <Text style={styles.age}>Sport</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value="-"/>
                    </View>

                    <Text style={styles.age}>Email</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value="kaelanhalliday@gmail.com"/>
                    </View>

                    <Text style={styles.age}>Contact</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value="+33   4545215525"/>
                    </View>

                    <Text style={styles.age}>Bio</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value="-"/>
                    </View>

                    <View style={{width:'100%',height:130,}}></View>
                </ScrollView>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,
        alignItems: "center",
    },
    profilePart: {
        height: HEIGHT / 100 * 15,
        width: WIDTH / 100 * 90,
        alignItems: 'center',
        marginVertical:HEIGHT/100*2
    },
    camBack:{
        borderColor:COLOR.green,
        borderWidth:1,
        borderRadius:100,
        height:30,
        width:30,
        top:-15,
        left:40,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

})
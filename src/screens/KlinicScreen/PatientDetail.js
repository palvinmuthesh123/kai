import React, { useEffect ,useState} from "react";
import { SafeAreaView, StatusBar, FlatList, Image, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import FavHeader from "../../component/header/FavHeader";
import { RadioButton } from 'react-native-paper';


import Upload from '../../assets/svg/Clinic/Upload.svg'

export default PatientDetail = (props) => {

    const [value, setValue] = useState('first');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <FavHeader nothing={true} title={'New Appointment'} onPress={() => props.navigation.goBack()}/>
            <View style={styler.container}>
                <View style={{marginVertical:'5%'}}>
                    <Text style={styler.name}>Patient Details</Text>
                </View>
                <View style={[styles.inputBox,]}>
                    <TextInput
                    style={styler.input}
                    placeholderTextColor={'grey'}
                    placeholder="Patient Name"
                        />
                </View>
                <View style={[styles.inputBox,]}>
                    <TextInput
                    style={styler.input}
                    placeholderTextColor={'grey'}
                    placeholder="Age"
                        />
                </View>
                <View style={[styles.inputBox,]}>
                    <TextInput
                    style={styler.input}
                    placeholderTextColor={'grey'}
                    placeholder="Height"
                        />
                </View>
                <View style={[styles.inputBox,]}>
                    <TextInput
                    style={styler.input}
                    placeholderTextColor={'grey'}
                    placeholder="Weight"
                        />
                </View>
                <View style={[styles.inputBox,]}>
                    <TextInput
                    style={styler.input}
                    placeholderTextColor={'grey'}
                    placeholder="Blood Group (Optional)"
                        />
                </View>

                <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between',width:'100%'}}>
                    <View style={{flexDirection:'row',alignItems:"center",width:'50%'}}>
                         <RadioButton
                                value="first"
                                status={ value === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('first')}
                                color="#00A962"
                            />
                            <View style={[styles.inputBox,{width:'60%',height: HEIGHT / 100 * 5,}]}>
                                <Text style={value === 'first' ? {color:COLOR.green} : {color:"#b3b3b3"}}>Female</Text>
                            </View>
                    </View>

                    <View style={{flexDirection:'row',alignItems:"center",width:'50%'}}>
                         <RadioButton
                                value="first"
                                status={ value === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('second')}
                                color="#00A962"
                            />
                            <View style={[styles.inputBox,{width:'60%',height: HEIGHT / 100 * 5,}]}>
                                <Text style={value === 'second' ? {color:COLOR.green} : {color:"#b3b3b3"}}>Male</Text>
                            </View>
                    </View>
                </View>

                <View style={[styles.inputBox,{height:HEIGHT/100*15,alignItems:"flex-start"}]}>
                    <TextInput
                    style={styler.input}
                    placeholderTextColor={'grey'}
                    placeholder="Tell your problem"
                        />
                </View>

                <View style={[styles.inputBox,]}>
                    <TextInput
                    style={styler.input}
                    placeholderTextColor={'grey'}
                    placeholder="Upload report"
                        />
                    <TouchableOpacity >
                        <Upload/>
                    </TouchableOpacity>
                </View>

                
            </View>

                <View style={{marginHorizontal:'5%',marginVertical:'5%'}}>
                    <CustomButton title={'Book Appointment'} onPress={() => props.navigation.push('BookingDetail')}/>
                </View>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    container: {
        height: HEIGHT / 100 * 82,
        width: WIDTH,
        paddingHorizontal: WIDTH / 100 * 10,
    },
    name:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
    },
}) 
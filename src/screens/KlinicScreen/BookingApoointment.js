import React, { useEffect , useState} from "react";
import { SafeAreaView, StatusBar, FlatList, Image, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import FavHeader from "../../component/header/FavHeader";
import { RadioButton } from 'react-native-paper';

export default BookingAppointment = (props) => {

    const [value, setValue] = useState('first');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <FavHeader nothing={true} title={'Booking Apoointment'} onPress={() => props.navigation.goBack()} />
                <View style={styler.container}>
                    <Text style={styler.title}>Payment Option</Text>
                    <View style={styles.inputBox}>
                        <Text style={[styler.name,value === 'first' ? {color:'#464646'}:{}]}>Master Card</Text>
                        <RadioButton
                                value="first"
                                status={ value === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('first')}
                                color="#00A962"
                            />
                    </View>

                    <View style={[styles.inputBox,{marginVertical:'3%'}]}>
                        <Text style={[styler.name,value === 'second' ? {color:'#464646'}:{}]}>Paypal</Text>
                        <RadioButton
                                value="first"
                                status={ value === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('second')}
                                color="#00A962"
                            />
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={[styler.name,value === 'third' ? {color:'#464646'}:{}]}>Visa</Text>
                        <RadioButton
                                value="first"
                                status={ value === 'third' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('third')}
                                color="#00A962"
                            />
                    </View>
                </View>
            <View style={styler.btnContainer}>
                <CustomButton 
                    title={'Pay'} 
                    onPress={() => props.navigation.push('AppointmentTabbar')}/>
            </View>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    container: {
        height: HEIGHT / 100 * 82,
        width: WIDTH,
        paddingHorizontal: WIDTH / 100 * 10,
        paddingVertical:HEIGHT/100*2
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.medium,
        marginBottom:'5%'
    },
    name:{
        fontSize:FONT_SIZE.medium,
        color:'black'
    },
}) 
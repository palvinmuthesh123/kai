import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import RegisterHeader from "../../component/header/RegisterHeader";
import CustomButton from "../../component/Button/CustomButton";

import Logo from '../../assets/svg/splash/Logo.svg'
import Eye from '../../assets/svg/login/view.svg';
import Male from '../../assets/svg/register/male.svg'
import Female from '../../assets/svg/register/female.svg'
import { RadioButton } from 'react-native-paper';
import { back } from "../../utils/navigation";

export default CreateAccount2 = (props) => {

    const [change, setChange] = useState(false)
    const [open, setOpen] = useState(true)
    const [value, setValue] = useState('first');
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.white} />
            <RegisterHeader 
                    title={'Create account'} 
                    sub={'3 easy signup process'}
                    onPress={() => props.navigation.goBack()} />
            <View style={{ width: WIDTH, height: HEIGHT / 100 * 6 }}>
            <ProgressHeader 
                two={true}
                progress={0.50}/>
            </View>

            <View style={styles.titleView}>
                <Text style={styles.title}>Select gender</Text>
            </View>

                <View style={styler.containBox}>

                    <View style={styler.mainView}>
                        <View style={styler.subView}>
                            {/* <View style={styler.radio}>
                            <View style={styler.dot}></View>
                        </View> */}
                           <RadioButton
                                value="first"
                                status={ value === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setValue('first')}
                                color="#00A962"
                            />
                            <TouchableOpacity onPress={() => setValue('first')} style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={[styler.imgBack, value === 'first' ? {backgroundColor:'#19214F'} : null]}>
                                    {value === 'first' ? <Female fill={'white'}/> : <Female/>}
                                </View>
                                <Text style={value === 'first ' ? {color:"#00A962"} : {color:"black"}}>Female</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styler.subView}>
                        <RadioButton
                            value="second"
                            status={ value === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setValue('second')}
                            color="#00A962"
                        />
                            <TouchableOpacity onPress={() => setValue('second')} style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <View style={[styler.imgBack, value === 'second' ? {backgroundColor:'#19214F'} : null]}>
                                    {value === 'second' ? <Male /> : <Male/>}
                                </View>
                                <Text style={value === 'second' ? {color:"#00A962"} : {color:"black"}}>Male</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginVertical: '8%' }}>
                        <CustomButton 
                            title={'Next'} 
                            onPress={() => props.navigation.push('CreateAccount3')}/>
                    </View>
                </View>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    containBox: {
        height: HEIGHT / 100 * 60,
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor:'red'
    },
    mainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: '10%',
        // marginVertical:'10%',
        width: WIDTH / 100 * 90,
        height: HEIGHT / 100 * 15,
        // backgroundColor: 'yellow'
    },
    subView: {
        flexDirection: "row",
        width: WIDTH / 100 * 35,
        height: '100%',
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "flex-start",
        // backgroundColor: "red"
    },
    radio: {
        borderWidth: 1,
        borderColor: COLOR.gray,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 22,
        width: 22,
    },
    dot: {
        backgroundColor: COLOR.green,
        borderRadius: 100,
        height: 12,
        width: 12,
    },
    imgBack: {
        borderWidth: 1,
        borderColor: COLOR.gray,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
    },

})

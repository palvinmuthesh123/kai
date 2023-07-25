import React ,{useState} from 'react';
import { View ,TouchableOpacity, ScrollView,SafeAreaView,ToastAndroid,FlatList,StyleSheet,Text,TextInput} from 'react-native';
import { WIDTH , HEIGHT, FONT_SIZE, FONT_WEIGHT, COLOR } from '../../theme/typography';
import FavHeader from '../../component/header/FavHeader';
import CustomButton from '../../component/Button/CustomButton';

import Green from '../../assets/svg/athlete/Green.svg'
import { positionList, recruitingClass, recruitingLevel } from '../../row/data';
import styles from './styles';

export default PostRecruitment = (props) => {

    const[select, setSelect] = useState(false)
    const[select1, setSelect1] = useState(false)
    const[select2, setSelect2] = useState(false)

    function Recruit(){
        props.navigation.push('RecruimentScreen');
        ToastAndroid.show('Recruiment Posted Successfully',ToastAndroid.SHORT)
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <FavHeader 
                nothing={true} 
                title={'Post a recruiting need'}
                onPress={()=>props.navigation.goBack()}
            />
            <ScrollView style={styler.container}>
                <View style={styler.mainPart}>
                    <Text style={styler.ques}>Choose a recruiting class</Text>
                    <View style={{marginTop:20,width:'100%'}}>
                    <FlatList
                            style={{}}
                            data={recruitingClass}
                            // horizontal={true}
                            numColumns={2}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <TouchableOpacity 
                                onPress={() => setSelect(index)}
                                style={{flexDirection:'row',alignItems:"center",width:'50%',marginBottom:20}}>
                            <View style={[styler.dotBack,select == index ? {borderColor:COLOR.green}:{}]}>
                                {select ==index ?<Green/> : null}
                            </View>
                            <Text style={[styler.checker,select ==index? {color:COLOR.green}:{}]}>{item.name}</Text>
                        </TouchableOpacity>}/>
                    </View>
                </View>

                <View style={styler.mainPart}>
                    <Text style={styler.ques}>What position do you need?</Text>
                    <View style={{marginTop:20,width:'100%'}}>
                    <FlatList
                            style={{}}
                            data={positionList}
                            // horizontal={true}
                            numColumns={2}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <TouchableOpacity 
                                onPress={() => setSelect1(index)}
                                style={{flexDirection:'row',alignItems:"center",width:'50%',marginBottom:20}}>
                            <View style={[styler.dotBack,select1 == index ? {borderColor:COLOR.green}:{}]}>
                                {select1 ==index ?<Green/> : null}
                            </View>
                            <Text style={[styler.checker,select1 ==index? {color:COLOR.green}:{}]}>{item.title}</Text>
                        </TouchableOpacity>}/>
                    </View>
                </View>

                <View style={styler.mainPart}>
                    <Text style={styler.ques}>For which level are you recruiting?</Text>
                    <View style={{marginTop:20,width:'100%'}}>
                    <FlatList
                            style={{}}
                            data={recruitingLevel}
                            // horizontal={true}
                            numColumns={2}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <TouchableOpacity 
                                onPress={() => setSelect2(index)}
                                style={{flexDirection:'row',alignItems:"center",width:'50%',marginBottom:20}}>
                            <View style={[styler.dotBack, select2 == index ? {borderColor:COLOR.green}:{}]}>
                                {select2 ==index ?<Green/> : null}
                            </View>
                            <Text style={[styler.checker, select2 ==index? {color:COLOR.green}:{}]}>{item.name}</Text>
                        </TouchableOpacity>}/>
                    </View>
                </View>

                <View style={styler.mainPart}>
                    <Text style={styler.ques}>Add Decription</Text>
                    <View style={styler.inputBox}>
                    <TextInput
                        // secureTextEntry={open}
                        style={styler.input}
                        multiline={true}
                        placeholderTextColor={'grey'}
                        placeholder="Details..." />
                    </View>
                </View>

            </ScrollView>
            <View style={styler.btnContainer}>
                <CustomButton title={'Post Recruitment'} onPress={()=>Recruit()}/>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container:{
        height:HEIGHT/100*82,
        width:WIDTH/100*90,
        marginHorizontal:WIDTH/100*5,
        paddingVertical:HEIGHT/100*2,
        // alignItems:"center",
    }, 
    dotBack:{
        height:20,
        width:20,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#707070',
        borderWidth:1,
        borderRadius:100
    }, 
    btnContainer:{
        height:HEIGHT/100*10,
        width:'100%',
        alignItems:"center",
        justifyContent:'center'
    },
    mainPart:{
        width:'100%',
        paddingVertical:'2%',
    },
    ques:{
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
        color:COLOR.black,
    },
    checker:{
        color:'#464646',
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.medium,
        marginLeft:10,
    },
    inputBox: {
        height: HEIGHT / 100 * 15,
        width: WIDTH / 100 * 85,
        marginVertical: HEIGHT / 100 * 1.2,
        marginHorizontal:WIDTH/100*1,
        backgroundColor: COLOR.white,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 5
    },
    input: {
        width: '90%',
        paddingStart: 5
    },
})
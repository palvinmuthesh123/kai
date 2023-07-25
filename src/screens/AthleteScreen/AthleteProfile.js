import React from 'react';
import { View ,TouchableOpacity, TextInput,StatusBar, SafeAreaView,ScrollView,StyleSheet,Text} from 'react-native';
import styles from './styles';
import { WIDTH , HEIGHT, FONT_SIZE, FONT_WEIGHT ,COLOR ,} from '../../theme/typography';


import Back from '../../assets/svg/filter/Back.svg'
import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Call from '../../assets/svg/athlete/Call.svg'
import Message from '../../assets/svg/athlete/Message.svg'
import Pencil from '../../assets/svg/athlete/Pencil.svg'
import Plus from '../../assets/svg/athlete/Plus.svg'
import Group from '../../assets/svg/athlete/Group.svg'

export default AthleteProfile = (props) => {
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <View style={[styles.searchView, { height: HEIGHT / 100 * 5, }]}>
                <View style={{ width: WIDTH / 100 * 10 }}>
                    <Back />
                </View>
                <View style={[styles.searchBar, { height: HEIGHT / 100 * 4.5, }]}>
                    <WFSearch />
                    <TextInput
                        style={[styles.input, { fontSize: 12, color: 'white', top: 2, }]}
                        placeholderTextColor={'white'}
                        placeholder="Search for athlete / team"
                    />
                </View>
            </View>
            <ScrollView style={styler.container}>
                <View style={styler.ProfilePart}>
                    <View style={styler.imgPart}></View>
                    <View style={styler.pro}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:'90%'}}>
                                <Text style={styler.name}>Mathew J</Text>
                                <Text style={styler.subHead}>Head Coach</Text>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.push('CoachProfile')}> 
                                <Pencil/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styler.subHead}>St. Marry of the Woods College.IN</Text>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                            <Call />
                            <Text style={styler.smallHead}>+65556586256</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                            <Message />
                            <Text style={styler.smallHead}>mathew@gmail.com</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                            <Group />
                            <Text style={styler.smallHead}>250 Connections</Text>
                        </View>
                    </View>
                </View>

                <View style={styler.AddPart}>
                    <View style={styler.titlePart}>
                        <Text style={[styler.title]}>Coaching Experience : 
                            <Text style={[styler.title]}>  7 years</Text>
                        </Text>
                        <TouchableOpacity onPress={() => props.navigation.push('CoachExperience')}> 
                        <Plus/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:10,}}> 
                        <Text style={[styler.subHead,{marginTop:1}]}>Head Coach</Text>
                        <Text style={[styler.subHead,{marginTop:2}]}>St. Marry of the Woods College.IN</Text>
                        <Text style={[styler.subHead,{marginTop:2}]}>2017 - Present</Text>
                        <Text style={[styler.title,{fontSize:12}]}>Add Description...</Text>
                    </View>
                </View>

                <View style={styler.AddPart}>
                    <View style={styler.titlePart}>
                        <Text style={[styler.title]}>Playing Experience : 
                            <Text style={[styler.title]}>  0 years</Text>
                        </Text>
                        <TouchableOpacity onPress={() => props.navigation.push('PlayingExperience')}> 
                        <Plus/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:10,}}> 
                        <Text style={[styler.subHead,{marginTop:1}]}>NAIA</Text>
                        <Text style={[styler.subHead,{marginTop:2}]}>Soccer</Text>
                        <Text style={[styler.subHead,{marginTop:2}]}>St. Marry of the Woods College.IN</Text>
                        <Text style={[styler.subHead,{marginTop:2}]}>2017 - Present</Text>
                    </View>
                </View>

                <View style={styler.AddPart}>
                    <View style={styler.titlePart}>
                        <Text style={[styler.title]}>Coaching Honors and Achievement</Text>
                        <Plus/>
                    </View>
                    <View style={{marginVertical:10,}}> 
                        <Text style={[styler.subHead,{marginTop:1}]}>Coaching honors and achievement will not be displayed to others if empty.</Text>
                    </View>
                </View>

                <View style={styler.AddPart}>
                    <View style={styler.titlePart}>
                        <Text style={[styler.title]}>Education</Text>
                        <Plus/>
                    </View>
                    <View style={{marginVertical:10,}}> 
                        <Text style={[styler.subHead,{marginTop:1}]}>Educations will not be displayed to others if empty.</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container:{
        height:HEIGHT/100*85,
        width:WIDTH,
        paddingVertical:HEIGHT/100*2,
    },  
    pro:{
        width:'65%',
        // height:20,
        paddingHorizontal:10,
        // backgroundColor:'red',
    },
    name:{
        fontSize:FONT_SIZE.large,
        fontWeight:FONT_WEIGHT.medium,
        color:COLOR.black,
    },
    title:{
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
        color:COLOR.blue,
    },
    subHead:{
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular,
        color:'#464646',
    },
    smallHead:{
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular,
        color:'#464646',
        marginLeft:10,
    },
    titlePart:{
        width:'100%',
        flexDirection:'row',
        justifyContent:"space-between",
        alignContent:'center'
    },
    ProfilePart:{
        // height:HEIGHT/100*20,
        width:WIDTH,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'5%',
        paddingVertical:10,
        borderBottomColor:"#E0E0E0",
        borderBottomWidth:1,
    },
    AddPart:{
        width:WIDTH,
        paddingHorizontal:'5%',
        paddingVertical:10,
        borderBottomColor:"#E0E0E0",
        borderBottomWidth:1,
    },
    imgPart:{
        height:150,
        width:'33%',
        backgroundColor:"#FBF8F8",
        borderRadius:10
    },
})
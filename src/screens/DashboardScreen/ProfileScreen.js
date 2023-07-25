import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView,ImageBackground, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import CustomHeader from "../../component/header/CustomHeader";
import { images, statistics } from "../../row/data";
import { COLOR, FONT_SIZE, HEIGHT, WIDTH } from "../../theme/typography";


import Stats from '../../assets/svg/profile/stats.svg'
import Mask from '../../assets/svg/profile/Mask.svg'
import Chat from '../../assets/svg/profile/Chat.svg'
import styles from "./styles";

export default ProfileScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <CustomHeader 
                title={'Profile'} 
                back={true} 
                onPress={()=>props.navigation.goBack()}
                onSet = {() => props.navigation.push('SettingScreen')}/>
            <View style={styler.container}>
                <View style={styler.profilePart}>
                    <View style={styler.nameSide}>
                        <Text style={styles.name}>Kaelan Halliday</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.age}>Athlete</Text>
                            <Text style={[styles.age, { left: 13 }]}>23 years</Text>
                        </View>
                        <Text style={styles.age}>5’8 / 53</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", top: 3 }}>
                            <Stats />
                            <Text style={styles.status}>Connect</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                            onPress={() => props.navigation.push('EditProfile')}
                            style={styler.ImageSide}>
                        <View style={styles.image}></View>
                        <Text style={styles.edit}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styler.staticPart}>
                    <FlatList
                        style={{}}
                        data={statistics}
                        horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <View style={styler.media}>
                                <Text style={[styles.name, { color: COLOR.white }]}>{item.count}</Text>
                                <Text style={[styles.age, { color: COLOR.white }]}>{item.title}</Text>
                            </View>} />
                </View>

                <ScrollView style={{width:WIDTH}}>
                    <View style={{marginVertical:5,marginBottom:20, width: WIDTH / 100 * 90 ,marginHorizontal:WIDTH/100*5}}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between",}}>
                            <Text style={[styles.name, { fontSize: FONT_SIZE.compact }]}>Bio</Text>
                            <Text style={[styles.age, {}]}>Learn more</Text>
                        </View>
                        <View style={{width: WIDTH / 100 * 90 }}>
                            <Text style={[styles.para]}>Community Volunteer, Redhead, Friends of Animals, Water Protector, King of Lies. I like pop-up books.</Text>
                        </View>
                    </View>

                    <View style={{ width: WIDTH }}>
                        <Text style={[styles.name, { fontSize: FONT_SIZE.compact ,marginHorizontal:WIDTH/100*5,marginVertical:10}]}>Feed</Text>
                        <FlatList
                        style={{}}
                        data={images}
                        numColumns={3}
                        // horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <View style={{ width: WIDTH/100*32,marginLeft:WIDTH/100*1 ,marginBottom:HEIGHT/100*0.2}}>
                                <Mask/>
                            </View>}/>
                    </View>
                    <View style={{width:'100%',height:130,}}></View>
                </ScrollView>
            </View>
            
            <TouchableOpacity 
                    onPress={()=> props.navigation.push('MessageScreen',{datas:'Kaelan Halliday'})}
                    style={styles.chatView}>
                <ImageBackground 
                    source={require('../../assets/icons/Bg.png')}
                    style={{height:70,width:70,alignItems:'center',justifyContent:"center"}}>
                        <View style={{top:-3}}><Chat/></View>
                    </ImageBackground>
            </TouchableOpacity>
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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nameSide: {
        flexDirection: "column",
        width: WIDTH / 100 * 60,
    },
    ImageSide: {
        flexDirection: "column",
        width: WIDTH / 100 * 30,
        alignItems: 'flex-end'
    },
    staticPart: {
        height: HEIGHT / 100 * 9,
        width: WIDTH / 100 * 90,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: COLOR.blue,
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: HEIGHT / 100 * 3,
        paddingHorizontal: HEIGHT / 100 * 3,
    },
    media: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH / 100 * 26,
        height: HEIGHT / 100 * 9,
    },

})
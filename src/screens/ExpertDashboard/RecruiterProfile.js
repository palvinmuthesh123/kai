import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, Modal, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

import Menu from '../../assets/svg/filter/Menu.svg'
import Back from '../../assets/svg/filter/Back.svg'
import Video from '../../assets/svg/filter/Video.svg'
import Chat from '../../assets/svg/filter/Chat.svg'
import Delete from '../../assets/svg/message/Delete.svg'
import Block from '../../assets/svg/message/Block.svg'
import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'

export default RecruiterProfile = (props) => {

    const [change, setChange] = useState(false)
    const [expand, setExpand] = useState(false)
    const [texts, setTexts] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <View style={[styles.searchView, { height: HEIGHT / 100 * 5, }]}>
                <TouchableOpacity 
                onPress={() => props.navigation.goBack()}
                style={{ width: WIDTH / 100 * 10 }}>
                    <Back />
                </TouchableOpacity>
                <View style={[styles.searchBar, { height: HEIGHT / 100 * 4.5, }]}>
                    <WFSearch />
                    <TextInput
                        style={[styles.input, { fontSize: 12, color: 'white', top: 2, }]}
                        placeholderTextColor={'white'}
                        placeholder="Search for athlete / team"
                    />
                </View>
            </View>
            <ScrollView contentContainerStyle={styler.container}>
                <View style={styler.profile}>
                    <View style={{ height: 75, width: 75, borderRadius: 100, backgroundColor: '#A0A0A0' }}></View>
                    <Text style={[styler.name, { color: 'black', }]}>Jirapong Gareecharun</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { props.onPress() }}>
                            <LinearGradient
                                end={{ x: 1, y: 0 }}
                                start={{ x: 0, y: 0 }}
                                colors={['#14BC66', '#192D51']}
                                style={[
                                    styles.gradientContainer,]}>
                                <Text style={styles.btnText}>Recruit</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> props.navigation.push('MessageScreen')} style={styles.messagebox}>
                            <Chat />
                            <Text style={[styles.btnText, { color: COLOR.blue }]}>Message</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                                onPress={() =>setModalVisible(true)}
                                style={[styles.messagebox, { width: '12%', marginHorizontal: 0 }]}>
                            <Menu />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styler.about}>
                    <Text style={styler.name}>About</Text>
                    <Text style={styles.age}>22/ F, M</Text>
                    <Text style={styles.age}>5’8 / 125 lbs - 3.0 GPA</Text>
                    <Text style={styles.age}>Winter Springs, FL</Text>
        
                    <TouchableOpacity onPress={() => props.navigation.push('EditProfile',{datas:'About'})}>
                        <Text style={[styler.name, { fontSize: 13 }]}>See Jirapong About info </Text>
                    </TouchableOpacity>
                </View>

                <View style={styler.about}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styler.name}>Videos</Text>
                        <Text style={[styler.name, { fontSize: 13 }]}>See all</Text>
                    </View>
                    <View style={styler.Video}>
                        <Video />
                    </View>
                </View>

                <View style={styler.about}>
                    <Text style={styler.name}>Evaluation</Text>
                    <View>
                        <Text style={[styles.age, { letterSpacing: 1 }]}>
                            Jirapong hasn’t  been evaluated  by his coaches yet. If you add to your recruits then you will be notified when his coaches write their evaluations.
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => { props.onPress() }}>
                        <LinearGradient
                            end={{ x: 1, y: 0 }}
                            start={{ x: 0, y: 0 }}
                            colors={['#14BC66', '#192D51']}
                            style={[
                                styles.gradientContainer,]}>
                            <Text style={styles.btnText}>Recruit</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity 
                                    onPress={()=> setModalVisible(!modalVisible)}
                                    style={{ alignItems: 'center',flexDirection:"row" }}>
                                <View style={{width:'20%'}}>
                                    <Delete/>
                                </View>
                                <Text style={styles.title}> Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                    onPress={()=> setModalVisible(!modalVisible)}
                                    style={{ alignItems: 'center',flexDirection:"row" }}>
                                <View style={{width:'20%'}}>
                                    <Block/>
                                </View>
                                <Text style={styles.title}> Block</Text>
                            </TouchableOpacity>
                            </View>
                    </View>
                </Modal>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        // height: HEIGHT / 100 * 98,
        paddingVertical: HEIGHT / 100 * 2,
    },
    profile: {
        height: HEIGHT / 100 * 28,
        width: WIDTH,
        borderBottomWidth: 2,
        borderBottomColor: "#E0E0E0",
        paddingTop: HEIGHT / 100 * 5,
        paddingHorizontal: WIDTH / 100 * 5,
    },
    about: {
        width: WIDTH,
        borderBottomWidth: 2,
        borderBottomColor: "#E0E0E0",
        paddingVertical: '3%',
        paddingHorizontal: WIDTH / 100 * 5,
    },
    name: {
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.medium,
        fontSize: FONT_SIZE.compact,
        marginVertical: '2%'
    },
    Video: {
        height: 100,
        width: 100,
        borderRadius: 10,
        backgroundColor: '#DFE0E0',
        marginVertical: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
}) 
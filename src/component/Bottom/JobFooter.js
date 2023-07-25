import { Dimensions, View, SafeAreaView, StyleSheet, Text, FlatList,Image, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

import Add from '../../assets/svg/Footer/Add.svg'
import Home from '../../assets/svg/Footer/Home.svg'
import Bookmark from '../../assets/svg/Footer/Bookmark.svg'
import Job from '../../assets/svg/Footer/Job.svg'
import Schedule from '../../assets/svg/Footer/Schedule.svg'
import Profile from '../../assets/svg/Footer/Profile.svg'
import Sport from '../../assets/svg/Footer/Sport.svg'
import Cross from '../../assets/svg/dashboard/crosses.svg'

import { PlusList } from '../../row/data';

const JobFooter = props => {
    return (
        <><SafeAreaView style={styles.appbar}>
            <TouchableOpacity
                style={[styles.mains]}
                onPress={() => {
                    try {
                        props.onHome();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <View>
                    <Home/>
                </View>

            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.mains]}
                onPress={() => {
                    try {
                        props.onSecond();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <View>
                    {props.sport ?<Sport/> :<Job/>}
                </View>

            </TouchableOpacity>

            {!props.visible ? <TouchableOpacity
                style={[styles.mains1]}
                onPress={() => {
                    try {
                        props.onClick();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <View style={[styles.mains1]}>
                    <Add/>
                </View>

            </TouchableOpacity> :

            <View>
            <View style={[styles.mains1]}>
                {!props.visible ? <Add/> : null}
            </View>

            </View>}

            <TouchableOpacity
                style={[styles.mains]}
                onPress={() => {
                    try {
                        props.onFourth();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <View>
                    {props.clinic ?<Schedule/> : <Bookmark/>}
                </View>

            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.mains]}
                onPress={() => {
                    try {
                        props.onProfile();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <View>
                    <Profile/>
                </View>

            </TouchableOpacity>
            
        </SafeAreaView>
        {props.visible ? <View style={styles.modalStyle}>
                <View style={{width:'90%'}}>
                <FlatList
                        style={{}}
                        data={PlusList}
                        numColumns={3}
                        // horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>            
                    <TouchableOpacity 
                            onPress={() => {props.prop.navigation.push(item.screen)}}
                            style={{width:'34%',alignItems:'center'}}>
                    <LinearGradient
                            end={{ x: 1, y: 0 }}
                            start={{ x: 0, y: 0 }}
                            colors={ ['#14BC66', '#192D51']}
                            style={[styles.gradientContainer]}>
                        {item.image}
                    </LinearGradient>
                    <Text style={{fontSize:11,color:'#464646',}}>{item.name}</Text>
                    </TouchableOpacity>
                
                }/>
                </View>
                <TouchableOpacity onPress={() => {
                    try {
                        props.onClick();
                    } catch (e) {
                        console.log(e);
                    }
                }} style={{position:"absolute",bottom:-55,right:WIDTH*29/100}}>
                    <Cross/>
                </TouchableOpacity> 
        </View>: null}</>
    );
};

export default JobFooter;

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('window').width,
        height: HEIGHT / 100 * 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: WIDTH/100*5,
        flexDirection: 'row',
        backgroundColor:'white',
        elevation:3
        // borderWidth:1,
        // borderColor:'red'
    },
    gradientContainer: {
        height: 50,
        width: 50,
        marginRight:WIDTH/100*3.5,
        marginTop:15,
        marginLeft:2,
        marginBottom:3,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: 'center',
    },
    mains: {
        justifyContent:'center',
        alignItems:'center'
    },
    mains1: {
        height: HEIGHT / 100 * 10,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginTop:-10,
        zIndex:6
    },
    modalStyle:{ 
        position:'absolute',
        bottom:50,
        paddingHorizontal:15,
        backgroundColor:"#FFFC",
        alignItems:"center",
        height:HEIGHT*40/100, 
        width:WIDTH*80/100, 
        marginLeft:WIDTH*10/100,
        borderWidth:2,
        borderColor:COLOR.green,
        borderRadius:15,
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue',
        // height: HEIGHT*30/100,
      },
      modalView: {
        backgroundColor: COLOR.primary,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width:'100%',
        paddingTop: 30,
        paddingHorizontal:'5%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor:'blue',
      },
});

import React , {useState} from "react";
import {View, Text ,TextInput,TouchableOpacity, FlatList, SafeAreaView,StyleSheet} from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, HEIGHT, WIDTH } from "../../theme/typography";

import Back from '../../assets/svg/dashboard/Close.svg'
import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Imager from '../../assets/svg/dashboard/Imagen.svg'
import { availTime, imagesList, timeLine } from "../../row/data";

export default SearchScreen = (props) => {

    const [select , setselect] = useState()

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
           <View style={[styles.searchView, { height: HEIGHT / 100 * 5, }]}>
                <TouchableOpacity 
                        onPress={() =>props.navigation.goBack()}
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

            <View style={{ height: HEIGHT / 100 * 5, width: WIDTH, }}>
                <FlatList
                    data={[
                        {'time':'Top'},{'time':'Account'},{'time':'Shorts'},{'time':'Shorts'},{'time':'Account'},
                    ]}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity 
                                onPress={() => setselect(index)}
                                style={styler.blueBox}>
                            <Text style={[styler.blueBoxfill, select == index ? {color:'white'} :{}]}>{item.time}</Text>
                        </TouchableOpacity>} />
            </View>
            <View style={{paddingTop:10,height:HEIGHT/100*90,alignItems:"center"}}>
                <FlatList
                        data={imagesList}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        numColumns={3}
                        renderItem={({ item, index }) =>
                <View style={{width:WIDTH/100*33,marginBottom:10}}>
                    {item.image}
                </View>}/>
            </View>

        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    blueBox: {
        backgroundColor: COLOR.blue,
        // paddingVertical: 5,
        justifyContent:'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginLeft: 10,
    },
    blueBoxfill: {
        color: 'rgba(254, 254, 254, 0.62)',
        fontSize: FONT_SIZE.medium,
    },
})
import React from 'react';
import { View ,TouchableOpacity, SafeAreaView,StyleSheet,Text} from 'react-native';
import { WIDTH , HEIGHT, FONT_SIZE, FONT_WEIGHT } from '../../theme/typography';

export default AthleteSearch = (props) => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
            <View style={styler.container}>
                <Text style={styler.discover}>Discover more athletes</Text>
                <TouchableOpacity onPress={()=> props.navigation.push('AthleteOpening')}>
                    <Text style={[styler.click,{textDecorationLine:'underline',}]}>View 16,823 athletes profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container:{
        height:HEIGHT/100*85,
        width:'100%',
        paddingVertical:'15%',
        paddingHorizontal:'5%',
        alignItems:"center",
    },  
    discover:{
        fontSize:FONT_SIZE.xl,
        fontWeight:FONT_WEIGHT.medium,
        color:'#000000',
    },
    click:{
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.regular,
        marginTop:10,
        color:'#00A962',
    },
})
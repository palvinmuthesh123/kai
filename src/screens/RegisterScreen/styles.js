import { ScaledSheet } from 'react-native-size-matters';
import { COLOR, HEIGHT, WIDTH,FONT_SIZE,FONT_WEIGHT } from '../../theme/typography';

export default ScaledSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center',
        backgroundColor:COLOR.white,
    },
    titleView:{
        marginHorizontal:WIDTH/100*5,
        marginVertical:WIDTH/100*5,
        width:WIDTH/100*90,
        height:HEIGHT/100*15,
        // backgroundColor:'red',
        justifyContent:'center',
    },
    
    title: {
        fontSize: FONT_SIZE.higantic,
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.medium,
        lineHeight:50
    },
    greenText:{
        color:COLOR.green,
        marginHorizontal:15,
        fontSize:FONT_SIZE.medium
    },
    input: {
        width:'90%',
    },
})
import { ScaledSheet } from 'react-native-size-matters';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


export default ScaledSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT/100*80,
        paddingVertical:HEIGHT/100*2
    },
    inputBox: {
        height: HEIGHT / 100 * 6,
        width: WIDTH / 100 * 90,
        marginVertical: HEIGHT / 100 * 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLOR.white,
        paddingHorizontal: 15,
        borderRadius: 10,
        elevation: 5
    },
    input: {
        width: '90%',
        paddingStart: 5
    },
    cupView:{
        height:HEIGHT/100*23,
        width:WIDTH/100*20,
        marginLeft:8,
    },
    imgView:{
        height:HEIGHT/100*10.5,
    },
    placeView:{
        height:HEIGHT/100*5,
    },
    cupTitView:{
        height:HEIGHT/100*5.5,
    },
    dateView:{
        height:HEIGHT/100*3,
        // backgroundColor:"yellow",
    },
    cupTitle:{
        color:COLOR.white,
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.medium,
        // marginVertical:4,
    },
    dateText:{
        color:'#DFE0E0',
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular,
    },
    placeText:{
        color:'#DFE0E0',
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular,
    },
    BigTitle:{
        color:'black',
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.semibold
    },
})
import { ScaledSheet } from 'react-native-size-matters';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

export default ScaledSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLOR.lightGray,
    },
    bannerView:{
        width:'100%',
        height:HEIGHT/100*24,
        // backgroundColor:'red'
    },
    bannerImg:{
        height:'100%',
        Width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
        marginVertical:5
    },
    title1:{
        color:COLOR.black,
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.medium,
        // marginVertical:5
    },
    content:{
        color:'#464646',
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular,
    },
    viewBox:{
        paddingVertical:5,
        paddingHorizontal:15,
        marginLeft:10,
        backgroundColor:'#DFE0E0',
        borderRadius:5
    },
    searchView:{
        flexDirection:"row",
        width:WIDTH/100*90,
        height:HEIGHT/100*5,
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:'5%',
      },
      searchBar:{
        backgroundColor:COLOR.green,
        flexDirection:"row",
        alignItems:"center",
        width:'100%',
        height:HEIGHT/100*4.5,
        borderRadius:10,
        paddingHorizontal:15,
      },
      input:{
        fontSize:13,
        top:3,
        width:'90%'
      },
})
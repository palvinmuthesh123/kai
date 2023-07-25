import { ScaledSheet } from 'react-native-size-matters';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


export default ScaledSheet.create({
    
    name:{
        color:COLOR.blue,
        fontSize:FONT_SIZE.large,
        fontWeight:FONT_WEIGHT.medium,
        marginVertical:3
    },
    para:{
        color:COLOR.xGray,
        marginVertical:3,
        fontSize: FONT_SIZE.compact,
        lineHeight:30
    },
    age:{
        color:COLOR.textGray,
        fontSize:FONT_SIZE.small,
        marginVertical:3
    },
    status:{
        color:COLOR.green,
        fontSize:13,
        left:7,
    },
    edit:{
        textAlign:'center',
        width:90,
        fontSize:FONT_SIZE.small,
        textDecorationLine:'underline',
        top:5,
        color:COLOR.black
    },
    image:{
        height:90,
        width:90,
        borderRadius:8,
        backgroundColor:COLOR.gray,
    },
    chatView:{
        position:'absolute',
        paddingHorizontal:'3%',
        paddingVertical:'25%',
        justifyContent:"flex-end",
        alignItems:'flex-end',
        position:'absolute',
        zIndex:6,
        bottom: 0, 
        right:0
    },
    inputBox: {
        borderBottomWidth: 1,
        borderBottomColor: COLOR.grey,
        height: HEIGHT / 100 * 5.5,
        width: WIDTH / 100 * 90,
        marginVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width:'90%',
    },
    searchView:{
        flexDirection:"row",
        width:WIDTH/100*90,
        height:HEIGHT/100*6,
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:'5%',
        paddingHorizontal:'5%'
      },
      searchBar:{
        backgroundColor:COLOR.green,
        flexDirection:"row",
        alignItems:"center",
        width:'100%',
        height:HEIGHT/100*5.5,
        borderRadius:10,
        paddingHorizontal:5,
      },
})
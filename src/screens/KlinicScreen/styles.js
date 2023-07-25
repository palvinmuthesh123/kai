import { ScaledSheet } from 'react-native-size-matters';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT ,WIDTH} from '../../theme/typography';

export default ScaledSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLOR.lightGray,
    },
    searchView: {
        flexDirection: "row",
        width: WIDTH / 100 * 90,
        height: HEIGHT / 100 * 5,
        // paddingHorizontal:WIDTH/100*5,
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchBar: {
        backgroundColor: COLOR.green,
        flexDirection: "row",
        alignItems: "center",
        width: WIDTH / 100 * 77,
        height: HEIGHT / 100 * 4.7,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    mesBox:{
        height:60,
        width:60,
        borderWidth:3,
        borderColor:COLOR.blue,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"
    },
    chatView:{
        position:'absolute',
        paddingHorizontal:'3%',
        paddingVertical:'30%',
        justifyContent:"flex-end",
        alignItems:'flex-end',
        position:'absolute',
        zIndex:6,
        bottom: 0, 
        right:0
    },
    inputBox: {
        height: HEIGHT / 100 * 6,
        width: WIDTH / 100 * 80,
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
    messageBox:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:'100%',
        paddingVertical:1,
        borderBottomColor:"rgba(0, 0, 0, 0.04)",
        borderBottomWidth:1
    },
    countBox:{
        height:20,width:20,
        backgroundColor:COLOR.blue,
        borderRadius:100,marginTop: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    apply:{
        color:'white',
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.medium
    },
    remove:{
        color:'#19214F',
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.medium
    },
   
})
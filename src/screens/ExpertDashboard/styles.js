import { ScaledSheet } from 'react-native-size-matters';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


export default ScaledSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT/100*80,
        paddingHorizontal:WIDTH/100*5,
        paddingVertical:HEIGHT/100*2
    },
    gradientBox:{
        height:HEIGHT/100*41,
        width:WIDTH/100*90,
        // right:10,
      },
      connectBox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'grey',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center'
      },
      connect: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.semibold
      },
      news: {
        color: '#DFE0E0',
        fontWeight: FONT_WEIGHT.regular,
        fontSize: 13,
      },
      name: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.medium,
        fontSize: FONT_SIZE.medium
      },
      address: {
        color: '#AAB2B7',
        fontSize: FONT_SIZE.small,
        marginHorizontal: 5
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
      gradientContainer: {
        height: HEIGHT / 100 * 5,
        width: WIDTH / 100 * 35,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: 'center',
        marginVertical:'3%'
    },
    btnText: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.semibold,
        fontSize: FONT_SIZE.compact
    }, 
    messagebox:{
      height: HEIGHT / 100 * 5,
        width: WIDTH / 100 * 35,
        borderRadius: 7,
        borderColor:COLOR.blue,
        borderWidth:1,
        alignItems: "center",
        justifyContent: 'space-evenly',
        marginVertical:'3%',
        marginHorizontal:'5%',
        flexDirection:'row',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight:15,
      marginTop:-40,
      backgroundColor:'rgba(0, 0, 0, 0.5)'
    },
   modalView : {
      backgroundColor: COLOR.primary,
      borderRadius: 10,
      height:'13%',
      width:'30%',
      justifyContent:'space-between',
      paddingVertical: '5%',
      paddingHorizontal:'3%',
      // alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title:{
      color:COLOR.black,
      fontSize:FONT_SIZE.compact,
      fontWeight:FONT_WEIGHT.medium,
      marginLeft:7,
    },
    image:{
      height:90,
      width:90,
      borderRadius:8,
      backgroundColor:COLOR.gray,
  },
})
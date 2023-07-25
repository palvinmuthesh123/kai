import { ScaledSheet } from 'react-native-size-matters';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


export default ScaledSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT/100*80,
        paddingHorizontal:WIDTH/100*5,
        paddingVertical:HEIGHT/100*2
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
    
})
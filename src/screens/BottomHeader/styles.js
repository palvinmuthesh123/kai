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
})
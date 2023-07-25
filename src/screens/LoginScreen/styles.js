import { ScaledSheet } from 'react-native-size-matters';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';


export default ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    gradientContainer: {
        height: HEIGHT / 100 * 7,
        width: WIDTH / 100 * 90,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    btnText: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.bold,
        fontSize: FONT_SIZE.large
    },
    inputBox: {
        borderBottomWidth: 1,
        borderBottomColor: COLOR.grey,
        height: HEIGHT / 100 * 5,
        width: WIDTH / 100 * 90,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    input: {
        width:'90%',
    },
})
import React from 'react';
import { View, Text ,StyleSheet , TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HEIGHT , WIDTH, COLOR , FONT_WEIGHT , FONT_SIZE , } from '../../theme/typography';

export default CustomButton = (props) => {

    return (
        <View>
            <TouchableOpacity onPress={() => {props.onPress()}}>
                <LinearGradient
                end={{ x: 1, y: 0 }}
                start={{ x: 0, y: 0 }}
                // colors={['#14BC66', '#192D51']}
                colors = {props.space ? ['rgba(20,188,102,0.4)','rgba(25,45,81,0.4)']:['#14BC66', '#192D51']}
                style={[
                    styles.gradientContainer,]}>
                    <Text style={styles.btnText}>{props.title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
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
})
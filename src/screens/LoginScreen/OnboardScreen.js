import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem1, { SLIDER_WIDTH, ITEM_WIDTH } from "../../component/CustomView/CarouselCardItem1";
import { onboardList } from "../../row/data";

import Logo from '../../assets/svg/onboard/smallLogo.svg'
import Chatbot from '../../assets/svg/onboard/Chatbot.svg'
import Imager from '../../assets/svg/onboard/Image.svg'
import Images from '../../assets/svg/onboard/Images.svg'
import CustomButton from "../../component/Button/CustomButton";


export default OnboardScreen = (props) => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.white} />
            <View style={{ height: HEIGHT / 100 * 40 }}>
            {index == 0 ? <Chatbot/> : index==1 ? <Images/> : index==2 ? <Imager/>:null}
            </View>

            <View style={{ height: HEIGHT / 100 * 10, width: WIDTH, alignItems: 'center', }}>
                <Logo />
            </View>

            <Pagination
                dotsLength={onboardList.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 20,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: '#00a962'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />

            <Carousel
                layout="default"
                style={{ elevation: 0 }}
                elevation={0}
                ref={isCarousel}
                data={onboardList}
                renderItem={CarouselCardItem1}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <View style={[styler.btnPart, index == 2 ? { alignItems: 'center', justifyContent: 'center' } : {}]}>
                {index == 0 || index == 1 ? <TouchableOpacity onPress={() => props.navigation.push('LoginScreen')}><Text style={styler.skip}>Skip</Text></TouchableOpacity> :
                    <CustomButton title={'Get Started'} onPress={()=> props.navigation.push('LoginScreen')}/>}
            </View>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    title: {
        fontSize: FONT_SIZE.higantic,
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.bold,
    },
    title1: {
        fontSize: FONT_SIZE.huge,
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.semi_light,
        textAlign: 'center',
        lineHeight: 40,
    },
    content: {
        textAlign: 'center',
        color: 'grey',
        fontSize: FONT_SIZE.medium,
        marginTop: 20,
    },
    btnPart: {
        height: HEIGHT / 100 * 15,
        width: WIDTH,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: '10%',
        paddingVertical: '5%'
    },
    skip: {
        color: COLOR.lightBlue,
        fontSize: FONT_SIZE.compact
    },
})

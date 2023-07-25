import { Dimensions, View, Modal, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React ,{useState}from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

import Add from '../../assets/svg/Footer/Add.svg'
import Home from '../../assets/svg/Footer/Home.svg'
import Bookmark from '../../assets/svg/Footer/Bookmark.svg'
import Schedule from '../../assets/svg/Footer/Schedule.svg'
import Profile from '../../assets/svg/Footer/Profile.svg'

const CustomFooter = props => {

    const [modalVisible,setModalVisible] = useState(true)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Hello</Text>
                </View>
            </View>
        </Modal>
    );
};

export default CustomFooter;

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue',
        height: HEIGHT*40/100
      },
      modalView: {
        backgroundColor: COLOR.primary,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width:'100%',
        paddingTop: 30,
        paddingHorizontal:'5%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor:'blue',
      },
});

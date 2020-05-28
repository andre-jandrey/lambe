import React, { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Dimensions,
    Image
} from 'react-native'
import icon from '../assets/imgs/icon.png'
import { Entypo, FontAwesome } from '@expo/vector-icons'; 
import { AppLoading } from 'expo';


  
class Header extends Component {

   
    render() {
            return (
                <View style={styles.container}>
                    <LinearGradient
                        colors={['#3926B1', '#6B17A3']}
                        start={{ x: 0.5, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            height: 95,
                        }}
                    />
                    <View style={styles.rowContainer}>
                        <Entypo name="menu" size={25} color="#fff" />
                        <Text style={styles.title}>Snatch</Text>
                        <Entypo name="dots-three-horizontal" size={25} color="#fff" />
                    </View>

                    
                </View>
            )
    }


}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        paddingTop: 30,
        padding: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#BBB',
    },
    rowContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        flex: 1,
        textAlign: "center",
        color: '#FFF',
        height: 30,
        textTransform: "uppercase",
        fontSize: 28
    }
})

export default Header
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native'
import icon from '../assets/imgs/icon.png'
import { useNavigation } from '@react-navigation/native';


class Post extends Component {

    render() {
        const { navigation } = this.props;
        let view = null
        if (this.props.posts) {
            view = this.props.posts.map((item, index) => {
                return (
                    <TouchableOpacity
                        style={styles.postContainer}
                        key={index}
                        onPress={() => navigation.navigate('PostDetails', { id: 1 })}   >
                            <View style={styles.containerText} >
                            
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.contaierSubText}>
                                    <Text style={styles.advertiser}>{item.advertiser}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                            </View>
                            <View style={styles.containerImg}>
                                <Image source={item.image} style={styles.image} />
                            </View>
                        </TouchableOpacity>
                )
            })
        }
        return (
            <View style={styles.container}>
                {view}
            </View>
        )


    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"column"
    },
    postContainer: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 10,
        marginTop: 0,
    },
    containerText: {
        flex: 7,
        flexDirection: "column",
        marginTop: 10,
        marginLeft: 10,
        margin: 5,
    },
    containerImg: {
        flex: 3,
        //backgroundColor: '#f0e',
    },
    contaierSubText: {
        flexDirection: "row",
        justifyContent: "flex-end" 
    },
    title: {
        fontSize: 15,
        fontFamily: 'AvenirNext-HeavyItalic',
        fontWeight: "bold",
        /*textAlign: "justify",*/
    },
    advertiser: {
        marginRight: 10,
        color: '#647586'
    },
    date: {
        marginRight: 10,
        color: '#757584'
    },
    image: {
        width: (Dimensions.get('window').width * 0.3) -10,
        height: (Dimensions.get('window').width * 0.3) -20,
        resizeMode: 'cover',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    }
})
export default function(props) {
    const navigation = useNavigation();
  
    return <Post {...props} navigation={navigation} />;
  }

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
        flexDirection:"row"
    },
    containerText: {
        width: Dimensions.get('window').width * 0.8,
        flexDirection: "column",  
    },
    containerImg: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        paddingRight: 20
    },
    contaierSubText: {
        flexDirection: "row",
        justifyContent: "flex-end" 
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20
    },
    advertiser: {
        marginRight: 10,
        color: '#ddd'

    },
    date: {
        marginRight: 10,
        color: '#ddd'

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})
export default function(props) {
    const navigation = useNavigation();
  
    return <Post {...props} navigation={navigation} />;
  }

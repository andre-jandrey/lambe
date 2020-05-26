import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'
import icon from '../../assets/imgs/icon.png'

class Post extends Component {
    render() {
        let view = null
        if (this.props.posts) {
            view = this.props.posts.map((item, index) => {
                return (
                    <View style={styles.postContainer} key={index}>
                        <View style={styles.containerText}>
                            <Text style={styles.title}>{item.title}</Text>
                            <View style={styles.contaierSubText}>
                                <Text style={styles.advertiser}>{item.advertiser}</Text>
                                <Text style={styles.date}>{item.date}</Text>
                            </View>
                        </View>
                        <View style={styles.containerImg}>
                            <Image source={item.image} style={styles.image} />
                        </View>
                    </View>
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
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        resizeMode: 'contain'
    }
})

export default Post
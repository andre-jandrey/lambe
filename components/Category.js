import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    Dimensions
} from 'react-native'

import Colors from '../constants/Colors'
import Post from './Post'

class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.category}>{this.props.name}</Text>
                <Post posts={this.props.posts} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"column"
    },
    category: {
        fontFamily: 'AvenirNext-Regular',
        color: Colors.textPrimary,
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20
    }
})

export default Category
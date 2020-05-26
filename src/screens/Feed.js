import React, { Component } from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import { StyleSheet, FlatList, View } from 'react-native'

class Feed extends Component {
    state = {
        categories: [{
            id: Math.random(),
            name: 'Category One',
            posts: [
                {
                    image: require('../../assets/imgs/fence.jpg'),
                    title:'Título da notícia',
                    date: '2020-05-02',
                    advertiser:'fonte da noticia'
                },
                {
                    image: require('../../assets/imgs/fence.jpg'),
                    title:'Título da notícia 2',
                    date: '2020-05-02',
                    advertiser:'fonte da noticia'
                },
                {
                    image: require('../../assets/imgs/fence.jpg'),
                    title:'Título da notícia 3',
                    date: '2020-05-02',
                    advertiser:'fonte da noticia'
                }
            ]
        },
        {
            id: Math.random(),
            name: 'Category Two',
            posts: [
                {
                    image: require('../../assets/imgs/fence.jpg'),
                    title:'Título da notícia categoria 2',
                    date: '2020-05-02',
                    advertiser:'fonte da noticia'
                },
                {
                    image: require('../../assets/imgs/fence.jpg'),
                    title:'Título da notícia 2 categoria 2',
                    date: '2020-05-02',
                    advertiser:'fonte da noticia'
                },
                {
                    image: require('../../assets/imgs/fence.jpg'),
                    title:'Título da notícia 3 categoria 2',
                    date: '2020-05-02',
                    advertiser:'fonte da noticia'
                }
            ]
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.categories}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Category key={item.id} {...item} />}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
    
export default Feed
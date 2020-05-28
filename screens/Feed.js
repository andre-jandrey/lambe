import React, { Component } from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import { StyleSheet, FlatList, View } from 'react-native'



class Feed extends Component {
    state = {
        categories: [{
            id: Math.random(),
            name: 'Tecnologia',
            posts: [
                {
                    image: require('../assets/imgs/aula.jpg'),
                    title:'Estudo aborda o uso da tecnologia na educação',
                    date: '28/05/2020',
                    advertiser:'fonte da noticia'
                },
                {
                    image: require('../assets/imgs/servicos.jpg'),
                    title:'App de busca de serviços cresce 35% na quarentena',
                    date: '28/05/2020',
                    advertiser:'fonte da noticia'
                },
                {
                    image: require('../assets/imgs/internet.png'),
                    title:'Internet: Pela primeira vez, mais da metade das áres rurais tem...',
                    date: '28/05/2020',
                    advertiser:'fonte da noticia'
                }
            ]
        },
        {
            id: Math.random(),
            name: 'Agricultura',
            posts: [
                {
                    image: require('../assets/imgs/fence.jpg'),
                    title:'Seca atinge a região oeste do Paraná',
                    date: '28/05/2020',
                    advertiser:'fonte da noticia'
                },
                {
                    image: require('../assets/imgs/fence.jpg'),
                    title:'Título da notícia 2 categoria 2',
                    date: '28/05/2020',
                    advertiser:'fonte da noticia'
                },
                {
                    image: require('../assets/imgs/fence.jpg'),
                    title:'Título da notícia 3 categoria 2',
                    date: '28/05/2020',
                    advertiser:'fonte da noticia'
                }
            ]
        }]
    }

    render() {
        return (
            <View style={styles.container}>
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
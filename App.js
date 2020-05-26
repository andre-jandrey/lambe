import React, { Component } from 'react'
import Header from './src/components/Header'
import Category from './src/components/Category'
import { View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} title={'Título da notícia'} date={'2020-05-02'} advertiser={'Anúnciante'} />
      </View>
    )
  }
}


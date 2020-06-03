import React, { Component } from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import Category from '../components/Category'
import { StyleSheet, FlatList, View } from 'react-native'
import { fetchPosts } from '../store/actions/post'


class Feed extends Component {

    componentDidMount = () => {
        console.log('vai coisar')
        this.props.onFetchPosts()
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.posts}
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

const mapStateToProps = ({ posts }) => {
    console.log('mapState')
    console.log(posts)
    return {
        posts: posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    console.log('mapDispatch')

    return {
        onFetchPosts: () =>  dispatch(fetchPosts())
    }
  }
//export default Feed
export default connect(mapStateToProps, mapDispatchToProps) (Feed)
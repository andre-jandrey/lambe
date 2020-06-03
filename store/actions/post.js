import { SET_POSTS } from './actionTypes'

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    console.log('buscando os posts')
    axios.get('/categories.json')
    .catch(err => console.log(err))
        .then(res => console.log(err))
    return dispatch => {
        posts = []
        dispatch(setPosts(posts))
    }
    /*return dispatch => {
        axios.get('/categories.json')
            .catch(err => console.log(err))
            .then(res => {
                console.log(res)
                const rawPosts = res.data
                const posts = []
                posts.push(...res.data)
                /*const posts = []
                for (let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    })
                } hablitar em produção

                Chama o action create para setar os dados
                dispatch(setPosts(posts))
            })
    }*/
}

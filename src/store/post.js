import {getPost,getPosts} from "@/services/posts.service";

const mutations = {
    setPost(state,post){
    state.post = post
    },
    setPosts(state,posts){
    state.posts = posts
    },
    setPostError(state,error){
    state.postsError = error
    }
}

const actions = {
    async fetchPost({commit},id){
        try {
            const post = await  getPost(id)
            commit('setPost',post)
        } catch (err){
            commit('setPostError',err)

        }
    },
    async fetchPosts({commit}){
        try {
            const posts = await  getPosts()
            commit('setPosts',posts)
        } catch (err){
            commit('setPostError',err)
        }
    },
}

const getters = {
    post: ({post}) => post,
    posts: ({posts}) => posts,
    postsError: ({postsError}) => postsError
}
const state = () => ({
    post:{},
    posts: [],
    postsError: null,
})
export default {
    mutations,
    getters,
    actions,
    state
}
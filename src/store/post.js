import {getPost,getPosts} from "@/services/posts.service";

const mutations = {
    setPost(state,post){
    state.post = post
    },
    setPosts(state,posts){
    state.posts = posts
    },
    setPage(state,page){
      state.page = page
    },
    setLoading(state,bool){
        state.isPostsLoading = bool
    },
    setPostError(state,error){
    state.postsError = error
    },
    setSearchQuery(state,searchQuery){
        state.searchQuery = searchQuery
    },
    setTotalPages(state, totalPages) {
        state.totalPages = totalPages
    },

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
    async fetchPosts({state,commit}){
        try {
            commit('setLoading',true);
            const posts = await  getPosts({
                params:{
                    _page: state.page,
                    _limit: state.limit
                }
            });
            commit('setPosts',posts)
        } catch (err){
            commit('setPostError',err)
        } finally {
            commit('setLoading',false);
        }
    },
    async loadMorePosts({state, commit}) {
        try {
            commit('setPage', state.page + 1)
            const posts = await  getPosts({
                params:{
                    _page: state.page,
                    _limit: state.limit
                }
            });
            commit('setTotalPages', Math.ceil(posts.headers['x-total-count'] / state.limit))
            commit('setPosts', [...state.posts, ...posts.data]);
        } catch (e) {
            console.log(e)
        }
    }
}

const getters = {
    post: ({post}) => post,
    posts: ({posts}) => posts,
    postsError: ({postsError}) => postsError,
    searchPosts(state){
        return [...state.posts].filter(post=>post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
}
const state = () => ({
    post:{},
    posts: [],
    isPostsLoading: false,
    postsError: null,
    searchQuery:'',
    page:1,
    limit:3,
    totalPages: 0,
})
export default {
    mutations,
    getters,
    actions,
    state
}
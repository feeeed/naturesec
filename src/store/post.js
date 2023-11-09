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
    setSelectedQuery(state,selectedQuery){
      state.selectedQuery = selectedQuery
    },
    setTotalPages(state, totalPages) {
        state.totalPages = totalPages
    },
    setDialogWin(state){
        state.dialogWin = false
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
    selectedPosts(state){
        return [...state.posts].filter(post=>post.tags.includes(state.selectedQuery))
    },
    searchPosts(state){
        return [...state.posts].filter(post=>post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    },
    selectedPostsAndSearch(state,getters){
        return getters.selectedPosts.filter(post=>post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))

    },
    sortedPosts(state){
        return [...state.posts].filter(post=>post.tags.includes('Услуги'))
    },



}
const state = () => ({
    post:{},
    posts: [],
    isPostsLoading: false,
    postsError: null,
    searchQuery:'',
    selectedQuery:'',
    page:1,
    limit:3,
    totalPages: 0,
    dialogWin: true,
    sortOptions:[
        {value:'Услуги',name:'Услуги'},
        {value: 'Информация',name:'Информация'},
        {value: '',name:'Показать все'}
    ],
})
export default {
    mutations,
    getters,
    actions,
    state
}
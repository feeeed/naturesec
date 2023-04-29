import {getCategory,getCategories} from "@/services/categories.service";

const mutations = {
    setCategory(state,category){
        state.category = category
    },
    setCategories(state,categories){
        state.categories = categories
    },
    setCategoryError(state,error){
        state.categoriesError = error
    }
}

const actions = {
    async fetchCategory({commit},id){
        try {
            const category = await  getCategory(id)
            commit('setCategory',category)
        } catch (err){
            commit('setCategoryError',err)

        }
    },
    async fetchCategories({commit}){
        try {
            const categories = await  getCategories()
            commit('setCategories',categories)
        } catch (err){
            commit('setCategoryError',err)
        }
    },
}

const getters = {
    category: ({category}) => category,
    categories: ({categories}) => categories,
    postsError: ({categoriesError}) => categoriesError
}
const state = () => ({
    category:{},
    categories: [],
    categoriesError: null,
})
export default {
    mutations,
    getters,
    actions,
    state
}
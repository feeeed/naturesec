import {getServiceEk} from "@/services/servicesEk.service";

const mutations = {
    setServiceEK(state,serviceEk){
        state.serviceEk = serviceEk
    },
    setError(state,error){
        state.error = error
    },
}

const actions = {
    async fetchServiceEk({commit},id){
        try{
            const item = await getServiceEk(id)
            commit('setServiceEk',item)
        } catch (err){
            commit('setError',err)
        }
    },

}

const getters = {
    serviceEk:({serviceEk}) => serviceEk,

}

const state = () => ({
    serviceEk:{},
    error:{},

})

export default {
    mutations,
    getters,
    actions,
    state
}
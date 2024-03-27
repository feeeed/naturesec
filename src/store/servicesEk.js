import {getAllServicesEk, getServiceEk} from "@/services/servicesEk.service";

const mutations = {
    setServiceEk(state,serviceEk){
        state.serviceEk = serviceEk
    },
    setError(state,error){
        state.error = error
    },
    setServicesEk(state,servicesEk){
        state.servicesEk = servicesEk
    }
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
    async fetchAllServicesEk({commit}){
        try {
            const items = await getAllServicesEk()
            commit('setServicesEk',items)

        } catch (err){
            commit('setError',err)

        }
    }

}

const getters = {
    serviceEk:({serviceEk}) => serviceEk,
    servicesEk:({servicesEk}) => servicesEk,

}

const state = () => ({
    serviceEk:{},
    error:{},
    servicesEk:[],

})

export default {
    mutations,
    getters,
    actions,
    state
}
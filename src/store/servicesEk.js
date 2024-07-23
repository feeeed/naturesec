import { getAllServicesEk, getServiceEk, getSimilarServicesEk } from "@/services/servicesEk.service";

const mutations = {
  setServiceEk(state, serviceEk) {
    state.serviceEk = serviceEk;
  },
  setError(state, error) {
    state.error = error;
  },
  setServicesEk(state, servicesEk) {
    state.servicesEk = servicesEk;
  },
  setSimilarServicesEk(state, similarServicesEk) {
    state.similarServicesEk = similarServicesEk
  }
};

const actions = {
  async fetchServiceEk({ commit }, id) {
    try {
      const item = await getServiceEk(id);
      commit("setServiceEk", item);
    } catch (err) {
      commit("setError", err);
    }
  },
  async fetchAllServicesEk({ commit }) {
    try {
      const items = await getAllServicesEk();
      commit("setServicesEk", items);
    } catch (err) {
      commit("setError", err);
    }
  },
  async fetchSimilarServicesEk({commit},id) {
    try {
      const items = await getSimilarServicesEk(id);
      commit("setSimilarServicesEk", items);
    } catch (err) {
      commit("setError",err);
    }
  }
};

const getters = {
  serviceEk: ({ serviceEk }) => serviceEk,
  servicesEk: ({ servicesEk }) => servicesEk,
  similarServicesEk: ({similarServicesEk}) => similarServicesEk,
};

const state = () => ({
  serviceEk: {},
  error: {},
  servicesEk: [],
  similarServicesEk: [],
});

export default {
  mutations,
  getters,
  actions,
  state,
};

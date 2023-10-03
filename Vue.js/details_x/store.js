import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projectDescription: 'Описание проекта',
    // Другие состояния проекта
  },
  mutations: {
    setProjectDescription(state, description) {
      state.projectDescription = description;
    },
    // Другие мутации
  },
  actions: {
    updateProjectDescription({ commit }, description) {
      commit('setProjectDescription', description);
    },
    // Другие действия
  },
  getters: {
    getProjectDescription: (state) => state.projectDescription,
    // Другие геттеры
  },
});
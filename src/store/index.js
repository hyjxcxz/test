import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showTrackPanel: false,
  },
  mutations: {
    showTrackPanel(state, showTrackPanel) {
      state.showTrackPanel = showTrackPanel;
    },
  },
  actions: {},
  modules: {},
});

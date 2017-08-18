import Vue from 'vue';
import Vuex from 'vuex';
import createPersist from 'vuex-localstorage'

Vue.use(Vuex);


const store = new Vuex.Store({
  plugins: [createPersist({
    namespace: 'namespace-for-state',
    initialState: {},
    expires: 7 * 24 * 60 * 60 * 1e3
  })],
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

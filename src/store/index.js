import Vue from 'vue';
import Vuex from 'vuex';
import createPersist from 'vuex-localstorage'

Vue.use(Vuex);


const store = new Vuex.Store({
  plugins: [createPersist({
    namespace: 'vuex',
    initialState: {},
    expires: 7 * 24 * 60 * 60 * 1e3
  })],
  state: {
    user: {
      info: null,
      is_login: false
    }
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    user_set (state, user_info) {
      state.user.info = user_info;
      state.user.is_login = true;
    }
  },
  actions: {
  }
});

export default store;

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';
import users from "./user";
import account from "./account";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    account, 
  },
  plugins: [createPersistedState("account")],
});

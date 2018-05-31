import Vue from "vue";
import Vuex from "vuex";
import Counter from "./modules/counter";
import * as actions from "./actions";
import * as mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Counter
  },
  state: {
    value: 20
  },
  getters,
  mutations,
  actions,

});
import * as types from "../types";

const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + " Clicks";
  },
};

const mutations = {
  increment(state, payload) {
    if (payload == null) state.counter++;
    else state.counter += payload;
  },
  decrement: (state, payload) => {
    if (payload == null) state.counter--;
    else state.counter -= payload;
  },
};

const actions = {
  increment: (context, payload) => {
    context.commit("increment", payload);
  },
  decrement(context, payload) {
    context.commit("decrement", payload);
  },
  asyncIncrement: ({
    commit
  }, payload) => {
    setTimeout(() => {
      commit("increment", payload.by);
    }, payload.duration);
  },
  asyncDecrement: ({
    commit
  }, payload) => {
    setTimeout(() => {
      commit("decrement", payload.by);
    }, payload.duration);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
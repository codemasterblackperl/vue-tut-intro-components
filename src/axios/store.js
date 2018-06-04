import Vue from "vue";
import Vuex from "vuex";
import Axios from "./axiosAuth";
import GAxios from "axios";
import Router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      console.log(userData);
      state.idToken = userData.idToken;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearData(state) {
      state.idToken = null;
      state.userId = null;
      state.user = null;
    }
  },
  actions: {
    setLogoutTimer({ dispatch }, expirationTime) {
      setTimeout(() => {
        dispatch("logOut");
      }, expirationTime * 1000);
    },
    signUp({ commit, dispatch }, formData) {
      Axios.post("/signupNewUser?key=AIzaSyCedkOpmkrhxh5A8lrLk8e-u3TdySmTCkE", {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      })
        .then(response => {
          console.log(response);
          commit("authUser", {
            idToken: response.data.idToken,
            userId: response.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + response.data.expiresIn * 1000
          );
          localStorage.setItem("token", response.data.idToken);
          localStorage.setItem("userId", response.data.localId);
          localStorage.setItem("expiresIn", expirationDate);
          dispatch("storeUser", formData);
          dispatch("setLogoutTimer", response.data.expiresIn);
          Router.replace("/dashboard");
        })
        .catch(error => {
          alert(error);
        });
    },
    logIn({ commit, dispatch }, formData) {
      console.log("Login form:", formData);
      Axios.post(
        "/verifyPassword?key=AIzaSyCedkOpmkrhxh5A8lrLk8e-u3TdySmTCkE",
        {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true
        }
      )
        .then(resp => {
          console.log(resp);
          commit("authUser", {
            idToken: resp.data.idToken,
            userId: resp.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + resp.data.expiresIn * 1000
          );
          localStorage.setItem("token", resp.data.idToken);
          localStorage.setItem("userId", resp.data.localId);
          localStorage.setItem("expiresIn", expirationDate);
          dispatch("setLogoutTimer", resp.data.expiresIn);
          Router.replace("/dashboard");
        })
        .catch(error => console.log(error));
    },
    tryAutoLogin({ commit, dispatch }) {
      const token = localStorage.getItem("token");
      if (!token) return;
      const expirationDate = localStorage.getItem("expiresIn");
      const now = new Date();
      if (now >= expirationDate) return;
      const userId = localStorage.getItem("userId");
      commit("authUser", { idToken: token, userId: userId });
      //dispatch("setLogoutTimer", resp.data.expiresIn);
      Router.replace("/dashboard");
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) return;
      GAxios.post("/users.json" + "?auth=" + state.idToken, userData)
        .then(resp => console.log(resp))
        .catch(error => console.log(error));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) return;
      GAxios.get("/users.json" + "?auth=" + state.idToken)
        .then(resp => {
          console.log(resp);
          const data = resp.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          commit("storeUser", users[0]);
          //this.email = users[0].email;
        })
        .catch(error => console.log(error));
    },
    logOut({ commit }) {
      commit("clearData");
      localStorage.clear();
      Router.replace("/signin");
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
});

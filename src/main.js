import Vue from 'vue';
import App from './axios/App.vue';

import router from './axios/router';
import store from './axios/store';

import Axios from "axios";

Axios.defaults.baseURL = "https://vuejs-http-d5903.firebaseio.com";
// Axios.defaults.headers.common['Authorization'] = "Authorized";
// Axios.defaults.headers.get["Accepts"] = "Application/json";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

// import Vue from "vue";
// // import VueResource from "vue-resource";
// //import VueRouter from "vue-router";
// import App from "./state-management/App.vue";
// // import {
// //   routes
// // } from "./route";
// import {
//   store
// } from "./state-management/store/store";

// // Vue.use(VueRouter);
// // const router = new VueRouter({
// //   routes,
// //   //mode: "history",
// //   scrollBehavior(to, from, savedPosition) {
// //     if (savedPosition) {
// //       return savedPosition;
// //     }
// //     if (to.hash) {
// //       return {
// //         selector: to.hash
// //       };
// //     }
// //     return {
// //       x: 0,
// //       y: 400
// //     };
// //   }
// // });
// // router.beforeEach((to, from, next) => {
// //   console.log("global beforeEach");
// //   next();
// // });
// // Vue.use(VueResource);

// // Vue.http.options.root = "https://vuejs-http-d5903.firebaseio.com/";
// // Vue.http.interceptors.push((request, next) => {
// //   console.log(request);
// //   if (request.method == "POST") {
// //     request.method = "PUT";
// //   }
// //   //carefull with adding response interceptors
// //   next(response => {
// //     response.json = () => {
// //       return {
// //         user: response.body
// //       };
// //     };
// //   });
// // });

// new Vue({
//   el: "#app",
//   //router,
//   store,
//   render: h => h(App)
// });
// // Vue.filter("to-lower", (value) => {
// //   return value.toLowerCase();
// // });
// // Vue.directive("highlight", {
// //   bind(el, binding, vnode) {
// //     //el.style.backgroundColor="green";
// //     //el.style.backgroundColor = binding.value;
// //     // if (binding.arg == "background") {
// //     //   el.style.backgroundColor = binding.value;
// //     // } else {
// //     //   el.style.color = "green";
// //     // }
// //     var delay = 0;
// //     if (binding.modifiers["delayed"]) {
// //       delay = 3000;
// //     }
// //     setTimeout(() => {
// //       if (binding.arg == "background") {
// //         el.style.backgroundColor = binding.value;
// //       } else {
// //         el.style.color = "green";
// //       }
// //     }, delay);
// //   }
// // });
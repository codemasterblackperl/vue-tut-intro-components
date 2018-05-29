import Vue from "vue";
import VueResource from "vue-resource";
import App from "./http-vue-resource/App.vue";

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-http-d5903.firebaseio.com/";
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == "POST") {
    request.method = "PUT";
  }
  //carefull with adding response interceptors
  next(response => {
    response.json = () => {
      return {
        user: response.body
      };
    };
  });
});

new Vue({
  el: "#app",
  render: h => h(App)
});
// Vue.filter("to-lower", (value) => {
//   return value.toLowerCase();
// });
// Vue.directive("highlight", {
//   bind(el, binding, vnode) {
//     //el.style.backgroundColor="green";
//     //el.style.backgroundColor = binding.value;
//     // if (binding.arg == "background") {
//     //   el.style.backgroundColor = binding.value;
//     // } else {
//     //   el.style.color = "green";
//     // }
//     var delay = 0;
//     if (binding.modifiers["delayed"]) {
//       delay = 3000;
//     }
//     setTimeout(() => {
//       if (binding.arg == "background") {
//         el.style.backgroundColor = binding.value;
//       } else {
//         el.style.color = "green";
//       }
//     }, delay);
//   }
// });
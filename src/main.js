import Vue from "vue";
import App from "./custom-directives/App.vue";

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    //el.style.backgroundColor="green";
    //el.style.backgroundColor = binding.value;
    // if (binding.arg == "background") {
    //   el.style.backgroundColor = binding.value;
    // } else {
    //   el.style.color = "green";
    // }
    var delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = "green";
      }
    }, delay);
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});

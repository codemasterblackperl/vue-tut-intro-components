<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-local-highlight="'red'">Color this</p>
        <br>
        <p v-highlight:background.delayed="'red'">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 1000;
        }
        setTimeout(() => {
          if (binding.arg == "background") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = "green";
          }
        }, delay);
      }
    }
  }
};
</script>

<style>
</style>

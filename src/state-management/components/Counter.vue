<template>
  <div>
    <button class="btn btn-primary"
            @click="increment(25)">Increment</button>
    <button class="btn btn-primary"
            @click="decrement(25)">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("Counter", ["increment", "decrement"])
    // increment() {
    //   //this.$emit('updated', 1);
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   //this.$emit("updated", -1);
    //   this.$store.commit("decrement");
    // }
  }
};
</script>
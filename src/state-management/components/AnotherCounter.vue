<template>
  <div>
    <button class="btn btn-primary"
            @click="asyncIncrement({by:20,duration:2000})">Increment</button>
    <button class="btn btn-primary"
            @click="asyncDecrement({by:20,duration:1000})">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("Counter", ["asyncIncrement", "asyncDecrement"])
    // increment() {
    //   //this.$emit('updated', 1);
    //   //this.$store.state.counter++;
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   //this.$emit("updated", -1);
    //   //this.$store.state.counter--;
    //   this.$store.commit("decrement");
    // }
  }
};
</script>
<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{stringCounter}}</p>
  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("Counter", {
      doubleCounter: "doubleCounter",
      stringCounter: "stringCounter"
    })
  }
  //   computed: mapGetters(["doubleCounter", "stringCounter"])
  //props: ['counter']
  //   computed: {
  //     counter() {
  //       return this.$store.getters.doubleCounter;
  //     },
  //     clicks() {
  //       return this.$store.getters.stringCounter;
  //     }
  //   }
};
</script>
<template>
  <p>Counter is: {{ doubleCounter }}</p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  //props: ['counter']
  computed: mapGetters("Counter", ["doubleCounter"])
};
</script>
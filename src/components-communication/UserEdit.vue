<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Age: {{userAge}}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    userAge: {
      type: Number,
      required: true,
      default: 27
    }
  },
  methods: {
    editAge() {
      this.userAge = 30;
      //this.$emit("ageUpdated", this.userAge);
      //eventBus.$emit("ageUpdated", this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>

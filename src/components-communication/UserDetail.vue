<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{name}} - {{switchName()}}</p>
    <p>User Age: {{userAge}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetNameFun">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  //props: ["name"]
  //   props: {
  //     name: String
  //   }
  props: {
    name: {
      type: String,
      required: true,
      default: "Max"
    },
    userAge: {
      type: Number,
      required: true
    },
    resetNameFun: Function
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Max";
      this.$emit("nameWasReset", this.name); //update at parent
    }
  },
  created() {
    eventBus.$on("ageUpdated", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>

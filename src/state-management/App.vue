<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <br> Result:&nbsp;&nbsp;
        <app-result></app-result>
        <hr>
        <br>Another Result:&nbsp;&nbsp;
        <app-another-result></app-another-result>
        <hr>
        <br>
        <app-counter></app-counter>
        <br>
        <app-another-counter></app-another-counter>
        <hr><br>
        <!-- <input type="text"
               class="form-control"
               :value="value"
               @input="updateValue"> -->
        <input type="text"
               class="form-control"
               v-model="value">
        <br>
        <p>Value: {{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Result from "./components/Result.vue";
import AnotherResult from "./components/AnotherResult.vue";
import AnotherCounter from "./components/AnotherCounter";
import * as types from "./store/types";

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters[types.GET_VALUE];
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch("updateValue", event.target.value);
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
};
</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <p>{{text | toUpper()}}</p>
        <p>{{text | to-lower() }}</p>
        <hr>
        <br>
        <input type="text"
               v-model="filterText">
        <ul>
          <li v-for="(fruit,index) in filteredFruits"
              :key="index">
            {{fruit}}
          </li>
        </ul>
        <hr>
        <br>
        <app-list-comp></app-list-comp>
      </div>
    </div>
  </div>
</template>

<script>
import ListVue from "./List";
import { fruitMixin } from "./fruitMixins";

export default {
  data() {
    return {
      text: "Hello there"
    };
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    }
  },
  mixins: [fruitMixin],
  components: {
    appListComp: ListVue
  }
};
</script>


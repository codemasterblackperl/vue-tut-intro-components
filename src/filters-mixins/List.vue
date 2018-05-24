<template>
  <div>
    <input type="text"
           v-model="filterText">
    <ul>
      <li v-for="(fruit,index) in filteredFruits"
          :key="index">
        {{fruit}}
      </li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixins";

export default {
  mixins: [fruitMixin]
};
</script>


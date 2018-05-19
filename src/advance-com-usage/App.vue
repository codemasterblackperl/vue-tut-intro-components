<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <br>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appNew'">New</button>
        <hr>
        <component :is="selectedComponent"></component>
        <br>
        <br>
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
        <!-- <app-quote>
          <p slot="title">{{quoteTitle}}</p>
          <p slot="content">A wonderful quote!</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./advance-com-usage/Quote";
import Author from "./advance-com-usage/Author";
import New from "./advance-com-usage/New";

export default {
  data: function() {
    return {
      quoteTitle: "Today's quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
</style>

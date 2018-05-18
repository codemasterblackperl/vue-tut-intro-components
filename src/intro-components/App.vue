<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./intro-components/Shared/Header.vue";
import Footer from "./intro-components/Shared/Footer.vue";
import Servers from "./intro-components/Server/Servers.vue";
import ServerDetails from "./intro-components/Server/ServerDetails.vue";

export default {
  components: {
    appHeader: Header,
    Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style>
</style>

<template>
  <div>
    <h3>New Quote</h3>
    <hr>
    <button @click="count++">Increase count</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    };
  }
};
</script>

<style>
</style>
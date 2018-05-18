<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item"
          v-for="(index,key) in 5"
          :key="key">
        Server #{{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style>
</style>

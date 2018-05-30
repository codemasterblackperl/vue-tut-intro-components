<template>
  <div>
    <p>Please select a User</p>
    <hr>
    <ul class="list-group">
      <router-link tag="li"
                   class="list-group-item"
                   style="cursor:pointer"
                   v-for="i in 10"
                   :key="i"
                   :to="'/user/'+i">
        User {{i}}
      </router-link>
    </ul>
  </div>
</template>
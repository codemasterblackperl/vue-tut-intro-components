<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale:{{$route.query.locale}}</p>
    <p>Q:{{$route.query.q}}</p>
    <br><br>
    <button class="btn btn-primary"
            @click="edited=true">Confirm</button>
    <div style="height:700px"></div>
    <p id="data">some data</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      edited: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.edited) next();
    else {
      if (confirm("Are you sure?")) next();
      else next(false);
    }
  }
};
</script>

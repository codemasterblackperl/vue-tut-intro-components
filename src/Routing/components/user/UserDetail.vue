<template>
  <div>
    <h3>User {{$route.params.id}} Details</h3>
    <hr>
    <p>Loaded id:{{$route.params.id}}</p>
    <br>
    <!-- <router-link class="btn btn-primary"
                 tag="button"
                 :to="'/user/'+$route.params.id+'/edit'">Edit</router-link> -->
    <router-link class="btn btn-primary"
                 tag="button"
                 :to="link">Edit</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("from the userdetail component");
    //check user is authenticated before next
    if (true) next();
    else next(false);
  }
};
</script>



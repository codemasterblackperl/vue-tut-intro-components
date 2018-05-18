<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>User Name:{{name}}</p>
    <p>User Age: {{age}}</p>
    <button @click="changeName">Change Name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :name="name"
                         :userAge="age"
                         :resetNameFun="resetName"
                         @nameWasReset="name=$event"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age"
                       @ageUpdated="age=$event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      name: "Max",
      age: 25
    };
  },
  methods: {
    changeName() {
      this.name = "Anna";
    },
    resetName() {
      this.name = "Max";
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>

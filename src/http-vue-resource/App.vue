<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="Username">Username:</label>
          <input type="text"
                 class="form-control"
                 v-model="user.userName">
        </div>
        <div class="form-group">
          <label for="Email">Email:</label>
          <input type="text"
                 class="form-control"
                 v-model="user.email">
        </div>
        <button class="btn btn-primary"
                @click="submitData">Submit</button>
        <hr>
        <br>
        <input type="text"
               class="form-control"
               v-model="node">
        <br><br>
        <button class="btn btn-primary"
                @click="fetchData">Get Data</button>
        <br>
        <br>
        <ul class="list-group">
          <li class="list-group-item"
              v-for="(user,index) in users"
              :key="index">
            <div style="border:1px solid lightgray;padding:10px;">
              <p>Username: {{user.userName}}</p>
              <p>Email: {{user.email}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        email: ""
      },
      users: [],
      resources: {},
      node: "users"
    };
  },
  methods: {
    submitData() {
      // this.$http.post("users.json", this.user).then(
      //   reposnse => {
      //     console.log(reposnse);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
      //this.resources.save({}, this.user);
      this.resources.saveAlt(this.user);
    },
    fetchData() {
      // this.$http
      //   .get("users.json")
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(data => {
      //     const tempArr = [];
      //     for (let key in data) tempArr.push(data[key]);
      //     this.users = tempArr;
      //   });
      this.resources
        .getData({ node: this.node })
        .then(response => {
          return response.json();
        })
        .then(data => {
          const tempArr = [];
          for (let key in data) tempArr.push(data[key]);
          this.users = tempArr;
        });
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "altUser.json" },
      getData: { method: "GET" }
    };
    this.resources = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
</style>

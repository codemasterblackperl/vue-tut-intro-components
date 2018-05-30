//import User from "./Routing/components/user/User.vue";
// import UserStart from "./Routing/components/user/UserStart.vue";
// import UserDetail from "./Routing/components/user/UserDetail.vue";
// import UserEdit from "./Routing/components/user/UserEdit.vue";
import Home from "./Routing/components/Home.vue";
import Header from "./Routing/components/Header.vue";

//third parameter is for grouping the bundle
const User = resolve => {
  require.ensure(['./Routing/components/user/User.vue'], () => {
    resolve(require('./Routing/components/user/User.vue'));
  }, "user");
};

const UserStart = resolve => {
  require.ensure(['./Routing/components/user/UserStart.vue'], () => {
    resolve(require('./Routing/components/user/UserStart.vue'));
  }, "user");
};

const UserDetail = resolve => {
  require.ensure(['./Routing/components/user/UserDetail.vue'], () => {
    resolve(require('./Routing/components/user/UserDetail.vue'));
  }, "user");
};

const UserEdit = resolve => {
  require.ensure(['./Routing/components/user/UserEdit.vue'], () => {
    resolve(require('./Routing/components/user/UserEdit.vue'));
  }, "user");
};

export const routes = [{
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header
    },
    children: [{
        path: "",
        component: UserStart
      },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("before enter from route children");
          next();
        }
      },
      {
        path: ":id/edit",
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      "header-top": Header
    }
  },
  {
    path: "/red",
    redirect: "/user"
  },
  {
    path: "*",
    redirect: {
      name: 'home'
    }
  }
];
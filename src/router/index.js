import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/User/Profile.vue")
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/User/Signin.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/User/Signup.vue")
  },
  {
    path: "/meetup",
    name: "List Meetup",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Meetup/ListMeetup.vue")
  },
  {
    path: "/meetup/add",
    name: "Create Meetup",
    component: () =>
      import(
        /* webpackChunkName: "signin" */ "../views/Meetup/CreateMeetup.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

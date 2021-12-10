import Vue from 'vue';
import Router from 'vue-router';
//import App from './App.vue'
import Home from './components/Home.vue';
import Users from './components/Users.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {path: "/", component: Home},
      {path: "/users/:id", component: Users, props: true}
    //    {path: "/roadmap/:id", component: App}
  ]
});
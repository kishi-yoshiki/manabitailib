import Vue from 'vue';
import Router from 'vue-router';
//import App from './App.vue'
import Roadmap from './components/Roadmap.vue';
//import Users from './views/Users.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {path: "/", component: Home, props: true},
      {path: "/roadmap/:id", component: Roadmap, props: true}
  ]
});
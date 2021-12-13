import Vue from 'vue';
import Router from 'vue-router';
//import App from './App.vue'
// nakamura: RoadmapList検証用に一時的にコメントアウト。終わったら元に戻す
// import Roadmap from './components/Roadmap.vue';
import Users from './views/Users.vue';
//import Home from './views/Home.vue';
import RoadmapList from './components/RoadmapList.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {path: "/", component: RoadmapList}, // nakamura: RoadmapList検証用に一時的にRoadmapから変更。終わったら元に戻す
      {path: "/users/:id", component: Users, props: true}
    //    {path: "/roadmap/:id", component: App}
  ]
});
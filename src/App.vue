<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <table v-for="user in users" :key="user.id">
      <tr>
        <td>画像{{ user.id }}<br>
          <img src="@/assets/logo.png" />
        </td>
        <td>
          著者: {{ user.name }}<br />
          出版:
        </td>
      </tr>
      <div class="arrow"></div>
    </table>
    <h1>This is an about page</h1>
    <b-button
      size="lg"
      variant="outline-primary">
      Bootstrap Button
    </b-button>
    <i class="bi bi-capslock"></i>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import users from "./assets/users.json";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      users: users
    };
  },
  method: {
    img_func:function(srcs){
      //return require(src)
      return (srcs)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.arrow{
  position: relative;
  width: 100px;
  height: 100px;
  left: 80px;
  border-top: 8px solid #5bc0de;
  border-right: 8px solid #5bc0de;
  box-sizing: border-box;
}

.arrow::after{
  content: "";
  position: absolute;
  bottom: -14px;
  right: -17px;
  border-top: 14px solid #5bc0de;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
}
</style>

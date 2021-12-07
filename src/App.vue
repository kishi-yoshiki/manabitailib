<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="これはテストです"/>

    <table v-for="user in users" :key="user.id">
      <tr>
        <td>画像{{ user.id }}<br>
 
        <img v-bind:src="user.img" />
        </td>
        <td>
          著者: {{ user.name }}<br />
          出版:
        </td>
      </tr>
      <td>⇓</td>
    </table>
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
      users: users,
    };
  },
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
</style>

<template>
  <div class="header">
    <router-link :to="'/'">
     <h2 style="color:white;margin-top: 5px;"><u>社内図書システム</u></h2>
    </router-link>
  </div>
</template>

<style scoped>
.header {
  position : fixed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  display: block;
  width: 100%;
  height: 50px; 
  background-color: darkcyan;
  z-index:10;
  border-block-end: 5px solid black;
}
</style>
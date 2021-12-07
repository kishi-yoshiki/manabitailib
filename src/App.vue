<template>
  <div id="app">
    <div>
      <h2 class="page-header">{{ roadmap.name }}</h2>
      <p >{{ roadmap.outline }}</p>
    </div>    
    <table align="center">
      <div v-for="(book, index) in roadmap.books" :key="book.title">
        <td v-if="index!==0" align="center">
          <i class="bi bi-arrow-down" style="font-size:4rem;color:darkcyan"></i>
        </td>
        <tr>
          <td>
            <img :src="book.cover_image" width="100px" height="130px" />
          </td>

          <td style="vertical-align: top">
            <h3 style="margin:0px;">{{ book.title }}</h3>
            <table style="text-align: left">
              <tr>
                <td>著者名:</td>
                <td>{{ book.author }}</td>
              </tr>
              <tr>
                <td>出版社:</td>
                <td>{{ book.publisher }}</td>
              </tr>
            </table>
          </td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
import roadmap from "./assets/roadmaps/roadmap_schema.json";
export default {
  name: "App",
  data() {
    return {
      roadmap: roadmap,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

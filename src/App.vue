<template>
  <div id="app">
    <h2>{{ roadmap.name }}</h2>
    <table align="center">
      <div v-for="(book, index) in roadmap.books" :key="book.title">
        <tr>
          <td v-if="index !== 0">⇓</td>
        </tr>
        <tr>
          <td>
            <img :src="book.cover_image" width="100px" height="130px" />
          </td>
          <td style="vertical-align: top">
            <table style="text-align: left">
              <tr>
                <td>タイトル:</td>
                <td>{{ book.title }}</td>
              </tr>
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

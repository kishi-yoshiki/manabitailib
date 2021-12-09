<template>
  <div id="app">
    <div>
      <h3 class="page-header" text-align="left">{{ roadmap.name }}</h3>
      <p style="overflow-wrap:normal; algin=left; text-algin=left; padding-top:1%; padding-bottom:2%">{{ roadmap.outline }}</p>
    </div>    
    <table align="center">
      <div v-for="(book, index) in roadmap.books" :key="book.title">
        <tr v-if="index!==0">
          <td align="center">
            <i class="bi bi-chevron-double-down" style="font-size:3rem; color:darkcyan; padding-top:2%"></i>
          </td>
          <td style="vertical-align:middle; text-align:left; color:darkcyan">
            <h7> {{ book.arrow_comment }}</h7>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="book.cover_image" width="100px" height="130px" />
          </td>
          <td style="vertical-align: top; padding-left: 30px">
            <h5 style="margin:0px; overflow-wrap:normal">{{ book.title }}</h5>
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

    <QAview />

  </div>
</template>

<script>
import QAview from "./components/QA.vue"
import roadmap from "./assets/roadmaps/roadmap_schema.json";
export default {
  name: "App",
  components:{ 
    QAview
  },
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
  margin-top: 3%;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 3%;
}
</style>
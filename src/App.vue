<template>
  <div id="app">
    <h2>{{ roadmap.name }}</h2>
    <table align="center">
      <div v-for="(book, index) in roadmap.books" :key="book.title">
        <td v-if="index!==0">
          <i class="bi bi-arrow-down" style="font-size:4rem;color:darkcyan" align="center"></i>
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

<div>
<b-button v-b-toggle.accordion-1-1.accordion-1-2 block>質問１</b-button>
  <b-collapse id="accordion-1-1" visible style="max-width: 18rem">
    <b-card>回答１</b-card>
  </b-collapse>
  <b-collapse id="accordion-1-2" visible>
    <b-card>回答２</b-card>
  </b-collapse>
</div>
<div>
<b-button v-b-toggle.accordion-2-1.accordion-2-2 block>質問２</b-button>
<b-collapse id="accordion-2-1" visible>回答１</b-collapse>
<b-collapse id="accordion-2-2" visible>回答２</b-collapse>
</div>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      roadmapId: "roadmap_schema" // 表示したロードマップのID。ロードマップの情報はassets/roadmapsフォルダに「(ロードマップID).json」というファイル名で配置されている。
    };
  },
  computed: {
    roadmap() {
      return require("./assets/roadmaps/" + this.roadmapId + ".json");
    }
  }
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

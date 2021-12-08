<template>
  <div id="app">
    <div align="left">
      <h2 class="page-header">{{ roadmap.name }}</h2>
      <p class="lead" style="overflow-wrap:normal; text-algin=left">
        {{ roadmap.outline }}
      </p>
    </div>
    <table align="center" style="padding-top: 20px">
      <div v-for="(book, index) in roadmap.books" :key="book.title">
        <tr v-if="index !== 0">
          <td align="center">
            <i
              class="bi bi-chevron-double-down"
              style="font-size: 3rem; color: darkcyan; padding-top: 10px"
            ></i>
          </td>
          <td style="vertical-align: top; text-align: left; color: darkcyan">
            <h4>{{ book.arrow_comment }}</h4>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="book.cover_image" width="100px" height="130px" />
          </td>
          <td style="vertical-align: top; padding-left: 30px">
            <h3 style="margin: 0px; overflow-wrap: normal">{{ book.title }}</h3>
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
    <table style="text-align: left">
      <tr>
        <td>
          <img src="/img/book/logo.png" width="100px" height="130px" />
        </td>
        <td>
          <h3>{{ roadmap.creator.name }}</h3>
          <table>
            <tr>
              <td>保有技術</td>
              <td>JAVA</td>
            </tr>
            <tr>
              <td>担当した案件</td>
              <td>〇〇案件、××案件</td>
            </tr>
            <tr>
              <td>自己紹介文</td>
              <td>困ったことがあればなんでも聞いてください！</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      roadmapId: "roadmap_schema", // 表示したロードマップのID。ロードマップの情報はassets/roadmapsフォルダに「(ロードマップID).json」というファイル名で配置されている。
    };
  },
  computed: {
    roadmap() {
      return require("./assets/roadmaps/" + this.roadmapId + ".json");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 250px;
  margin-right: 250px;
  margin-bottom: 60px;
}
</style>

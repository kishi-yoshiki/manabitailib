<template>
  <div id="app">
    <div align="left">
      <h2 class="page-header">{{ roadmap.name }}</h2>
      <h5 style="margin-bottom: 15px;">作成者: {{ roadmap.creator.name }} </h5>
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

  <h3 class="section-title">作成者情報</h3>
    <table style="text-align: left;">
      <tr>
        <td valign="top">
          <div class="v_line_left">
            <img
              :src="roadmap.creator.face_image"
              width="100px"
              height="100px"
            />
          </div>
        </td>
        <td>
          <h3>
            <a v-bind:href="roadmap.creator.url">
              {{ roadmap.creator.name }} ({{ roadmap.creator.name_roman }})
            </a>
            {{ roadmap.creator.mail_address }}<br />
            {{ roadmap.creator.division }}
          </h3>
          <table>
            <tr>
              <td>保有技術：</td>
              <td>{{ roadmap.creator.skills }}</td>
            </tr>
            <tr>
              <td>コメント：</td>
              <td>{{ roadmap.creator.comment }}</td>
            </tr>
          </table>
          <b-button v-b-toggle.c-details variant="primary">もっと見る</b-button>
          <b-collapse id="c-details">
            <table>
            <tr>
              <td>担当した案件：</td>
              <td>{{ roadmap.creator.projects }}</td>
            </tr>
            <tr>
              <td>電話番号：</td>
              <td>{{ roadmap.creator.tel }}</td>
            </tr>
              <tr>
                <td>保有資格：</td>
                <td>{{ roadmap.creator.licenses }}</td>
              </tr>
              <tr>
                <td>この人が作成した他のロードマップ：</td>
                <td>
                  <div
                    v-for="roadmaps in roadmap.creator.roadmaps"
                    :key="roadmaps.name"
                  >
                    {{ roadmaps.name }}
                  </div>
                </td>
              </tr>
            </table>
          </b-collapse>
        </td>
      </tr>
    </table>
  <h3 class="section-title">この人が作成した他のロードマップ</h3>
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
.v_line_left {
  border-left: 1ex solid darkcyan;
  padding-left: 10px;
}
.section-title {
  text-align: left;
  margin-top: 50px;
  margin-bottom: 5px;
}
</style>

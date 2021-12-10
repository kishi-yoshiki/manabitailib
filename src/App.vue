<template>
  <div id="app">
    <div class="d-grid gap-2" style="text-align: left; padding-top: 1%">
      <button
        class="btn btn-light btn-outline-dark"
        style="text-align: left; padding-top: 1%"
        type="button"
        v-b-toggle="'accordion-roadmap1'"
      >
        {{ roadmap.name }}
      </button>
    </div>
    <b-collapse
      id="accordion-roadmap1"
      style="algin: left; text-algin: left"
    >
    <!--
    <div class="border-arrange1" style="margin-top: 50px;border: 1px solid black;">
      -->
    <div class="border-arrange1" style="margin-top: 50px;">
      <div align="left" style="padding-bottom: 2%;">
        <h3 class="page-header" style="font-weight: bold">
          {{ roadmap.name }}
        </h3>
        <h5 style="margin-bottom: 15px">作成者: {{ roadmap.creator.name }}</h5>
        <p style="overflow-wrap:normal; text-algin=left">
          {{ roadmap.outline }}
        </p>
      </div>
      <div style="margin-bottom: 5%">
        <table align="center">
          <div v-for="(book, index) in roadmap.books" :key="book.title">
            <tr v-if="index !== 0">
              <td align="center">
                <i
                  class="bi bi-chevron-double-down"
                  style="font-size: 3rem; color: darkcyan; padding-top: 10px"
                ></i>
              </td>
              <td
                style="
                  vertical-align: middle;
                  text-align: left;
                  color: darkcyan;
                "
              >
                <h6>{{ book.arrow_comment }}</h6>
              </td>
            </tr>
            <tr>
              <td>
                <img :src="book.cover_image" width="100px" height="130px" />
              </td>
              <td style="vertical-align: top; padding-left: 30px">
                <h5
                  style="margin: 0px; overflow-wrap: normal; font-weight: bold"
                >
                  {{ book.title }}
                </h5>
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
      <hr />
      <roadmap-creator-info :creator="roadmap.creator"></roadmap-creator-info>
      <hr />
      <QAview />
    </div>
    </b-collapse>
        <div class="d-grid gap-2" style="text-align: left; padding-top: 1%">
      <button
        class="btn btn-light btn-outline-dark"
        style="text-align: left; padding-top: 1%"
        type="button"
        v-b-toggle="'accordion-roadmap2'"
      >
        クラウド 学習ロードマップ
      </button>
    </div>
        <div class="d-grid gap-2" style="text-align: left; padding-top: 1%">
      <button
        class="btn btn-light btn-outline-dark"
        style="text-align: left; padding-top: 1%"
        type="button"
        v-b-toggle="'accordion-roadmap2'"
      >
        データベース 学習ロードマップ
      </button>
    </div>
        <div class="d-grid gap-2" style="text-align: left; padding-top: 1%">
      <button
        class="btn btn-light btn-outline-dark"
        style="text-align: left; padding-top: 1%"
        type="button"
        v-b-toggle="'accordion-roadmap2'"
      >
        Webアプリ開発 学習ロードマップ
      </button>
    </div>
  </div>
</template>

<script>
import RoadmapCreatorInfo from "./components/RoadmapCreatorInfo.vue";
import QAview from "./components/QA.vue";

export default {
  name: "App",
  components: {
    QAview,
    RoadmapCreatorInfo,
  },
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
  text-align: left;
  color: #2c3e50;
  margin-top: 3%;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 50%;
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
      .border-arrange1 {
        /* width: 480px; */
        padding: 10px;
        margin: 20px;
        font-size: 26px;
        border-left: 10px solid #ff6347;
        border-bottom: 2px solid #ff6347;
        background-color: #eee;
      }
</style>

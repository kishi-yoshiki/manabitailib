<template>
  <div id="app">
    <Roadmap :roadmap="roadmap"></Roadmap>
    <hr>
    <roadmap-creator-info :creator="roadmap.creator"></roadmap-creator-info>
    <hr>
    <QAview />
  </div>
</template>

<script>
import Roadmap from './RoadmapDetail.vue';
import RoadmapCreatorInfo from './RoadmapCreatorInfo.vue';
import QAview from "./QA.vue"

export default {
  name: "App",
  components:{ 
    Roadmap,
    QAview,
    RoadmapCreatorInfo
  },
  data() {
    return {
      roadmapId: "roadmap_schema", // 表示したロードマップのID。ロードマップの情報はassets/roadmapsフォルダに「(ロードマップID).json」というファイル名で配置されている。
    };
  },
  computed: {
    roadmap() {
      return require("../assets/roadmaps/" + this.roadmapId + ".json");
    },
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
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
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
</style>
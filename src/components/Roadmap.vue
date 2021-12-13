<template>
  <div id="app">
    <RoadmapDetail :roadmap="roadmap"></RoadmapDetail>
    <hr>
    <roadmap-creator-info :creator="roadmap.creator"></roadmap-creator-info>
    <hr>
    <QAview :QAid="QAid"></QAview>
  </div>
</template>

<script>
import RoadmapDetail from './RoadmapDetail.vue';
import RoadmapCreatorInfo from './RoadmapCreatorInfo.vue';
import QAview from "./QA.vue"

export default {
  name: "App",
  props: ["id"],
  components:{ 
    RoadmapDetail,
    QAview,
    RoadmapCreatorInfo
  },
  computed: {
    roadmap() {
      return require("../assets/roadmaps/" + this.id + ".json");
    },
    QAid(){
        return this.id
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
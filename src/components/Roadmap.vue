<template>
  <div id="app">
    <RoadmapDetail :roadmap="roadmap"></RoadmapDetail>
    <hr>
    <roadmap-creator-info :creator="roadmap.creator" v-on:change-roadmap="changeRoadmap($event)"></roadmap-creator-info>
    <hr>
    <QAview :roadmapId="roadmapId"></QAview>
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
    roadmapId(){
        return this.id
    }
  },
  methods: {
    // 選択中のロードマップを変更する。状態は親コンポーネントが持っているのでイベントを発行して親コンポーネントで更新してもらう。
    changeRoadmap(roadmapId) {
      // console.log("Roadmap.vue: " + roadmapId);
      this.$emit("change-roadmap", roadmapId);
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
  width: 60%;
  margin-top: 3%;
  margin-left: 35%;
  margin-right: 5%;
  margin-bottom: 3%;
  position:absolute;
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
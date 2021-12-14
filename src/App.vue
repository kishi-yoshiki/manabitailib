<template>
  <div>
    <Header></Header>
    <div class="contents">
      <RoadmapList class="roadmapList" :currentRoadmap="currentRoadmap" v-on:change-roadmap="currentRoadmap = $event"></RoadmapList>
      <router-view class="roadmapDetail" v-on:change-roadmap="currentRoadmap = $event"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import RoadmapList from "./components/RoadmapList.vue";
export default {
  components: {
    Header,
    RoadmapList,
  },
  data() {
    return {
      // 表示中のロードマップのID。実際に参照するのはRoadmapListコンポーネントだが、更新は他のコンポーネントでも行われるので、ここで定義しておく。たぶんVuexを使うほうがよい。
      currentRoadmap: ""
    }
  }
};
</script>

<style scoped>
.contents {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top : 50px;
  text-align: left;
  width: 100%; 
  margin-bottom: 50px;
}
.roadmapDetail {
  width: 70%;
  position:relative;
}
.roadmapList {
  border-right: 3px solid black;
  width: 30%;
  height: 100%;
  position:fixed;
}
</style>
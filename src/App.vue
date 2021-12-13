<template>
  <div>
    <Header></Header>
    <div class="contents">
      <RoadmapList class="roadmapList"></RoadmapList>
      <router-view class="roadmapDetail"></router-view>
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

}
.roadmapList {
  border-right: 3px solid black;
  width: 30%;
}
</style>
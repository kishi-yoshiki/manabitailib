<template>
  <div>
    <Header id="border-solid"></Header><br>
    <div class="flex">
      <RoadmapList id="border-solid"></RoadmapList>
      <router-view id="border-solid"></router-view>
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
.flex {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 50%;

}
/* 分割がわかりやすいように枠線表示 */
#border-solid {
  border: 3px solid black;
}
</style>
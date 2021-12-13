<template>
  <div>
    <div v-for="roadmap in roadmapEntries" :key="roadmap.id" class="my-2">
      <router-link :to="'/roadmap/' + roadmap.id">
        <b-button :id="'roadmap-entry-' + roadmap.id" @click="changeCurrentRoadmap(roadmap.id)" :class="classesForRoadmapEntry(roadmap.id)" style="text-align:left; padding: 5px;">
          {{ roadmap.name }}
        </b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentRoadmap'],
  computed: {
    roadmapEntries() {
      return require('../assets/roadmaps/roadmap_list.json');
    },
    classesForRoadmapEntry() {
      return function(roadmapId) {
        // 通常時のロードマップボタンのクラス
        let cls = {
          btn: true,
          'btn-info': false,
          'btn-light': true,
          'w-100': true,
        }
        // ロードマップが現在選択中の場合はボタンの見た目を"light"から"info"に変更する
        if (this.currentRoadmap === roadmapId) {
          cls['btn-info'] = true;
          cls['btn-light'] = false;
        }
        return cls;
      }
    }
  },
  methods: {
    // 選択中のロードマップを変更する。状態は親コンポーネントが持っているのでイベントを発行して親コンポーネントで更新してもらう。
    changeCurrentRoadmap(roadmapId) {
      this.$emit("change-roadmap", roadmapId);
    }
  }
}
</script>
<style scoped>
</style>

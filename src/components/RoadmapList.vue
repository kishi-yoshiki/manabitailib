<template>
  <div>
    <!-- ツールチップ動作確認用のサンプル -->
        <b-button v-b-tooltip.hover title="ももんが" placement="right">
          ももんが
        </b-button>
    <div v-for="roadmap in roadmapEntries" :key="roadmap.id" class="my-2">
      <!-- TODO: ロードマップ章さの正式なURL(パス)は別チームに訊く -->
      <router-link :to="'/roadmap/' + roadmap.id">
        <b-button :id="'roadmap-entry-' + roadmap.id" class="btn btn-light btn-outline-dark w-100 ml-3 text-truncate" style="text-align:left; padding: 5px;">
          {{ roadmap.name }}
        </b-button>
        <b-tooltip :target="'roadmap-entry-' + roadmap.id" triggers="hover" placement="right">
          {{ roadmap.name }}
        </b-tooltip>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    roadmapEntries() {
      return require('../assets/roadmaps/roadmap_list.json');
    }
  }
}
</script>
<style scoped>
</style>
<template>
  <div>
    <b-card no-body>
  <b-tabs
    active-nav-item-class="font-weight-bold text-uppercase text-danger"
    active-tab-class="font-weight-bold text-success"
    content-class="mt-3"
  >
      <b-tab title="マップ一覧">
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
      </b-tab>
      <b-tab title="質問一覧" style=background-color: red>
        hoge
      </b-tab>
    </b-tabs>
    </b-card>
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

<template>
  <div>
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
    <br>

    <div class ="questionList" v-for="question in questionList" :key="question.id">
      <a href=""><p>{{question.question}}</p></a>
    </div>
    
  </div>

</template>

<script>
export default {
  data() {
    return {
      //質問リスト
      questionList:[],
    };
  },
  computed: {
    roadmapEntries() {
      return require('../assets/roadmaps/roadmap_list.json');
    }
  },
  // jsonseverからデータを読み込んでquestionList変数に格納
  created() {
    this.read();
  },
  methods: {
    // 質問一覧描画
    read() {
      console.log(this.QAid)
      fetch("http://localhost:3000/thread")
        .then((res) => res.json())
        .then((res) => this.questionList = res)
    },
  }
}
</script>

<style scoped>
.questionList > a > p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<template>
  <div>
    <b-card no-body>
      <b-tabs>
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
          <div class="input-group mb-3" style="width:70%;margin:auto;margin-top:15px;">
            <input type="text" class="form-control" id="qa-text" placeholder="検索したいワードを入力して下さい" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="input-group-text" id="basic-addon2" @click="serchQuestion()">検索</button>
            </div>
          </div>
          <b-card v-for="question in questionList" :key="question.id">
            <router-link class="questionLink" :to="'/roadmap/' + question.roadmap">
                <p class="questionList">{{question.question}}</p> 
              <div v-for="roadmap in roadmapEntries" :key="roadmap.id">
                <div class="questionDetail" v-if="roadmap.id==question.roadmap">
                  <p>{{roadmap.name}}</p>
                  <p>更新日時: yyyy/mm/dd hh:mm</p>
                </div>  
              </div>
            </router-link>
          </b-card>
        </b-tab>
      </b-tabs>
    </b-card>
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
    serchQuestion(){
      let qaText = document.getElementById('qa-text');
      let serchText = qaText.value;

      console.log(serchText)
        fetch("http://localhost:3000/thread?question=" + serchText)
        .then((res) => res.json())
        .then((res) => this.questionList = res)
    }
  }
}
</script>

<style scoped>
.questionList{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
    margin-bottom:5px;
    text-decoration:underline;
}
.questionDetail > p{
  color: darkgrey;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top:-5px;
  margin-bottom:-5px;
  font-size:12px;
}
.questionLink{
    text-decoration: none;
}
</style>


<template> 
  <div style="padding-top:1%;">
      <h5 aling="left" style="font-weight:bold">過去質問スレッド</h5>
      <form>          
        <div style="padding-top:1%; margin-bottom:5%;">
          <div v-for="(qa, index) in thread" :key="qa.id"> 
              <div class="d-grid gap-2" style="text-align:left; padding-top:1%">
                <button class="btn btn-light btn-outline-dark" style="text-align:left; padding-top:1%;" type="button" v-b-toggle="'accordion-' + index">{{ qa.question }}</button>
              </div>
              <b-collapse v-bind:id="'accordion-' + index" style="algin:left; text-algin:left;">
                  <div id="QABOX">
                  <p style="overflow-wrap:normal; align:left; text-align:left; padding-top:1%">
                      Q：{{ qa.question_detail }}
                  </p>
                  <span v-for="answer in qa.answers" :key="answer" 
                      style="overflow-wrap:normal; align:left; text-align:left; padding-left:5%; padding-top:0.5%;">
                      <i class="bi bi-arrow-return-right" style="font-size:1.2rem; color:darkcyan; padding-right:1%"/>
                      A：
                      <span>
                          <p style="overflow-wrap:normal; align:left; text-align:left; padding-left:8%;">{{ answer }}</p>
                      </span>
                  </span>  
                  <div class="mb-3" style="padding-left:5%; padding-top:0.5%;">
                      <label for="Quastion" class="form-label">回答・返信</label>
                      <textarea class="form-control" id="QuastionDetail" rows="3" v-model="newAnswer[index]"></textarea>
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end" style="padding-top:1%;">
                          <button type="button" class="btn btn-success btn-sm" @click="postAnswer(index)">回答</button>
                      </div>
                  </div>
                  </div>
              </b-collapse>
          </div>          
        </div>
          <hr>
          <div class="mb-3">
              <h5 for="Quastion" class="form-label" style="font-weight:bold">質問投稿欄</h5>
              <textarea class="form-control" id="QuastionDetail" rows="1" v-model="newQuestion" placeholder="質問の題名を記載してください"></textarea><br>
              <textarea class="form-control" id="QuastionDetail" rows="3" v-model="newQuestionDetail" placeholder="内容を記載してください"></textarea>
          
              <span class="mb-3 form-check">
              <span class="d-grid gap-2 d-md-flex justify-content-md-end" style="padding-top:1%;">
                  <button class="btn btn-success" @click="postQuestion">投稿</button>
              </span>
          </span>
          </div>
      </form>
  </div>
</template>
    
<script>
export default {
  name: 'QAview',
  props: ["roadmapId"],
  data() {
    return {
      //質問スレッド
      thread:[],
      //投稿する回答
      newAnswer: [],
      //投稿する質問題名
      newQuestion:"",
      //投稿する質問内容
      newQuestionDetail:""
    };
  },
  // jsonseverからデータを読み込んでthread変数に格納
  created() {
    this.read();
  },
  watch: {
    // 動的URLを検知して再描画
    roadmapId() {
      this.read();
    }
  },
  methods: {
    // 一覧描画
    read() {
      fetch("http://localhost:3000/thread?roadmap=" + this.roadmapId)
        .then((res) => res.json())
        .then((res) => (this.thread = res))
    },

    // 質問を投稿
    postQuestion() {
      fetch("http://localhost:3000/thread", {
        method: "POST",
        body: JSON.stringify({
          roadmap:this.roadmapId,
          question: this.newQuestion,
          question_detail:this.newQuestionDetail,
          answers: []
        }),
        headers: new Headers({ "Content-type": "application/json" }),
      }).then(() => {
        this.thread.push({
          roadmap:this.roadmapId,
          question: this.newQuestion,
          question_detail:this.newQuestionDetail,
          answers: []
        });
        this.newQuestion = "";
        this.newQuestionDetail = "";
      });
    },
    // 回答を投稿
    postAnswer(i) {  
      this.thread[i].answers.push(this.newAnswer[i]);
      fetch(`http://localhost:3000/thread/${this.thread[i].id}`, {
      method: "PUT",
      body: JSON.stringify({
        roadmap:this.roadmapId,
        question: this.thread[i].question,
        question_detail:this.thread[i].question_detail,
        answers: this.thread[i].answers,
      }),
      headers: new Headers({ "Content-type": "application/json" }),
      })
      .then(() => {
        this.newAnswer = [];
      });
    },
  },
}
</script>

<style>
#QABOX {
  border-left: solid 5px #5d627b;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  margin-left: 1.5%;
  margin-bottom: 3.5%;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 2%;
  padding-right: 2%; 
}
</style>
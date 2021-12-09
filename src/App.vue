<template>
  <div>
    <!-- dbの中身 -->
    {{ thread }}<br /><br />
    <!-- 投稿 -->
    <input type="text" id="form" v-model="newQuestion" />
    <input type="button" value="投稿" @click="postQuestion"><br /><br />
    <!-- スレッド表示 -->
    <div v-for="(qa, index) in thread" :key="qa.id">
      <!-- 質問タイトル表示 -->
      <p>{{index+1}}</p>
      {{ qa.question }}<br />
      <!-- 回答表示 -->
      <div v-for="answer in qa.answers" :key="answer.id">
        {{ answer }}<br />
      </div>
      <!-- 回答 -->
      <input type="text" id="form" v-model="newAnswer" />
      <input type="button" value="回答" @click="postAnswer(index)" /><br /><br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //質問スレッド
      thread: [],
      //投稿する質問
      newAnswer: "",
      //投稿する回答
      newQuestion:""
    };
  },
  // jsonseverからデータを読み込んでthread変数に格納
  created() {
    this.read();
  },

  methods: {
    // 一覧描画
    read() {
      fetch("http://localhost:3000/thread")
        .then((res) => res.json())
        .then((res) => (this.thread = res));
    },
    // 質問を投稿
    postQuestion() {
      fetch("http://localhost:3000/thread", {
        method: "POST",
        body: JSON.stringify({
          id:this.thread.length+1,
          question: this.newQuestion,
          answers: []
        }),
        headers: new Headers({ "Content-type": "application/json" }),
      }).then(() => {
        this.thread.push({
          id:this.thread.length+1,
          question: this.newQuestion,
          answers: []
        });
        this.newQuestion = "";
      });
    },
    // 回答を投稿
    postAnswer(i) {
      this.thread[i].answers.push(this.newAnswer);
      fetch(`http://localhost:3000/thread/${i+1}`, {
      method: "PUT",
      body: JSON.stringify({
        question: this.thread[i].question,
        answers: this.thread[i].answers,
      }),
      headers: new Headers({ "Content-type": "application/json" }),
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 250px;
  margin-right: 250px;
  margin-bottom: 60px;
}
</style>

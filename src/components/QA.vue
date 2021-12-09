<template> 
<div style="padding-top:10%;">
    <h5 aling="left">質問スレッド一覧</h5>
    <form>
        <div v-for="(question,index) in QA.question" :key="question.question_title" id="QABOX">
            <b-button v-b-toggle.index block>{{ index }} - {{ question.question_title }}</b-button>
            <b-collapse id=index visible style="algin=left; text-algin=left;">
                <p style="overflow-wrap:normal; algin=left; text-algin=left;">
                    Q：{{ question.question_detail }}
                </p>
                <span v-for="answer in question.answer" :key="answer" 
                    style="overflow-wrap:normal; algin=left; text-algin=left; padding-left:5%; padding-top:0.5%;">
                    <i class="bi bi-arrow-return-right" style="font-size:1.2rem; color:darkcyan; padding-right:1%"/>
                    A：
                    <span>
                        <p style="overflow-wrap:normal; algin=left; text-algin=left; padding-left:8%;">{{ answer }}</p>
                     </span>
                </span>       

                <div class="mb-3" style="padding-left:5%; padding-top:0.5%;">
                    <label for="Quastion" class="form-label">回答・返信</label>
                    <textarea class="form-control" id="QuastionDetail" rows="3"></textarea>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end" style="padding-top:1%;">
                        <button type="answer" class="btn btn-success btn-sm">回答</button>
                    </div>
                </div>
            </b-collapse>
        </div>
        <div class="mb-3" style="padding-top:30px;">
            <label for="Quastion" class="form-label">質問</label>
                <textarea class="form-control" id="QuastionDetail" rows="3"></textarea>
            <div id="emailHelp" class="form-text">ここに質問内容を記載してください</div>
        </div>
        <span class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="anyone-check">匿名で質問を投稿</label>
            <span class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="quastion" class="btn btn-success">投稿</button>
            </span>
        </span>
    </form>
</div>
   
</template>
    
<script>
import QA from "../assets/roadmaps/QA.json";
export default {
  name: 'QAview',
  data() {
    return {
      QA: QA,
    };
  }
}
</script>

<style>
#QABOX {
  border-left: solid 5px #5d627b;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  margin: 2%;
  padding: 2% 
}
</style>
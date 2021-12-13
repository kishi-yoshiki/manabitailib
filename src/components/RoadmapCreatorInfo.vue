<template>
  <div style="margin-bottom:5%;">
    <h5 class="section-title"  style="font-weight:bold padding-bottom:5%">作成者情報</h5>
    <table style="text-align: left">
      <tr>
        <td valign="top">
          <div class="v_line_left">
            <img :src="creator.face_image" width="100px" height="100px" />
          </div>
        </td>
        <td style="padding-left:1%">
          <h4 style="font-weight:bold">
            <a v-bind:href="creator.url">
              {{ creator.name }} ({{ creator.name_roman }})
            </a>
            {{ creator.mail_address }}<br />
            {{ creator.division }}
          </h4>
          <table>
            <tr>
              <td>保有技術：</td>
              <td>{{ creator.skills }}</td>
            </tr>
            <tr>
              <td>コメント：</td>
              <td>{{ creator.comment }}</td>
            </tr>
          </table>
          <b-collapse id="c-details">
            <table>
              <tr>
                <td>担当した案件：</td>
                <td>{{ creator.projects }}</td>
              </tr>
              <tr>
                <td>電話番号：</td>
                <td>{{ creator.tel }}</td>
              </tr>
              <tr>
                <td>保有資格：</td>
                <td>{{ creator.licenses }}</td>
              </tr>
            </table>
          </b-collapse>          
          <button class="btn btn-link" v-b-toggle.c-details variant="primary">もっと見る</button>
        </td>
      </tr>
    </table>
    <h5 class="section-title">この人が作成した他のロードマップ</h5>
    <ul>
      <li v-for="roadmap in creator.roadmaps" :key="roadmap.name" style="text-align:left; padding-top:1%">
        <router-link :to="'/roadmap/' + roadmap.id" @click.native="changeRoadmap(roadmap.id)"> <!-- router-linkではただの@clinkは利かないらしく@click.nativeとする必要がある -->
        {{ roadmap.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["creator"],
  methods: {
    // 選択中のロードマップを変更する。状態は親コンポーネントが持っているのでイベントを発行して親コンポーネントで更新してもらう。
    changeRoadmap(roadmapId) {
      // console.log("RoadmapCreatorInfo.vue: " + roadmapId);
      this.$emit("change-roadmap", roadmapId);
    }
  }
};
</script>

<style scoped>
.section-title {
  text-align: left;
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight:bold;
}
</style>

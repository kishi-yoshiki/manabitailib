<template>
  <div>
    <h3 class="section-title">作成者情報</h3>
    <table style="text-align: left">
      <tr>
        <td valign="top">
          <div class="v_line_left">
            <img :src="creator.face_image" width="100px" height="100px" />
          </div>
        </td>
        <td>
          <h3>
            <a v-bind:href="creator.url">
              {{ creator.name }} ({{ creator.name_roman }})
            </a>
            {{ creator.mail_address }}<br />
            {{ creator.division }}
          </h3>
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
          <b-button v-b-toggle.c-details variant="primary">もっと見る</b-button>
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
        </td>
      </tr>
    </table>
    <h3 class="section-title">この人が作成した他のロードマップ</h3>
    <ul>
      <li v-for="roadmap in creator.roadmaps" :key="roadmap.name" style="text-align: left;">
        {{ roadmap.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["creator"],
};
</script>

<style scoped>
.section-title {
  text-align: left;
  margin-top: 50px;
  margin-bottom: 5px;
}
</style>

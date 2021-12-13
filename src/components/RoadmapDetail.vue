<template>
    <div>
        <div align="left" style="padding-bottom: 2%">
        <h3 class="page-header" style="font-weight:bold">{{ roadmap.name }}</h3>
        <a href="#creator"><h5 style="margin-bottom: 15px;">作成者: {{ roadmap.creator.name }} </h5></a>
        <p style="overflow-wrap:normal; text-algin=left">
        {{ roadmap.outline }}
        </p>
        </div>
        <div style="margin-bottom:5%;">
        <table align="center">
        <div v-for="(book, index) in roadmap.books" :key="book.title">
            <tr v-if="index !== 0">
            <td align="center">
                <i
                class="bi bi-chevron-double-down"
                style="font-size: 3rem; color: darkcyan; padding-top: 10px"
                ></i>
            </td>
            <td style="vertical-align: middle; text-align: left; color: darkcyan">
                <h6>{{ book.arrow_comment }}</h6>
            </td>
            </tr>
            <tr>
            <td>
                <img :src="book.cover_image" width="100px" height="130px"/>
            </td>
            <td style="vertical-align:top; padding-left:30px">
                <h5 style="margin: 0px; overflow-wrap: normal; font-weight: bold">{{ book.title }}</h5>
                <table style="text-align: left">
                <tr>
                    <td width="60">著者名:</td>
                    <td>{{ book.author }}</td>
                </tr>
                <tr>
                    <td>出版社:</td>
                    <td>{{ book.publisher }}</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div class="recomend">
                      <span class="box-title">おすすめポイント</span>
                      <p>{{ book.recomend_point }}</p>
                    </div>
                  </td>
                </tr>
                </table>
            </td>
            </tr>
        </div>
        </table>
        </div> 
    </div>
</template>

<script>
export default {
  props: ["roadmap"],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 3%;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 50%;
}
.v_line_left {
  border-left: 1ex solid darkcyan;
  padding-left: 10px;
}
.section-title {
  text-align: left;
  margin-top: 50px;
  margin-bottom: 5px;
}
.recomend {
    position: relative;
    margin: 2em 0;
    padding: 0.5em 1em;
    border: solid 3px darkcyan;
    background-color: mintcream;
    box-shadow: 3px 3px 3px #ccc;
    font-size: 13px;
}
.recomend .box-title {
    position: absolute;
    display: inline-block;
    top: -22px;
    left: -3px;
    padding: 0 7px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    background: darkcyan;
    color: #ffffff;
    font-weight: bold;
    border-radius: 3px 3px 0 0;
}
.recomend p {
    margin: 0; 
    padding: 0;
}
</style>
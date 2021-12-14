<template>
  <div class="title">
    <img src="/img/other/home.jpg" />
    <p>
      さあ、あなたのロードマップを見つけよう。<br />
      <small>
        経験豊富な人たちがあなたにぴったりのロードマップを紹介します。
        あなたにマッチしたアイテムを見つけましょう。
      </small>
    </p>
    <div class="heading">新着情報</div>
    <ul>
      <li>
        <div class="day">2021.12.27</div>
        <div class="label">NEW</div>
        <div class="text">
          年末年始のシステム稼働について
        </div>
      </li>
      <li>
        <div class="day">2021.12.10</div>
        <div class="label">NEW</div>
        <div class="text">
          新しいロードマップ「アジャイル開発入門学習ロードマップ」が作成されました。
        </div>
      </li>
      <li>
        <div class="day">2021.11.27</div>
        <div class="text">
          「アジャイル開発入門 学習ロードマップ」に質問が投稿されました。
        </div>
      </li>
      <li>
        <div class="day">2021.11.15</div>
        <div class="text">
          新しいロードマップ「デザイン思考入門学習ロードマップ」が作成されました。
        </div>
      </li>
      <li>
        <div class="day">2021.11.07</div>
        <div class="text">
          新しいロードマップ「○○○○○ ロードマップ」が作成されました。
        </div>
      </li>
      <li>
        <div class="day">2021.11.06</div>
        <div class="text">
          新しいロードマップ「××××× ロードマップ」が作成されました。
        </div>
      </li>
      <li>
        <div class="day">2021.11.06</div>
        <div class="text">
          新しいロードマップ「△△△△△ ロードマップ」が作成されました。
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.title {
  /*親div*/
  position: relative;
  margin-left: 30%;
}

.title p {
  position: absolute;
  color: snow; /*文字は白に*/
  font-weight: bold; /*太字に*/
  font-size: 2em; /*サイズ2倍*/
  font-family: Quicksand, sans-serif; /*Google Font*/
  top: 0;
  left: 0;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
}
.title p small {
  color: snow; /*文字は白に*/
  font-weight: bold; /*太字に*/
  font-size: 20px;
  font-family: Quicksand, sans-serif; /*Google Font*/
}
.title img {
  width: 100%;
}
.title ul {
  width: 100%;
}
.title li {
  display: flex;
  padding: 15px;
  border-bottom: 1px solid darkgrey;
}

.label {
  background-color: darkblue;
  border-radius: 3px;
  color: #fff;
  padding: 2px 5px;
  margin: 0 20px;
}

.text {
  padding-left: 12px;
}

.heading {
  font-weight: bold; /*太字に*/
  margin: 2em 0em 0.5em 1.5em; /* 枠外との間隔（上、右、下、左） */
  padding: 5px 10px;
  font-size: 1.5em; /* 文字サイズ */
  border-left: 6px solid darkcyan; /* 線の太さ・線種・色 */
}
</style>
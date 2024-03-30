<template>
  <el-container>
    <el-header>
      <h1>The Journey of Herbal - Scoreboard</h1>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center" style="padding-left: 20px;padding-right: 20px;">
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="player in players" :key="player.id"
          :class="['player', player.id]">
          <el-avatar :src="player.avatar"></el-avatar>
          <div class="score">
            <span>Stars:</span>
            <img class="star-img" v-for="n in 7" :key="n" :src="n <= player.stars ? star : star1" alt="star">
            <el-slider class="custom-stars-slider" v-model="player.stars" :max="7" show-stops></el-slider>
            <span>Health:</span>
            <img class="heart-img" v-for="n in 5" :key="n" :src="n <= player.health ? heart : heart1" alt="heart">
            <el-slider class="health-slider" v-model="player.health" :max="5" show-stops></el-slider>
          </div>
          <div>
            <el-result v-if="player.stars === 7" title="You are the winner!" type="success"
              :description="'Player ' + player.id + ' wins!'">
              <template #icon>
                <el-image :src=winpic />
              </template>
            </el-result>
            <el-result v-if="player.health === 0" title="You are out!" type="error"
              :description="'Player ' + player.id + ' is eliminated!'">
              <template #icon>
                <el-image :src=losepic />
              </template>
            </el-result>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import avatarA from '@/assets/img/img1.jpg';
import avatarB from '@/assets/img/img2.jpg';
import avatarC from '@/assets/img/img3.jpg';
import avatarD from '@/assets/img/img4.jpg';
import winpic from '@/assets/img/win.gif';
import losepic from '@/assets/img/dead.png';
import star from '@/assets/icon/star.png';
import heart from '@/assets/icon/heart.png';
import star1 from '@/assets/icon/star1.png';
import heart1 from '@/assets/icon/heart1.png';


export default {
  data() {
    return {
      players: {
        A: { id: 'A', stars: 0, health: 5, eliminated: false, avatar: avatarA },
        B: { id: 'B', stars: 0, health: 5, eliminated: false, avatar: avatarB },
        C: { id: 'C', stars: 0, health: 5, eliminated: false, avatar: avatarC },
        D: { id: 'D', stars: 0, health: 5, eliminated: false, avatar: avatarD }
      },
      gameOver: false,
      star: star,
      heart: heart,
      star1: star1,
      heart1: heart1,
      winpic: winpic, // 添加这一行
      losepic: losepic, // 添加这一行
    };
  },
  methods: {
    getStars(playerId) {
      return '⭐️'.repeat(this.players[playerId].stars);
    },
    getHealth(playerId) {
      return '❤️'.repeat(this.players[playerId].health);
    },
    getPlayerBackgroundColor(playerId) {
      switch (playerId) {
        case 'A':
          return 'background-color: #D9FFDF;';
        case 'B':
          return 'background-color: #FFD9D9;';
        case 'C':
          return 'background-color: #FFF6D9;';
        case 'D':
          return 'background-color: #D9E9FF;';
        default:
          return '';
      }
    },
    getButtonClass(playerId) {
      switch (playerId) {
        case 'A':
          return 'buttonsA';
        case 'B':
          return 'buttonsB';
        case 'C':
          return 'buttonsC';
        case 'D':
          return 'buttonsD';
        default:
          return '';
      }
    },

  }
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f2;
  color: #333;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #449948;
  text-align: center;
  font-weight: 600;
}
.el-header{
  height: 30px!important;
}
.el-main {
  width: 100%;
}

.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
}

.el-avatar {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;

}

.score {
  margin-left: 15px;
  font-size: 16px;
  /* 增加字体大小 */
  color: #3d543e;
  /* 改变字体颜色 */
  font-weight: bold;
  /* 字体加粗 */
  margin-left: 10px;

  span {
    padding-right: 5px;
    float: left;
  }
}

.star-img {
  width: 23px;
  height: 20px;
}

.heart-img {
  width: 19px;
  height: 21px;
  margin-right: 4px;
}

.el-image{
  width: 120px;
}
@media (min-width: 1280px) {
  .el-row {
    flex-wrap: nowrap;
  }
}

.A {
  /* Styles for player A */
  background-color: #D9FFDF;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.B {
  /* Styles for player B */
  background-color: #FFD9D9;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.C {
  /* Styles for player C */
  background-color: #FFF6D9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.D {
  /* Styles for player D */
  background-color: #D9E9FF;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.A button {
  background-color: #4CAF50;
}

.A button:hover {
  background-color: #8BC34A;
}

.B button {
  background-color: #FF6659;
}

.B button:hover {
  background-color: #FF8A80;
}

.C button {
  background-color: #FFB300;
}

.C button:hover {
  background-color: #FFD54F;
}

.D button {
  background-color: #03A9F4;
}

.D button:hover {
  background-color: #4FC3F7;
}
</style>
<style>
.custom-stars-slider .el-slider__bar {
  background-color: #FFD700 !important;
  /* 星星滑块的颜色 */
}

.custom-stars-slider .el-slider__button {
  border-color: #FFD700 !important;
  /* 星星滑块按钮的颜色 */
}

.health-slider .el-slider__bar {
  background-color: #FF6347 !important;
  /* 心形滑块的颜色 */
}

.health-slider .el-slider__button {
  border-color: #FF6347 !important;
  /* 心形滑块按钮的颜色 */
}
</style>
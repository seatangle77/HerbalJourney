<template>
  <el-container>
    <el-header>中医草药介绍</el-header>
    <el-main>
      <!-- 添加 tab-position="left" 使得标签竖着显示 -->
      <el-tabs v-model="activeHerbName" tab-position="left" style="height: 100vh;">
        <el-tab-pane
          v-for="herb in herbs"
          :key="herb.key"
          :label="`${herb.herb} / ${herb.englishName}`"
          :name="herb.key"
        >
          <herb-details :herb="herb" />
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import HerbDetails from './components/HerbDetails.vue';
import poria from './herbs_json/poria.json';
import licorice from './herbs_json/licorice.json';
import angelica from './herbs_json/angelica.json';
import platycodon from './herbs_json/platycodon.json';
import hawthorn from './herbs_json/hawthorn.json';
import alisma from './herbs_json/alisma.json';
import cyperus from './herbs_json/cyperus.json';
import salvia from './herbs_json/salvia.json';
import chrysanthemum from './herbs_json/chrysanthemum.json';
import atractylodes from './herbs_json/atractylodes.json';


export default {
  components: {
    HerbDetails,
  },
  data() {
    return {
      activeHerbName: 'poria', // 使用 URL 的哈希值或默认值
      herbs: [poria, licorice, angelica, platycodon, hawthorn, alisma, cyperus, salvia, chrysanthemum, atractylodes],
    };
  },
  mounted() {
    // 页面加载时获取哈希值，并设置对应的激活 tab
    this.activeHerbName = window.location.hash.substring(1) || 'poria';
  },
};
</script>
<style scoped>
.el-header {
  background-color: #ffffff; /* 设置一个浅灰色背景 */
  color: #333; /* 文本颜色为深灰色 */
  font-size: 24px;
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea; /* 添加底部边界线 */
}

.el-main {
  background-color: #ffffff; /* 设置奶油色背景 */
  padding: 20px;
}

/* Tabs 样式调整 */
::v-deep .el-tabs__content{
  background-color: #fff8dc; /* 设置奶油色背景 */
  padding-left: 30px;

}
::v-deep .el-tabs--left .el-tabs__nav {
  background-color: #ffffff; /* 未激活标签的背景色 */
}

/* Tab 标签样式 */
::v-deep .el-tabs__item {
  color: #6e6e6e; /* 标签文字颜色 */
  font-size: 16px; /* 字体大小调整为更大 */
  background-color: #ffffff; /* 标签背景颜色，同容器背景一致 */
}

/* 激活状态的标签样式 */
::v-deep .el-tabs__item.is-active {
  color: #ffffff; /* 激活标签的文字颜色 */
  background-color: #ef954a; /* 激活标签的背景色 */
}

/* Tab悬浮样式 */
::v-deep .el-tabs__item:hover {
  color: #333; /* 悬浮时文字颜色加深 */
}

/* 隐藏激活标签的滑动条 */
::v-deep .el-tabs__active-bar {
  display: none;
}
</style>




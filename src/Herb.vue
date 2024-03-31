<template>
  <el-container class="background-herb">
    <el-header @click="toggleDrawer">中医草药介绍</el-header>
    
    <!-- 主体布局 -->
    <el-row :gutter="20">
      <!-- 侧边栏导航，只在大屏设备显示 -->
      <el-col :md="6" :lg="5" :xl="4" class="sidebar">
        <el-tabs v-model="activeHerbName" tab-position="left" class="herb-tabs" stretch>
          <el-tab-pane
            v-for="herb in herbs"
            :key="herb.key"
            :label="`${herb.herb} / ${herb.englishName}`"
            :name="herb.key">
          </el-tab-pane>
        </el-tabs>
      </el-col>
      
      <!-- 内容区域 -->
      <el-col :xs="24" :sm="24" :md="18" :lg="19" :xl="20" class="herb-content">
        <el-main>
          <herb-details :herb="herbDetails" />
        </el-main>
      </el-col>
    </el-row>
    
    <!-- 移动端导航抽屉 -->
    <el-drawer
  title="草药列表"
  v-model="drawer"
  :with-header="false">
  <el-menu @select="selectHerb">
    <el-menu-item v-for="herb in herbs" :key="herb.key" :index="herb.key">
      {{ `${herb.herb} / ${herb.englishName}` }}
    </el-menu-item>
  </el-menu>
</el-drawer>
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
      drawer: false, // 控制移动端导航抽屉的状态
    };
  },
  mounted() {
    // 页面加载时获取哈希值，并设置对应的激活 tab
    this.activeHerbName = window.location.hash.substring(1) || 'poria';
  },
  methods: {
    selectHerb(key) {
      this.activeHerbName = key;
      this.drawer = false;
    },
    toggleDrawer() {
    this.drawer = !this.drawer; // 切换抽屉显示状态
    console.log('toggleDrawer', this.drawer)

  },
  },
  computed: {
    herbDetails() {
      return this.herbs.find(h => h.key === this.activeHerbName);
    },
  },
};
</script>
<style scoped>
.background-herb{
  background-color: #f8f8f8;

}
/* 更新头部样式，增加阴影效果以及微调字体 */
.el-header {
  background-color: #f5f5f5; /* 浅灰色背景，柔和且专业 */
  color: #333; /* 深灰色文本，易于阅读 */
  font-size: 24px; /* 增大标题字体，突出标题 */
  text-align: center;
  padding: 20px 0;
  border-bottom: none; /* 移除底部边界线 */
}
/* 移动端隐藏侧边栏 */
.sidebar {
  display: none;
  padding: 0!important;
}
.herb-content {
  padding: 0!important;
}
@media (max-width: 768px) {
  .herb-tabs-col {
    display: none;
  }
  .el-header {
    /* 添加可点击的按钮以打开导航抽屉 */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-header::after {
    content: '☰'; /* 或使用Element Plus图标 */
    font-size: 24px;
    cursor: pointer;
  }
}
/* 大屏幕显示侧边栏 */
@media (min-width: 992px) { /* 对应Element UI的md断点 */
  .sidebar {
    display: block;
  }
}

/* 更新主体内容的背景色和内边距 */
.el-main {
  background-color: #f8f8f8; /* 更淡的灰色背景，减少眼睛疲劳 */
  padding: 20px;
  min-height: calc(100vh - 64px); /* 确保至少填满视口高度减去头部高度 */
}

/* 更新Tab标签样式，提升视觉层次和美感 */
::v-deep .el-tabs__item {
  color: #333; /* 深灰色文本 */
  font-size: 16px; /* 统一标签字体大小 */
  background-color: #fafafa; /* 轻微区别于main的背景色 */
}
::v-deep .el-tabs--left .el-tabs__header.is-left{
  margin-right:0px
}
/* 更新活动标签的样式，使其更加突出 */
::v-deep .el-tabs__item.is-active {
  color: #fff; /* 白色字体 */
  background-color: #409EFF; /* Element UI 主题蓝色作为激活颜色 */
}

/* 优化标签的悬浮效果 */
::v-deep .el-tabs__item:hover {
  color: #fff; /* 悬浮时使用主题蓝色 */
  background-color: #409EFF; /* Element UI 主题蓝色作为激活颜色 */
}

/* 优化标签内容区域的背景和内边距 */
::v-deep .el-tabs__content {
  background-color: #f8f8f8; /* 白色背景，突出内容区 */
  padding: 20px 30px; /* 增大内边距，使内容更加宽敞 */
}

/* 调整Tab标签的高度，给予更多空间 */
::v-deep .el-tabs--left .el-tabs__nav-wrap {
  overflow: hidden; /* 隐藏多余的滚动条 */
}

/* 调整Tab导航的宽度 */
::v-deep .el-tabs--left .el-tabs__nav {
  width: 100%; /* 设定一个固定宽度 */
}

/* 调整激活状态下标签的指示器样式 */
::v-deep .el-tabs__active-bar {
  display: block; /* 恢复显示 */
  background-color: #409EFF; /* 使用主题蓝色 */
}


</style>




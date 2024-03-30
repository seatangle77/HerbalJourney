<template>
  <el-container>
    <el-header>疾病介绍</el-header>
    <el-main>
      <!-- 添加 tab-position="left" 使得标签竖着显示 -->
      <el-tabs v-model="activeHerbName" tab-position="left" style="height: 100vh;">
        <el-tab-pane
          v-for="diseaseData in diseases"
          :key="diseaseData.key"
          :label="`${diseaseData.disease.zh} / ${diseaseData.disease.en}`"
          :name="diseaseData.key"
        >
          <disease-detail :diseaseData="diseaseData" />
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import DiseaseDetail from './components/DiseaseDetail.vue';
import angina from './diseases_json/angina.json';
import arrhythmia from './diseases_json/arrhythmia.json';
import cough from './diseases_json/cough.json';
import cystitis from './diseases_json/cystitis.json';
import gastrointestinal from './diseases_json/gastrointestinal.json';
import indigestion from './diseases_json/indigestion.json';
import pneumonia from './diseases_json/pneumonia.json';
import urinary from './diseases_json/urinary.json';


export default {
  components: {
    DiseaseDetail,
  },
  data() {
    return {
      activeHerbName: 'angina', // 使用 URL 的哈希值或默认值
      diseases: [angina, arrhythmia, cough, cystitis, gastrointestinal, indigestion, pneumonia, urinary],
    };
  },
  mounted() {
    // 页面加载时获取哈希值，并设置对应的激活 tab
    this.activeHerbName = window.location.hash.substring(1) || 'angina';
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




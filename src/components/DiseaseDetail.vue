<template>
    <div class="disease-detail">
      <el-card class="box-card" shadow="hover">
        <h2>{{ diseaseData.disease.zh }}（{{ diseaseData.disease.en }}）</h2>
        <p>{{ diseaseData.description.zh }}</p>
        <p>{{ diseaseData.description.en }}</p>
        
        <el-divider>推荐草药</el-divider>
        <el-descriptions bordered column="1">
          <el-descriptions-item v-for="(herb, index) in diseaseData.recommended_herbs" :key="index">
            <template #label>{{ herb.name.zh }} ({{ herb.name.en }})</template>
            {{ herb.effects.zh }}<br>{{ herb.effects.en }}
          </el-descriptions-item>
        </el-descriptions>
  
        <el-divider>草药搭配</el-divider>
        <el-descriptions bordered column="1">
          <el-descriptions-item v-for="(combo, index) in diseaseData.herbal_combinations" :key="`combo-${index}`">
            <template #label>{{ combo.combination.zh }} ({{ combo.combination.en }})</template>
            {{ combo.effects.zh }}<br>{{ combo.effects.en }}
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ElCard, ElDescriptions, ElDescriptionsItem, ElDivider } from 'element-plus';
  
  // 接收来自父组件的diseaseData属性
  const props = defineProps({
    diseaseData: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .disease-detail {
    margin: 20px;
  }
  .el-card.box-card {
    margin-bottom: 20px;
  }
  </style>
  
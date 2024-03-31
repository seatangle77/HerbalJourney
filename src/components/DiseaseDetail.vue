<template>
  <div class="disease-detail">
    <div class="card">
      <h2>{{ diseaseData.disease.zh }}（{{ diseaseData.disease.en }}）</h2>
      <p>{{ diseaseData.description.zh }}</p>
      <p>{{ diseaseData.description.en }}</p>
    </div>

    <div class="card">
      <h3>推荐草药</h3>
      <div v-for="(herb, index) in diseaseData.recommended_herbs" :key="index" class="herb">
        <strong>{{ herb.name.zh }} ({{ herb.name.en }})</strong>
        <p>{{ herb.effects.zh }}<br>{{ herb.effects.en }}</p>
      </div>
    </div>

    <div class="card">
      <h3>草药搭配</h3>
      <div v-for="(combo, index) in diseaseData.herbal_combinations" :key="`combo-${index}`" class="combo">
        <strong>{{ combo.combination.zh }} ({{ combo.combination.en }})</strong>
        <p>{{ combo.effects.zh }}<br>{{ combo.effects.en }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// 接收来自父组件的diseaseData属性
const props = defineProps({
  diseaseData: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>

.card {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

h2, h3 {
  color: #333;
  margin-bottom: 16px;
}

p {
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

.herb, .combo {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.herb:last-child, .combo:last-child {
  border-bottom: none;
}
</style>

<template>
    <div>
      <h1>{{ herb.herb }} / {{ herb.englishName }}</h1>
      <p><strong>Scientific Name:</strong> {{ herb.details.scientificName.en }}</p>
      <p><strong>别名：</strong> {{ herb.details.alternativeNames.zh.join(', ') }} / {{ herb.details.alternativeNames.en.join(', ') }}</p>
      <p><strong>Family:</strong> {{ herb.details.family.zh }} / {{ herb.details.family.en }}</p>
      <p><strong>Habitat:</strong> {{ herb.details.habitat.zh }} / {{ herb.details.habitat.en }}</p>
      <p><strong>Used Part:</strong> {{ herb.details.usedPart.zh }} / {{ herb.details.usedPart.en }}</p>
      <p><strong>Main Components:</strong> {{ herb.details.mainComponents.zh }} / {{ herb.details.mainComponents.en }}</p>
      <div>
        <h2>Therapeutic Effects</h2>
        <ul>
          <li v-for="effect in herb.details.therapeuticEffects" :key="effect.en">
            {{ effect.zh }} / {{ effect.en }}
          </li>
        </ul>
      </div>
      <p><strong>Usage and Dosage:</strong> {{ herb.details.usageAndDosage.zh }} / {{ herb.details.usageAndDosage.en }}</p>
      <p><strong>Cautions:</strong> {{ herb.details.cautions.zh }} / {{ herb.details.cautions.en }}</p>
      <div class="images">
        <img v-for="img in herb.images" :key="img" :src="img.substring(7)" alt="Herb Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HerbDetails',
    props: {
      herb: {
        type: Object,
        default: () => ({
          // Default empty object structure
        }),
      },
    },
  };
  </script>
  
  <style scoped>
  .herb-details {
    background-color: #fff8dc; /* 设置奶油色背景 */
    color: #6e6e6e; /* 设置深色字体 */
    padding: 20px;
    margin-left: 30px; /* 与Tabs增加间距 */
    border-radius: 5px; /* 添加圆角 */
    font-size: 14px; /* 设置字体大小 */
    line-height: 1.6; /* 行高增加，增强阅读体验 */
  }
  
  .herb-details h2 {
    color: #333; /* 标题字体颜色 */
    margin-bottom: 16px;
  }
  
  .herb-details h3 {
    color: #333; /* 小标题字体颜色 */
    margin-top: 24px;
    margin-bottom: 8px;
  }
  
  .herb-details p, .herb-details li {
    margin-bottom: 8px;
  }
  
  .herb-details ul {
    list-style: none; /* 移除列表符号 */
    padding-left: 0; /* 移除默认的内边距 */
  }
  
  .herb-details ul li::before {
    content: '• ';
    color: #db7b3e; /* 列表项目符号颜色 */
    padding-right: 8px;
  }
  
  .images {
    margin-top: 20px;
  }
  
  .images img {
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    margin-right: 10px;
    margin-bottom: 10px;
    width: 100px;
    height: auto;
  }
  
  /* 响应式布局调整，若有必要 */
  @media (max-width: 768px) {
    .herb-details {
      margin-left: 0;
    }
  }
  </style>
  
  
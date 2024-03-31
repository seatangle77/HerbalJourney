<template>
  <div class="herb-details">
    <div class="card">
      <h1>{{ herb.herb }} / {{ herb.englishName }}</h1>
      <div class="content">
        <p><strong>Scientific Name:</strong> {{ herb.details.scientificName.en }}</p>
        <p><strong>别名：</strong> {{ herb.details.alternativeNames.zh.join(', ') }} / {{
        herb.details.alternativeNames.en.join(', ') }}</p>
        <p><strong>Family:</strong> {{ herb.details.family.zh }} / {{ herb.details.family.en }}</p>
        <p><strong>Habitat:</strong> {{ herb.details.habitat.zh }} / {{ herb.details.habitat.en }}</p>
        <p><strong>Used Part:</strong> {{ herb.details.usedPart.zh }} / {{ herb.details.usedPart.en }}</p>
        <p><strong>Main Components:</strong> {{ herb.details.mainComponents.zh }} / {{ herb.details.mainComponents.en }}
        </p>
      </div>
      <div class="images-container">
        <div class="images" v-for="img in herb.images" :key="img">
          <img :src="getImagePath(img)" alt="Herb Image" />
        </div>
      </div>
    </div>

    <div class="card effects">
      <h2>Therapeutic Effects</h2>
      <ul>
        <li v-for="effect in herb.details.therapeuticEffects" :key="effect.en">
          {{ effect.zh }} / {{ effect.en }}
        </li>
      </ul>
    </div>

    <div class="card">
      <p><strong>Usage and Dosage:</strong> {{ herb.details.usageAndDosage.zh }} / {{ herb.details.usageAndDosage.en }}
      </p>
      <p><strong>Cautions:</strong> {{ herb.details.cautions.zh }} / {{ herb.details.cautions.en }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HerbDetails',
  data() {
    return {
      imgpath: "@/assets/herbs/", // 将imgpath放在data函数中
    };
  },  props: {
    herb: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
  getImagePath(img) {
    return `/assets/herbs/${img}`;
  },
  // ...其他方法...
},
};
</script>

<style scoped>
.herb-details {
  background-color: #f0f0f0;
  /* 浅灰色背景 */
  padding: 20px;
}

.card {
  background-color: #ffffff;
  /* 卡片使用白色背景 */
  border-radius: 5px;
  /* 卡片圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 卡片阴影 */
  margin-bottom: 20px;
  /* 卡片间距 */
  padding: 20px;
  /* 卡片内边距 */
}

h1,
h2 {
  color: #333;
  /* 标题颜色 */
  font-size: 18px;
  /* 标题字体大小 */
}

p,
li {
  color: #666;
  /* 正文颜色 */
  font-size: 14px;
  /* 正文字体大小 */
}

ul {
  list-style-type: none;
  /* 移除列表符号 */
  padding-left: 0;
  /* 移除列表默认内边距 */
}

li::before {
  content: '•';
  color: #409EFF;
  /* 信息强调颜色 */
  padding-right: 8px;
}
.images-container {
  display: flex; /* 启用Flex布局 */
  justify-content: center; /* 图片容器内的内容居中 */
  flex-wrap: wrap; /* 允许子元素换行 */
  gap: 10px; /* 设置子元素之间的间隙 */
}
.images {
  display: flex; /* 使用Flexbox布局 */
  flex-wrap: wrap; /* 允许元素折行 */
  justify-content: space-between; /* 元素之间留有空隙 */
  width: auto; /* 设置宽度为100% */

}

.images img {
  border-radius: 5px;
  /* 图片圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 图片阴影 */
  margin-right: 10px;
  /* 图片间距 */
  margin-bottom: 10px;
  width: 350px;
  /* 图片宽度 */
  height: auto;
  /* 图片高度自适应 */
}

/* 响应式布局调整 */
@media (max-width: 768px) {
  .herb-details {
    padding: 10px;
  }
}
</style>

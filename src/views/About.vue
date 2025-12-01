<script setup lang="ts">
const links = [
  {
    label: "Rubick 官方仓库",
    url: "https://github.com/rubickCenter/rubick",
  },
  {
    label: "Vue 官方文档",
    url: "https://cn.vuejs.org/",
  },
  {
    label: "Pinia 状态管理",
    url: "https://pinia.vuejs.org/zh/",
  },
  {
    label: "Vite 配置手册",
    url: "https://cn.vitejs.dev/config/",
  },
];
</script>

<template>
  <section class="about">
    <h2>关于模板</h2>
    <p>
      本模板专注提供 Rubick + Vue3 的基础结构，包括路由、Pinia
      示例以及 Rubick API 类型定义。你可以在此基础上快速搭建插件界面。
    </p>

    <h3>如何扩展</h3>
    <ul>
      <li>在 <code>src/views</code> 中编写页面组件，通过路由控制导航。</li>
      <li>
        在 <code>src/stores</code> 中创建 Pinia
        store，复用业务状态或访问 Rubick 能力。
      </li>
      <li>若需要全局样式或 UI 库，可在 <code>src/main.ts</code> 中引入。</li>
    </ul>

    <h3>参考链接</h3>
    <ul>
      <li v-for="item in links" :key="item.url">
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.about {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
  line-height: 1.7;
  color: #1f2933;
}

.about h2 {
  font-size: 28px;
  margin: 0;
}

.about h3 {
  margin: 16px 0 8px;
  font-size: 20px;
  color: #0f172a;
}

.about p {
  margin: 0;
  color: #475569;
}

.about ul {
  margin: 0;
  padding-left: 18px;
  color: #334155;
}

.about li {
  margin-bottom: 8px;
}

.about a {
  color: #2563eb;
  text-decoration: none;
}

.about a:hover {
  text-decoration: underline;
}
</style>

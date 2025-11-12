<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const isRubickEnvironment =
  typeof window !== "undefined" && Boolean(window.rubick);

const quickStartSteps = [
  {
    title: "添加页面",
    description:
      "在 src/views 中新建 Vue 单文件组件，并在 src/router/index.ts 注册路由。",
  },
  {
    title: "使用 Pinia",
    description:
      "通过 Pinia 管理状态，详见 src/stores/counter.ts 示例，也可根据需要拆分模块。",
  },
  {
    title: "调用 Rubick API",
    description:
      "在 window.rubick 可用时调用 Rubick 能力，相关类型定义位于 types/rubick.d.ts。",
  },
];

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
</script>

<template>
  <section class="page">
    <header class="page__header">
      <h2>示例页面</h2>
      <p>
        这里展示了如何基于模板快速扩展功能。替换此页面的内容即可开始构建你的插件界面。
      </p>
      <p class="page__env-hint">
        当前运行环境：
        <strong>{{ isRubickEnvironment ? "Rubick 插件" : "普通浏览器" }}</strong>
      </p>
    </header>

    <ol class="page__steps">
      <li v-for="step in quickStartSteps" :key="step.title">
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </li>
    </ol>

    <section class="page__card">
      <h3>Pinia 示例</h3>
      <p>
        当前计数：<strong>{{ count }}</strong>；双倍：<strong>{{ doubleCount }}</strong>
      </p>
      <div class="page__actions">
        <button type="button" @click="counterStore.increment()">增加</button>
        <button type="button" class="secondary" @click="counterStore.reset()">
          重置
        </button>
      </div>
    </section>

    <footer class="page__footer">
      <p>更多 Rubick API 示例可以在 src/rubick 目录中添加。</p>
    </footer>
  </section>
</template>

<style scoped>
.page {
  margin: 0 auto;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.page__header h2 {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 600;
  color: #0f172a;
}

.page__header p {
  margin: 0 0 12px;
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
}

.page__env-hint {
  padding: 12px 16px;
  background: rgba(37, 99, 235, 0.12);
  border-radius: 8px;
  color: #1d4ed8;
}

.page__steps {
  list-style: decimal;
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.page__steps h3 {
  margin: 0 0 6px;
  font-size: 18px;
  color: #0f172a;
}

.page__steps p {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}

.page__footer {
  padding: 16px;
  border-radius: 8px;
  background: #fff;
  border: 1px dashed rgba(15, 23, 42, 0.15);
  color: #334155;
}

.page__card {
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), #fff);
  color: #1e293b;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid rgba(37, 99, 235, 0.12);
}

.page__actions {
  display: flex;
  gap: 12px;
}

.page__actions button {
  padding: 6px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: #2563eb;
  transition: opacity 0.2s ease;
}

.page__actions button.secondary {
  background: #0f172a;
}

.page__actions button:hover {
  opacity: 0.8;
}
</style>

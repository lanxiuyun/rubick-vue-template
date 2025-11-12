<script setup lang="ts">
import Menu from "@/components/Menu.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app-shell">
    <header class="app-shell__header">
      <h1>Rubick Vue 模板</h1>
      <p>这是一个用于创建 Rubick 插件界面的 Vue3 + Vite 骨架。</p>
    </header>

    <section class="app-shell__menu">
      <Menu />
    </section>

    <main class="app-shell__content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: #f6f7fb;
  color: #1f2933;
}

.app-shell__header {
  padding: 24px 32px 12px;
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  color: #fff;
}

.app-shell__header h1 {
  margin: 0 0 8px;
  font-size: 24px;
}

.app-shell__header p {
  margin: 0;
  font-size: 14px;
  opacity: 0.85;
}

.app-shell__menu {
  padding: 12px 32px;
  background: #fff;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.app-shell__content {
  flex: 1;
  padding: 32px;
  overflow: auto;
}
</style>

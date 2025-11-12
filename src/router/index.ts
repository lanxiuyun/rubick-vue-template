import AboutView from "@/views/About.vue";
import QuickLaunch from "@/views/QuickLaunch.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 使用 hash 模式, 适配 rubick 的 file:// 协议;
  routes: [
    {
      path: "/",
      name: "home",
      component: QuickLaunch,
      meta: {
        title: "示例页面",
        description: "展示如何组织 Rubick + Vue 视图",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        title: "关于模板",
        description: "了解如何扩展此骨架",
      },
    },
  ],
});

export default router;
 
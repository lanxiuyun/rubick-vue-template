<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRouter } from "vue-router";

type NavigationItem = {
  path: string;
  title: string;
  description?: string;
};

const router = useRouter();

const navigationItems = computed<NavigationItem[]>(() =>
  router.options.routes
    .filter((route) => !route.meta?.hideInMenu)
    .map((route) => ({
      path: route.path,
      title: String(route.meta?.title ?? route.name ?? route.path),
      description: route.meta?.description as string | undefined,
    }))
);
</script>

<template>
  <nav class="menu">
    <RouterLink
      v-for="item in navigationItems"
      :key="item.path"
      :to="item.path"
      class="menu__link"
    >
      <span class="menu__title">{{ item.title }}</span>
      <small v-if="item.description" class="menu__desc">
        {{ item.description }}
      </small>
    </RouterLink>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.menu__link {
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  color: #1f2933;
  transition: border 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  min-width: 140px;
}

.menu__link.router-link-active {
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  transform: translateY(-2px);
}

.menu__link:hover {
  border-color: rgba(148, 163, 184, 0.6);
}

.menu__title {
  font-size: 14px;
  font-weight: 600;
}

.menu__desc {
  font-size: 12px;
  color: #64748b;
}
</style>

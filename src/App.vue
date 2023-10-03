<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo">
      <img alt="FAS logo" src="@/assets/logo.png" />
    </div>
    <div class="navigation">
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">О нас</RouterLink>
        <RouterLink to="/tools">Наши инструменты</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  height: 79px;
  overflow: hidden;
}

.logo {
  width: 79px;
  float: left;
}

.navigation {
  height: 79px;
  line-height: 79px;
  padding-left: 20px;
  float: left;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid var(--fas-blue);
}

nav a.router-link-exact-active:hover {
  cursor: default;
  border-top: 2px solid var(--vt-c-white);
  border-right: 2px solid var(--vt-c-white);
  border-bottom: 2px solid var(--fas-blue);
  border-left: 2px solid var(--vt-c-white);
}

nav a {
  padding: 1rem;
}
</style>

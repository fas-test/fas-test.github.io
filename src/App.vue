<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isTopOfPage = ref(true);

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

window.addEventListener('scroll', () => {
  isTopOfPage.value = (window.scrollY <= 100);
});
</script>

<template>
  <div class="container">
    <header>
      <div class="logo">
        <img alt="FAS logo" src="@/assets/logo.png" />
      </div>
      <div class="navigation">
        <nav>
          <RouterLink to="/">Главная</RouterLink>
          <RouterLink to="/about">О нас</RouterLink>
          <RouterLink to="/tools">Наши инструменты</RouterLink>
          <RouterLink to="/contacts">Контакты</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

    <div v-show="!isTopOfPage" class="to-the-top" @click="scrollToTop">
      <img alt="Arrow up" src="@/assets/arrow-up.svg" />
    </div>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  padding: 20px 40px;
  height: 119px;
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
  float: right;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: var(--vt-c-black-soft);
  text-transform: uppercase;
}

nav a:hover {
  cursor: pointer;
  border: 2px solid var(--fas-blue);
}

nav a.router-link-exact-active {
  color: var(--fas-blue);
}

nav a.router-link-exact-active:hover {
  cursor: default;
  color: var(--fas-blue);
  border: 2px solid var(--vt-c-white);
}

nav a {
  padding: 1rem;
}

.to-the-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: var(--vt-c-black-soft);
  border-radius: 50%;
  -webkit-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
     -moz-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
          box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
  cursor: pointer;
}

.to-the-top img {
  width: 50px;
  height: 50px;
  filter: invert(99%) sepia(3%) saturate(47%) hue-rotate(157deg) brightness(114%) contrast(95%);
}
</style>

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
      <RouterLink to="/">
        <div class="logo">
          <img alt="FAS logo" src="@/assets/fas_logo.svg" />
        </div>
      </RouterLink>
      <div class="navigation">
        <nav>
          <RouterLink to="/about">О нас</RouterLink>
          <RouterLink to="/tools">Наши инструменты</RouterLink>
          <RouterLink to="/consulting">Консалтинг</RouterLink>
          <RouterLink to="/events">Мероприятия</RouterLink>
          <RouterLink to="/contacts">Контакты</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

    <footer>
      <div class="footer-container">
        <div class="footer-subcontainer">
          <div class="footer-subheader">Наши соцсети</div>
          <div class="footer-social">
            <img alt="instagram" src="@/assets/icons/instagram.svg" />
            <img alt="facebook" src="@/assets/icons/facebook.svg" />
            <img alt="twitter" src="@/assets/icons/twitter.svg" />
          </div>
        </div>
        <div class="footer-subcontainer">
          <div class="footer-subheader">Меню</div>
          <div class="menu-items">
            <RouterLink to="/">Главная</RouterLink>
            <RouterLink to="/about">О нас</RouterLink>
            <RouterLink to="/tools">Наши инструменты</RouterLink>
            <RouterLink to="/consulting">Консалтинг</RouterLink>
            <RouterLink to="/events">Мероприятия</RouterLink>
            <RouterLink to="/contacts">Контакты</RouterLink>
          </div>
        </div>
      </div>
      <div class="footer-privacy"><RouterLink to="/privacy">Политика конфиденциальности</RouterLink></div>
      <div class="footer-copyright">© Future Assessment Service 2023. Все права защищены</div>
    </footer>

    <div v-show="!isTopOfPage" class="to-the-top" @click="scrollToTop">
      <img alt="Arrow up" src="@/assets/icons/arrow-up.svg" />
    </div>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  padding: 20px 40px 20px 60px;
  height: 119px;
  overflow: hidden;
}

footer {
  width: 100%;
  padding: 40px 60px 20px;
  background-color: var(--vt-c-black-soft);
  color: var(--vt-c-white-mute);
}

.footer-container .footer-subcontainer {
  float: left;
  padding-right: 120px;
}

.menu-items {
  display: flex;
  flex-direction: column;
}

.menu-items a {
  border-width: 0;
  font-size: 16px;
  color: var(--vt-c-text-dark-2);
}

.menu-items a.router-link-exact-active {
  color: var(--fas-blue);
  cursor: default;
}

.footer-privacy {
  padding-top: 60px;
  clear: left;
}

.footer-privacy a {
  color: var(--vt-c-text-dark-2);
  cursor: pointer;
  border-top: none;
  border-right: none;
  border-bottom: 2px dotted;
  border-left: none;
}

.footer-privacy a:hover {
  color: var(--fas-blue);
}

.footer-copyright {
  padding-top: 5px;
  color: var(--vt-c-text-dark-2);
}

.footer-subheader {
  font-weight: 600;
  font-size: 30px;
  padding-bottom: 10px;
}

.footer-social img {
  margin-right: 10px;
  width: 30px;
  height: 30px;
  filter: invert(77%) sepia(28%) saturate(7203%) hue-rotate(172deg) brightness(100%) contrast(93%);
  cursor: pointer;
}

.logo {
  float: left;
  padding-top: 12px;
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

nav a {
  color: var(--vt-c-black-soft);
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

@media (min-width: 1200px) {
  header {
    padding-left: 120px;
  }

  footer {
    padding: 40px 120px 20px;
  }
}
</style>

<script setup lang="ts">
  import HomeItemView from "@/views/HomeItemView.vue";

  const hideOverlay = () => {
    const overlay = document.getElementById('home-overlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  };
</script>

<template>
  <div class="page-container">
    <div id="home-overlay">
      <div id="home-overlay-banner">
        <div id="home-overlay-close" @click="hideOverlay">✖</div>
        <div class="overlay-title">
          Олимпиада школьников<br>
          по Цифровой Грамотности
        </div>
        <div class="overlay-description">
          •	Бесплатное участие<br>
          •	Полезные отчеты школе, ученикам и родителям<br>
          •	Современные задания, похожие на игру
        </div>
        <div class="overlay-buttons">
          <div class="overlay-action">
            <a target="_blank" href="https://forms.gle/WNXSNypUb954xo3NA">Зарегистрироваться</a>
          </div>
          <div class="overlay-action">
            <RouterLink to="/events">Подробнее</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div id="home-img" class="page-main-img">
      <div class="text">
        <div class="title">
          Оцениваем<br>
          настоящее.<br>
          Строим будущее.
        </div>
        <div class="description">
          Новое поколение<br>
          инструментов оценивания<br>
          сложных компетенций и навыков<br>
        </div>
        <div class="action">
          <RouterLink to="/contacts">Связаться с нами</RouterLink>
        </div>
      </div>
    </div>
    <div class="split-container">
      <div class="title">
        Future<br>
        Assessment<br>
        Service
      </div>
      <div class="description">
        <p>
          Мы предоставляем инновационные решения на рынке образовательных и психологических измерений для учителей,
          учеников, родителей и администраторов образовательных организаций.
        </p>
        <p>
          Наша обратная связь дает валидную и надежную информацию для доказательных решений об образовательном маршруте.
        </p>
        <p>
          Наши линейки инструментов оценивают образовательный прогресс и позволяют отслеживать, как изменяются способности
          учеников во времени.
        </p>
        <p>
          Наши инструменты измерения основаны на самых современных разработках в области психометрики и искусственного
          интеллекта, а также последних открытий в психологии и науках об образовании.
        </p>
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="title">
        Наши инструменты<br>
        измерения
      </div>
    </div>
    <div class="very-basic-blue-container">
      <div id="home-items">
        <HomeItemView
            icon="eye"
            label="Мониторят прогресс каждого ученика, класса или параллели"
        />
        <HomeItemView
            icon="document"
            label="Дают индивидуальные и конкретные рекомендации учителю, ученику и родителям"
        />
        <HomeItemView
            icon="pen"
            label="Помогают персонализировать обучение в реальности, а не на бумаге"
        />
        <HomeItemView
            icon="timer"
            label="Экономят силы и время учителя за счет автоматизации компьютерного оценивания"
        />
        <HomeItemView
            icon="magnifier"
            label="Опираются на доказательный подход к образовательному и психологическому оцениванию"
        />
      </div>
    </div>
  </div>
</template>

<style>
  #home-img {
    background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
      url('@/assets/photos/home_main.jpeg');
  }

  #home-items {
    display: flex;
    width: 600px;
    min-width: 600px;
    margin: 0 auto;
  }

  #home-overlay {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
  }

  #home-overlay-banner {
    position: absolute;
    top: 100px;
    left: 50%;
    width: calc(100% - 100px);
    max-width: 700px;
    -ms-transform: translate(-50%);
        transform: translate(-50%);
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8)),
        url('@/assets/banner.jpeg');
    background-size: cover;
    border-radius: 5px;
    padding: 30px;
  }

  #home-overlay-banner .overlay-title {
    line-height: 1.1;
    font-size: 24px;
    font-weight: 700;
    color: var(--vt-c-black-soft);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }

  #home-overlay-banner .overlay-description {
    line-height: 1.1;
    font-size: 20px;
    font-weight: 500;
    color: var(--vt-c-black-soft);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    padding: 30px 0;
  }

  .overlay-buttons {
    display: block;
    width: 220px;
    margin: 0 auto;
  }

  .overlay-action {
    background-color: var(--vt-c-black-soft);
    width: 220px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 7px;
    -webkit-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
    -moz-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
    box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
    cursor: pointer;
    margin: 0 0 10px 0;
  }

  .overlay-action a {
    display: block;
    color: var(--vt-c-white-mute);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    border-width: 0;
  }

  #home-overlay-close {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 40px;
    color: var(--vt-c-white);
    margin-top: -55px;
    margin-right: 0;
  }

  @media (min-width: 768px) {

    #home-overlay-banner {
      top: 50%;
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
    }

    #home-overlay-banner .overlay-title {
      font-size: 40px;
      font-weight: 800;
    }

    #home-overlay-banner .overlay-description {
      font-size: 25px;
      font-weight: 600;
      padding: 50px 0;
    }

    .overlay-buttons {
      display: flex;
      width: 100%;
    }

    .overlay-action {
      margin: 0 10px 0 0;
    }

    #home-overlay-close {
      margin-right: -40px;
    }
  }

  @media (min-width: 1024px) {
    #home-items {
      width: 1000px;
    }
  }
</style>

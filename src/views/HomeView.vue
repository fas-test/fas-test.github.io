<script setup lang="ts">
  import HomeItemView from "@/views/HomeItemView.vue";
</script>

<template>
  <div class="page-container">
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
    padding-bottom: 40px;
  }

  @media (min-width: 1024px) {
    #home-items {
      width: 1000px;
      margin: 0 auto;
      padding-bottom: 80px;
    }
  }
</style>

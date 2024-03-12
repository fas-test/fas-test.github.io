<template>
  <div class="page-container">
    <div id="consulting-img" class="page-main-img">
      <div class="text">
        <div class="title">
          Направления<br>
          экспертизы<br>
          и консалтинга
        </div>
        <div class="empty"></div>
        <div class="action">
          <RouterLink to="/contacts">Связаться с нами</RouterLink>
        </div>
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="container-with-blocks">
        <div class="consulting-block block">
          <div class="consulting-block-dot"></div>
          <div class="consulting-block-title">
            ЭКСПЕРТИЗА ИНСТРУМЕНТОВ ОЦЕНИВАНИЯ
          </div>
          <div class="consulting-block-description">
            Для образовательных и коммерческих организаций проводим психометрический анализ инструментов оценивания в образовании,
            проверяем их на соответствие международным стандартам, даем экспертное заключение о качестве инструментов и рекомендации
            по улучшению качества
          </div>
        </div>
        <div class="consulting-block block">
          <div class="consulting-block-dot"></div>
          <div class="consulting-block-title">
            ЭКСПЕРТНАЯ ПОМОЩЬ В РАЗРАБОТКЕ ИНСТРУМЕНТОВ ОЦЕНИВАНИЯ В ОБРАЗОВАНИИ
          </div>
          <div class="consulting-block-description">
            Обеспечиваем методическое и психометрическое сопровождение разработки инструментов оценивания в образовании: можем
            сами разработать любой инструмент для вас, а можем помочь это сделать вам
          </div>
        </div>
      </div>
      <div class="container-with-blocks">
        <div class="consulting-block block">
          <div class="consulting-block-dot"></div>
          <div class="consulting-block-title">
            ИНДИВИДУАЛЬНЫЙ ОБРАЗОВАТЕЛЬНЫЙ ПРОГРЕСС УЧАЩИХСЯ
          </div>
          <div class="consulting-block-description">
            Оказываем консалтинговые услуги по измерению индивидуального прогресса в обучении по предметным и метапредметным
            образовательным результатам, а также по другим психометрическим аспектам измерений в образовании
          </div>
        </div>
        <div class="consulting-block block">
          <div class="consulting-block-dot"></div>
          <div class="consulting-block-title">
            ОБУЧЕНИЕ МЕТОДИСТОВ И АНАЛИТИКОВ
          </div>
          <div class="consulting-block-description">
            По различным аспектам измерений в образовании проводим обучение на основе авторских методик дополнительного
            профессионального образования (язык: русский / английский, формат: онлайн / офлайн)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #consulting-img {
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)),
        url('@/assets/photos/consulting_main.png');
  }

  .consulting-block {
    color: var(--vt-c-black-soft);
    padding: 20px;
  }

  .consulting-block .consulting-block-dot {
    width: 20px;
    height: 20px;
    background-color: var(--fas-blue);
    border-radius: 50%;
  }

  .consulting-block .consulting-block-title {
    padding-top: 10px;
    color: var(--fas-blue);
    font-size: 16px;
    font-weight: 500;
    height: 90px;
  }

  .consulting-block .consulting-block-description {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    .consulting-block .consulting-block-dot {
      width: 30px;
      height: 30px;
    }

    .consulting-block .consulting-block-title {
      font-size: 22px;
      height: 120px;
    }

    .consulting-block .consulting-block-description {
      font-size: 18px;
      padding-bottom: 10px;
    }
  }

  @media (min-width: 1200px) {
    .consulting-block .consulting-block-dot {
      width: 40px;
      height: 40px;
    }

    .consulting-block .consulting-block-title {
      font-size: 26px;
      height: 150px;
      padding-top: 20px;
    }

    .consulting-block .consulting-block-description {
      font-size: 22px;
    }
  }
</style>

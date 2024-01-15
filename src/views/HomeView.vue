<template>
  <div class="home">
    <div id="home-main-img">
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
    <div id="intro">
      <div class="name">
        Future<br>
        Assessment<br>
        Service
      </div>
      <div class="description">
        Мы предоставляем инновационные решения на рынке образовательных и психологических измерений для учителей,
        учеников, родителей и администраторов образовательных организаций.
        <br><br>
        Наша обратная связь дает валидную и надежную информацию для доказательных решений об образовательном маршруте.
        <br><br>
        Наши линейки инструментов оценивают образовательный прогресс и позволяют отслеживать, как изменяются способности
        учеников во времени.
        <br><br>
        Наши инструменты измерения основаны на самых современных разработках в области психометрики и искусственного
        интеллекта, а также последних открытий в психологии и науках об образовании.
      </div>
    </div>
    <div id="home-gap"></div>
    <div id="home-tools">
      <div class="title">
        Наши инструменты<br>
        измерения
      </div>
      <div class="items">
          <div class="triangle-container">
            <div class="triangle">
              <img alt="eye" src="@/assets/icons/eye.svg" />
            </div>
            <span>Мониторят прогресс каждого ученика, класса или параллели</span>
          </div>
          <div class="triangle-container">
            <div class="triangle">
              <img alt="document" src="@/assets/icons/document.svg" />
            </div>
            <span>Дают индивидуальные и конкретные рекомендации учителю, ученику и родителям</span>
          </div>
          <div class="triangle-container">
            <div class="triangle">
              <img alt="pen" src="@/assets/icons/pen.svg" />
            </div>
            <span>Помогают персонализировать обучение в реальности, а не на бумаге</span>
          </div>
          <div class="triangle-container">
            <div class="triangle">
              <img alt="timer" src="@/assets/icons/timer.svg" />
            </div>
            <span>Экономят силы и время учителя за счет автоматизации компьютерного оценивания</span>
          </div>
          <div class="triangle-container">
            <div class="triangle">
              <img alt="timer" src="@/assets/icons/magnifier.svg" />
            </div>
            <span>Опираются на доказательный подход к образовательному и психологическому оцениванию</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  min-width: 600px;
}

#home-main-img {
  background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
      url('@/assets/photos/home_main.jpeg');
  width: 100%;
  min-width: 600px;
  height: 500px;
  background-size: cover;
}

#home-main-img .text {
  padding-left: 120px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
      transform: translateY(-50%);
}

#home-main-img .text .title {
  font-weight: 900;
  font-size: 40px;
  line-height: 1.1;
  color: var(--fas-blue);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

#home-main-img .text .description {
  padding: 40px 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  color: var(--vt-c-black-soft);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

#home-main-img .text .action {
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
}

#home-main-img .text .action a {
  display: block;
  color: var(--vt-c-white-mute);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  border-width: 0;
}

#intro {
  padding: 40px 120px;
}

#intro .name {
  color: var(--fas-blue);
  font-weight: 700;
  font-size: 40px;
  line-height: 1.1;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

#intro .description {
  padding-top: 40px;
  font-size: 18px;
  line-height: 1.3;
}

#home-gap {
  clear: left;
  height: 60px;
  background-color: white;
}

#home-tools {
  min-width: 600px;
  width: 100%;
  background-color: var(--fas-blue);
  color: white;
  text-align: center;
}

#home-tools .title {
  padding: 40px 0;
  font-weight: 900;
  font-size: 40px;
  line-height: 1.1;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}

#home-tools .items {
  display: flex;
  width: 600px;
  min-width: 600px;
  margin: 0 auto;
  padding-bottom: 40px;
}

#home-tools .items .triangle-container {
  display: inline-block;
  text-align: center;
  width: 120px;
  font-size: 12px;
  line-height: 1.3;
}

#home-tools .items .triangle-container .triangle {
  width: 120px;
  height: 120px;
  background-image: url('@/assets/triangle.png');
  background-size: cover;
}

#home-tools .items .triangle-container .triangle img {
  width: 40px;
  height: 40px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  filter: invert(77%) sepia(28%) saturate(7203%) hue-rotate(172deg) brightness(100%) contrast(93%);
}

@media (min-width: 768px) {
  #home-main-img {
    height: 600px;
  }

  #intro .name {
    font-weight: 900;
    font-size: 60px;
  }
}

@media (min-width: 1024px) {
  #home-main-img {
    height: 700px;
  }

  #home-main-img .text .title {
    font-size: 60px;
  }

  #home-main-img .text .description {
    font-size: 26px;
  }

  #home-main-img .text .action {
    background-color: var(--vt-c-black-soft);
    width: 300px;
    height: 60px;
    line-height: 60px;
  }

  #home-main-img .text .action a {
    font-size: 20px;
  }

  #home-tools .title {
    padding: 80px 0;
    font-size: 60px;
  }

  #home-tools .items {
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 80px;
  }

  #home-tools .items .triangle-container {
    width: 200px;
    font-size: 16px;
    padding: 0 10px;
  }

  #home-tools .items .triangle-container .triangle {
    width: 180px;
    height: 180px;
  }

  #home-tools .items .triangle-container .triangle img {
    width: 70px;
    height: 70px;
  }
}

@media (min-width: 1200px) {
  #home-main-img {
    height: 1000px;
  }

  #intro .name {
    float: left;
    width: 30%;
  }

  #intro .description {
    padding-top: 0;
    padding-left: 100px;
    float: left;
    width: 70%;
    font-size: 22px;
  }
}
</style>

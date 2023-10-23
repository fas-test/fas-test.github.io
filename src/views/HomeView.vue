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
          Инструменты валидного измерения<br>
          сложных компетенций и навыков<br>
          нового поколения<br>
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
        Service —
      </div>
      <div class="description">
        это компания, предоставляющая иновационные решения на рынке образовательных и психологических измерений.
        Мы разрабатываем инструменты измерения сложных компетенций и композитных навыков, которые позволяют
        учителям, ученикам, администраторам образовательных организаций и родителям принимать решения об
        образовательном маршруте на основе валидной и надежной формирующей информации.
        <br><br>
        Наши линейки инструментов, направленные на измерение образовательного прогресса, позволяют отслеживать, как
        изменяются способности учеников во времени.
        <br><br>
        Наши инструменты измерения разработаны на основе самых современных разработок в области психометрики и
        искусственного интеллекта, а также последних открытий в психологии и науках об образовании.
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
            <span>Дают индивидуальную формирующую обратную связь — конкретные рекомендации учителю, ученику, родителям</span>
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
            <span>Экономят силы и время учителя и позволяют опереться на доказательный подход</span>
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
      url('@/assets/photos/1f8c3764aa31fc9294ff761a7afc97db.jpeg');
  width: 100%;
  height: 600px;
  background-size: cover;
  color: white;
}

#home-main-img .text {
  padding-left: 120px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
      transform: translateY(-50%);
}

#home-main-img .text .title {
  color: var(--fas-blue);
  font-weight: 900;
  font-size: 60px;
  line-height: 1.1;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

#home-main-img .text .description {
  padding: 40px 0;
  color: var(--vt-c-black-soft);
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
}

#home-main-img .text .action {
  padding: 15px 0;
  background-color: var(--vt-c-black-soft);
  width: 300px;
  text-align: center;
  border-radius: 7px;

  -webkit-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
     -moz-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
          box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
  cursor: pointer;
}

#home-main-img .text .action a {
  color: var(--vt-c-white-mute);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
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
  width: 150px;
  font-size: 12px;
  line-height: 1.3;
}

#home-tools .items .triangle-container .triangle {
  width: 150px;
  height: 150px;
  background-image: url('@/assets/triangle.png');
  background-size: cover;
}

#home-tools .items .triangle-container .triangle img {
  width: 50px;
  height: 50px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  filter: invert(77%) sepia(28%) saturate(7203%) hue-rotate(172deg) brightness(100%) contrast(93%);
}

@media (min-width: 768px) {
  #home-main-img {
    height: 700px;
  }

  #intro .name {
    font-weight: 900;
    font-size: 60px;
  }
}

@media (min-width: 1024px) {
  #home-main-img {
    height: 900px;
  }

  #home-tools .title {
    padding: 80px 0;
    font-size: 60px;
  }

  #home-tools .items {
    width: 960px;
    margin: 0 auto;
    padding-bottom: 80px;
  }

  #home-tools .items .triangle-container {
    width: 240px;
    font-size: 16px;
    padding: 0 20px;
  }

  #home-tools .items .triangle-container .triangle {
    width: 200px;
    height: 200px;
  }

  #home-tools .items .triangle-container .triangle img {
    width: 80px;
    height: 80px;
  }
}

@media (min-width: 1200px) {
  #home-main-img {
    height: 1100px;
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

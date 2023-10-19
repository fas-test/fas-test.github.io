<template>
  <div class="home">
    <div id="main-img">
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
          Связаться с нами
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

      </div>
    </div>
  </div>
</template>

<style>
#main-img {
  background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
      url('@/assets/photos/1f8c3764aa31fc9294ff761a7afc97db.jpeg');
  width: 100%;
  height: 600px;
  background-size: cover;
  color: white;
}

#main-img .text {
  padding-left: 120px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

#main-img .text .title {
  color: var(--fas-blue);
  font-weight: 900;
  font-size: 60px;
  line-height: 1.1;
}

#main-img .text .description {
  padding: 40px 0;
  color: var(--vt-c-black-soft);
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
}

#main-img .text .action {
  padding: 15px 0;
  background-color: var(--vt-c-black-soft);
  width: 300px;
  text-align: center;
  border-radius: 7px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
  -webkit-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
     -moz-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
          box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
  cursor: pointer;
}

#intro {
  padding: 40px 120px;
}

#intro .name {
  color: var(--fas-blue);
  font-weight: 700;
  font-size: 40px;
  line-height: 1.1;
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
  background-color: var(--fas-blue);
  color: white;
}

#home-tools .title {
  padding: 80px 0;
  font-weight: 900;
  font-size: 60px;
  line-height: 1.1;
  text-align: center;
}

#home-tools .items {
  padding: 0 120px;
}

#home-tools .items .item {
  width: 25%;
  background-color: white;
  float: left;
}

@media (min-width: 768px) {
  #main-img {
    height: 700px;
  }

  #intro .name {
    font-weight: 900;
    font-size: 60px;
  }
}

@media (min-width: 1024px) {
  #main-img {
    height: 900px;
  }
}

@media (min-width: 1200px) {
  #main-img {
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

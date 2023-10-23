<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'

const scrollToEl = (elId: string) => {
  VueScrollTo.scrollTo(document.getElementById(elId), 500, {easing: 'ease-in'});
};
</script>

<template>
  <div class="about">
    <div id="about-main-img">
      <div class="text">
        <div class="title">
          Future<br>
          Assessment<br>
          Service —
        </div>
        <div class="description">
          соединяет последние разработки в области психометрики<br>
          и искусственного интеллекта с современными научными<br>
          представлениями о психологии и образовании, чтобы помочь<br>
          каждому ученику раскрыть свой образовательный потенциал
        </div>
        <div class="subnavigation">
          <span @click="scrollToEl('our-mission')">Наша миссия</span>
          <span @click="scrollToEl('our-values')">Наши ценности</span>
          <span @click="scrollToEl('our-team')">Наша команда</span>
        </div>
      </div>
    </div>
    <div id="our-mission">
      <div class="name">
        Наша<br>
        миссия
      </div>
      <div class="description">
        <p>
          Мы считаем, что основа обучения — это персонализированная обратная связь, которая объясняет, какие шаги ученику
          и всем людям вокруг него нужно предпринять, чтобы повысить образовательные достижения ученика наиболее быстро.
          Однако для того, чтобы ее предоставить, необходимо иметь самые точные инструменты измерения, использующие
          технологии искусственного интеллекта и психометрики. Более того, такая обратная связь должна быть
          индивидуализированной и оперативной.
        </p>
        <p>
          Миссия <span class="bold">Future Assessment Service</span> — это разрабатывать такие инструменты измерения,
          которые могли бы давать <span class="bold">формирующую обратную связь</span> каждому ученику, учителю, родителю
          и администратору для принятия решений об индивидуальном образовательном маршруте каждого ученика и управления
          образовательными организациями.
        </p>
        <p>
          То, что отличает нас от многих образовательных компаний — это применение технологий психометрики и
          искусственного интеллекта к <span class="bold">современным психологическим и образовательным теориям</span>. С
          самого начала разработки наших инструментов измерения, мы закладываем в них наиболее доказанные и валидные
          теории из социальных наук, чтобы сделать обратную связь наиболее легкой для интерпретации и понятной
          пользователям.
        </p>
      </div>
    </div>
    <div id="about-gap"></div>
    <div id="our-mission-2">
      <div class="description">
        <p>
          Одно из главных преимуществ наших инструментов — это возможность <span class="bold">измерения образовательного
          прогресса</span> и изменений во времени. В физкультуре измерить образовательный прогресс (например, высоту
          прыжка) очень просто, потому что шкала достижений не изменяется со временем. Но измерение прогресса, например, в
          математике требует специальных психометрических приемов и статистического моделирования. Нельзя просто
          сравнивать баллы по двум разным тестам по одному предмету — задания в них имеют разную трудность, поэтому одно и
          то же число баллов не означает один и тот же уровень способности.
        </p>
        <p>
          При разработке наших инструментов, мы руководствуемся <span class="bold">стандартами образовательного и
          психологического тестирования</span>, разработанными ведущими психометрическими организациями в мире:
          Американской Ассоциацией Исследований в Образовании, Национальным Советом по Образовательным Измерениям, и
          Американской Психологической Ассоциацией; Международной Тестовой Комиссией; Европейской Федерацией
          Психологических Ассоциаций; Ассоциацией Образовательного Оценивания в Европе. Согласно этим стандартам, все наши
          тесты проходят процедуры валидизации, включающие изучение надежности, доказательства целесообразности и
          достоверности обратной связи, а также гендерного и национального равенства и справедливости.
        </p>
      </div>
    </div>
    <div id="about-gap"></div>
    <div id="our-mission-3">
      <div class="name">
        Наша<br>
        миссия
      </div>
      <div class="description">
        <p>
          Наши сотрудники являются академическими специалистами с международной квалификацией в психологии, науках об
          образовании, психометрике, науках о данных и статистике.
        </p>
        <p>
          Мы сотрудничаем с учителями, учащимися и профессионалами в образовании по всему миру. Мы открыты к обратной
          связи от всех групп пользователей наших инструментов.
        </p>
        <p>
          <span class="bold">Наша миссия</span> — помочь школам и ученикам добиться успеха, используя наши передовые
          решения для оценки и измерения в психологии и образовании.
        </p>
      </div>
    </div>
    <div id="about-gap"></div>
    <div id="our-values">
      <div class="title">
        Наши ценности
      </div>
      <div class="subtitle">
        Все, что мы делаем, строится на наших фундаментальных ценностях:
      </div>
      <div class="items">
        <div class="triangle-container">
          <div class="triangle">
            <img alt="eye" src="@/assets/icons/lightbulb.svg" />
          </div>
          <div class="triangle-title">ИННОВАЦИИ</div>
          <span>Мы исследуем новые идеи и методы оценки, чтобы лучше заботиться об интересах наших клиентах</span>
        </div>
        <div class="triangle-container">
          <div class="triangle">
            <img alt="document" src="@/assets/icons/award.svg" />
          </div>
          <div class="triangle-title">КАЧЕСТВО</div>
          <span>Мы стремимся делать качественные измерения</span>
        </div>
        <div class="triangle-container">
          <div class="triangle">
            <img alt="pen" src="@/assets/icons/handshake.svg" />
          </div>
          <div class="triangle-title">СОТРУДНИЧЕСТВО</div>
          <span>Мы верим, что совместные усилия и взаимодействие с партнерами — ключевой фактор успеха</span>
        </div>
        <div class="triangle-container">
          <div class="triangle">
            <img alt="timer" src="@/assets/icons/scales.svg" />
          </div>
          <div class="triangle-title">РАВЕНСТВО И СПРАВЕДЛИВОСТЬ</div>
          <span>Мы предпринимаем усилия, чтобы убедиться, что наши инструменты не дискриминируют ни одну из групп учеников</span>
        </div>
      </div>
      <div class="items">
        <div class="triangle-container">
          <div class="triangle">
            <img alt="eye" src="@/assets/icons/hand-holding-heart.svg" />
          </div>
          <div class="triangle-title">ИНКЛЮЗИВНОСТЬ</div>
          <span>Наши инструменты позволяют сделать результаты учеников с ограниченными возможностями здоровья сопоставимыми
          с результатами учеников без них</span>
        </div>
        <div class="triangle-container">
          <div class="triangle">
            <img alt="document" src="@/assets/icons/run.svg" />
          </div>
          <div class="triangle-title">СКОРОСТЬ</div>
          <span>Обратная связь важна только когда она предоставляется непосредственно по результатам измерения</span>
        </div>
        <div class="triangle-container">
          <div class="triangle">
            <img alt="pen" src="@/assets/icons/attention.svg" />
          </div>
          <div class="triangle-title">ОТВЕТСТВЕННОСТЬ</div>
          <span>Мы предпринимаем усилия для того, чтобы по результатам наших измерений не принимались неправомерные
          решения</span>
        </div>
      </div>
    </div>

    <div id="our-team">
      <div class="name">
        Наша<br>
        команда
      </div>
      <div class="description">
        Наша команда гордится своей способностью разрабатывать новые решения в сфере оценивания. За каждым членом
        команды стоит большой опыт в сфере оценивания в образовании: от разработки и экспертизы тестов до
        инновационных технологий обработки, шкалирования и анализа результатов тестирования до предоставления обратной
        связи и работы в интересах клиентов.
      </div>
    </div>
  </div>
  <div id="about-gap"></div>
  <div class="person">
    <div class="avatar">
      <div class="photo denis"></div>
      <div class="name">Денис Федерякин</div>
    </div>
    <div class="bio">
      Денис Федерякин закончил психолого-педагогический факультет Смоленского Государственного Университета в 2015 году,
      психометрическую магистратуру НИУ «Высшая школа экономики» в 2017 году, и с тех пор ведет академическую карьеру в
      области анализа данных психологического и образовательного тестирования. На счету Дениса более 30 выступлений на
      международных конференциях (включая конференции ассоциаций-разработчиков стандартов тестирования), а также более
      20 публикаций (включая публикации в наиболее известных и престижных международных академических журналах). Денис
      специализируется в способах обработки данных тестирования с помощью статистических и психометрических моделей и
      моделей машинного обучения.
    </div>
  </div>
  <div id="about-gap"></div>
  <div class="person">
    <div class="avatar">
      <div class="photo alina"></div>
      <div class="name">Алина Иванова</div>
    </div>
    <div class="bio">
      Алина Иванова закончила магистратуру НИУ «Высшая школа экономики» в 2013 году, в 2019 году аспирантуру и 2021 года защитила
      здесь же кандидатскую диссертацию на тему «Разработка и валидизация русскоязычной версии инструмента международного
      сравнительного исследования навыков учащихся на входе в школу и их прогресса за первый учебный год: проблемы адаптации
      и локализации». Алина ведет научную и преподавательскую деятельность в области анализа данных психологического и
      образовательного тестирования. Исследовательские интересы Алины связаны с анализом широкомасштабных мониторингов,
      кросс-культурных исследований, а также вопросов отслеживания динамики образовательных достижений.
    </div>
  </div>
  <div id="about-gap"></div>
  <div class="person">
    <div class="avatar">
      <div class="photo elena"></div>
      <div class="name">Елена Карданова</div>
    </div>
    <div class="bio">
      <a href="https://scholar.google.com/citations?user=pivOY3sAAAAJ&&hl=ru&&oi=ao">Елена Карданова</a>, кандидат
      физико-математических наук, один из ведущих российских исследователей в области оценивания образовательных
      результатов и психометрики, автор большого числа научных статей, стажировалась в STS (Scholastic Testing Service)
      и в UIC (University of Illinois at Chicago), более 10 лет руководила центром психометрики и измерений в образовании
      НИУ «Высшая школа экономики», являлась преподавателем и научным руководителем магистерской программы SOLA (Science
      of Learning and Assessment), первой в России программы, готовящей специалистов по измерениям в психологии и образовании,
      является руководителем ежегодной международной летней школы «Прикладная психометрика в образовании и психологии».
      Исследования Е.Ю. Кардановой сосредоточены в области психометрического моделирования, оценки сложных конструктов,
      измерения индивидуального прогресса в обучении, межкультурной сопоставимости результатов тестирования.
    </div>
  </div>
  <div id="about-gap"></div>
  <div class="person">
    <div class="avatar">
      <div class="photo svetlana"></div>
      <div class="name">Светлана Авдеева</div>
    </div>
    <div class="bio">
      Светлана Авдеева, кандидат технических наук, более 20 лет занимается вопросами цифровой трансформацией образования,
      руководила крупными российскими проектами в сфере информатизации системы образования, в рамках которых были созданы
      <a href="http://school-collection.edu.ru">Единая коллекция цифровых образовательных ресурсов</a>, свыше 450 межшкольных
      методических центров, сетевые образовательные сообщества <a href="https://www.openclass.ru/">«Открытый класс»</a>,
      обучено свыше 200 000 школьных учителей и администраторов применению цифровых технологий в образовательной деятельности.
      Более 10 лет под ее руководством разрабатывались инструменты измерения навыков XXI века: универсальных компетенций 4К,
      <a href="http://www.ictlit.com/">информационно-коммуникационной компетентности</a>, решения проблем
      <a href="https://dl.hse.ru/demos">цифровой грамотности</a> и др. Интересы С. Авдеевой связаны с разработкой методов
      и инструментов, измеряющих комплексные конструкты в парадигме образовательного оценивания, измерения прогресса в
      обучении на основе разработанных инструментов и факторов, связанных с формированием и развитием исследуемых
      образовательных достижений.
    </div>
  </div>
  <div id="about-gap"></div>
</template>

<style>
.person {
  padding: 0 120px 40px;
}
.person .avatar {
  float: left;
  width: 20%;
}
.person .avatar .photo {
  width: 200px;
  height: 200px;
  background-size: cover;
  border-radius: 50%;
}
.person .avatar .denis {
  background-image: url('@/assets/people/denis.png');
}
.person .avatar .alina {
  background-image: url('@/assets/people/alina.jpg');
}
.person .avatar .elena {
  background-image: url('@/assets/people/elena.jpg');
}
.person .avatar .svetlana {
  background-image: url('@/assets/people/svetlana.jpg');
}
.person .avatar .name {
  padding-top: 10px;
  width: 200px;
  text-align: center;
  color: var(--fas-blue);
  font-weight: 600;
  font-size: 18px;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}
.person .bio {
  float: left;
  width: 80%;
  padding-left: 100px;
  font-size: 22px;
  line-height: 1.3;
}
.person .bio a {
  color: var(--fas-blue);
  margin: 0;
}

.about {
  min-width: 600px;
}

#about-main-img {
  background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)),
      url('@/assets/photos/d573a09e3cd541be7b2177dcc294e340.jpeg');
  width: 100%;
  min-width: 600px;
  height: 500px;
  background-size: cover;
  color: white;
}

#about-main-img .text {
  padding-left: 120px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
      transform: translateY(-50%);
}

#about-main-img .text .title {
  color: var(--fas-blue);
  font-weight: 900;
  font-size: 60px;
  line-height: 1.1;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

#about-main-img .text .description {
  padding: 40px 0;
  color: var(--vt-c-black-soft);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
}

#about-main-img .text .subnavigation {
  font-size: 12px;
}

#about-main-img .text .subnavigation span {
  padding: 0 10px;
  color: var(--vt-c-black-soft);
  border-right: 1px solid var(--vt-c-divider-light-1);
}

#about-main-img .text .subnavigation span:first-of-type {
  padding-left: 0;
}

#about-main-img .text .subnavigation span:last-of-type {
  padding-right: 0;
  border-right: 0;
}

#about-main-img .text .subnavigation span:hover {
  color: var(--fas-blue);
  cursor: pointer;
}

#our-mission {
  padding: 40px 120px;
}

#our-mission .name {
  color: var(--fas-blue);
  font-weight: 700;
  font-size: 40px;
  line-height: 1.1;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

#our-mission .description {
  padding-top: 40px;
  font-size: 18px;
  line-height: 1.3;
}

#about-gap {
  clear: left;
  height: 80px;
  background-color: white;
}

#our-mission-2 {
  min-width: 600px;
  width: 100%;
  background-color: var(--fas-blue);
  color: white;
  padding: 80px 120px;
  font-size: 18px;
  line-height: 1.3;
}

#our-mission-3 {
  padding: 0 120px;
}

#our-mission-3 .name {
  color: white;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.1;
  user-select: none;
}

#our-mission-3 .description {
  font-size: 18px;
  line-height: 1.3;
}

#our-values {
  min-width: 600px;
  width: 100%;
  background-color: var(--fas-blue);
  color: white;
  text-align: center;
}

#our-values .title {
  padding: 40px 0 10px;
  font-weight: 900;
  font-size: 40px;
  line-height: 1.1;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}

#our-values .subtitle {
  font-size: 16px;
  padding-bottom: 40px;
}

#our-values .items {
  display: flex;
  width: 600px;
  min-width: 600px;
  margin: 0 auto;
  padding-bottom: 40px;
}

#our-values .items:last-of-type {
  width: 450px;
  min-width: 450px;
  padding-bottom: 40px;
}

#our-values .items .triangle-container {
  display: inline-block;
  text-align: center;
  width: 150px;
  font-size: 12px;
  line-height: 1.3;
}

#our-values .items .triangle-container .triangle {
  width: 150px;
  height: 150px;
  background-image: url('@/assets/triangle.png');
  background-size: cover;
}

#our-values .items .triangle-container .triangle img {
  width: 50px;
  height: 50px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
      transform: translateY(-50%);
  filter: invert(77%) sepia(28%) saturate(7203%) hue-rotate(172deg) brightness(100%) contrast(93%);
}

#our-values .items .triangle-container .triangle-title {
  height: 50px;
  font-weight: bold;
}

#our-team {
  padding: 80px 120px 0;
}

#our-team .name {
  color: var(--fas-blue);
  font-weight: 700;
  font-size: 40px;
  line-height: 1.1;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

#our-team .description {
  padding-top: 40px;
  font-size: 18px;
  line-height: 1.3;
}

@media (min-width: 768px) {
  #about-main-img {
    height: 600px;
  }

  #about-main-img .text .description {
    font-size: 20px;
  }

  #about-main-img .text .subnavigation {
    font-size: 18px;
  }

  #our-mission .name {
    font-weight: 900;
    font-size: 60px;
  }

  #our-team .name {
    font-weight: 900;
    font-size: 60px;
  }
}

@media (min-width: 1024px) {
  #about-main-img {
    height: 700px;
  }

  #our-values .title {
    padding: 80px 0 10px;
    font-size: 60px;
  }

  #our-values .subtitle {
    font-size: 20px;
    padding-bottom: 80px;
  }

  #our-values .items {
    width: 960px;
    margin: 0 auto;
  }

  #our-values .items:last-of-type {
    width: 720px;
    padding-bottom: 80px;
  }

  #our-values .items .triangle-container {
    width: 240px;
    font-size: 16px;
    padding: 0 20px;
  }

  #our-values .items .triangle-container .triangle {
    width: 200px;
    height: 200px;
  }

  #our-values .items .triangle-container .triangle img {
    width: 80px;
    height: 80px;
  }
}

@media (min-width: 1200px) {
  #about-main-img {
    height: 900px;
  }

  #our-mission .name {
    float: left;
    width: 20%;
  }

  #our-mission .description {
    padding-top: 0;
    padding-left: 100px;
    float: left;
    width: 80%;
    font-size: 22px;
  }

  #our-mission-2 .description {
    font-size: 22px;
  }

  #our-mission-3 .name {
    float: left;
    width: 20%;
  }

  #our-mission-3 .description {
    padding-top: 0;
    padding-left: 100px;
    float: left;
    width: 80%;
    font-size: 22px;
  }

  #our-team .name {
    float: left;
    width: 20%;
  }

  #our-team .description {
    padding-top: 0;
    padding-left: 100px;
    float: left;
    width: 80%;
    font-size: 22px;
  }
}
</style>

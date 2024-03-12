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
          Service
        </div>
        <div class="description">
          Соединяем последние разработки в области психометрики<br>
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
    <div id="our-mission" class="split-container">
      <div class="title">
        Наша<br>
        миссия
      </div>
      <div class="description">
        <p>
          Миссия <span class="bold-text">Future Assessment Service</span> — помочь школам и ученикам добиться успеха, используя
          наши решения для измерений в психологии и образовании. Мы делаем это с помощью <span class="bold-text">формирующей
          обратной связи</span>, которая облегчает принятие решений об образовательном маршруте каждого ученика и помогает
          при управлении образовательными организациями.
        </p>
        <p>
          Персонализированная и оперативная обратная связь — это основа обучения. Она объясняет, какие шаги ученику и всем
          людям вокруг него нужно сделать, чтобы повысить его образовательные результаты. Чтобы ее предоставить, мы используем
          технологии искусственного интеллекта и психометрики, примененяя их к <span class="bold-text">современным психологическим и
          образовательным научным теориям</span>.
        </p>
        <p>
          Наши сотрудники — это академические специалисты с международной квалификацией в психологии, науках об образовании,
          психометрике, науках о данных и статистике. Мы сотрудничаем с учителями, учащимися и профессионалами в образовании
          по всему миру. Мы открыты к обратной связи от всех пользователей.
        </p>
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container soft-white-container">
      <div class="title">Формирующая обратная связь</div>
      <p>
        Мы оперативно предоставляем подробную индивидуальную обратную связь по каждому ученику — ему самому и родителям.
        Далее, мы собираем эту обратную связь также в простом виде на уровне класса — для учителя. Затем, мы формируем
        отчет для администратора образовательной организации, облегчая принятие управленческих решений.
      </p>
      <div class="title">Измерение образовательного прогресса</div>
      <p>
        Для наших линеек инструментов мы выстраиваем единую шкалу, позволяя отслеживать прогресс каждого ученика сквозь
        время. Только единицы инструментов измерения в мире позволяют отслеживать рост компетенций учеников, потому что
        это требует специальных психометрических техник и математического моделирования.
      </p>
      <div class="title">Стандарты качества наших продуктов</div>
      <p>
        Мы руководствуемся стандартами образовательного и психологического тестирования от ведущих психометрических
        организаций в мире: <a class="inline-link" target="_blank" href="https://www.apa.org/science/programs/testing/standards">
        Американской Ассоциации Исследований в Образовании, Национального Совета по Образовательным Измерениям, и Американской
        Психологической Ассоциации</a>; <a class="inline-link" target="_blank" href="https://www.intestcom.org/page/28">
        Международной Тестовой Комиссии</a>; <a class="inline-link" target="_blank" href="https://www.efpa.eu/sites/default/files/2023-06/110c_EFPA_BOA_TEST_REVIEW_MODEL_version426.pdf">
        Европейской Федерации Психологических Ассоциаций</a>; <a class="inline-link" target="_blank" href="https://aea-europe.net/standards-for-assessment/">
        Ассоциации Образовательного Оценивания в Европе</a>. Наши инструменты проходят валидизацию, включая изучение
        надежности, качества обратной связи, и гендерной и национальной справедливости.
      </p>
    </div>

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
          <span>Мы исследуем новые методы оценки, чтобы лучше заботиться об интересах наших клиентов</span>
        </div>
        <div class="triangle-container">
          <div class="triangle">
            <img alt="document" src="@/assets/icons/award.svg" />
          </div>
          <div class="triangle-title">КАЧЕСТВО</div>
          <span>Мы используем лучшие стандарты качества измерительных инструментов в мире</span>
        </div>
        <div class="triangle-container">
          <div class="triangle">
            <img alt="pen" src="@/assets/icons/handshake.svg" />
          </div>
          <div class="triangle-title">СОТРУДНИЧЕСТВО</div>
          <span>Совместные усилия и взаимодействие с партнерами — главный фактор нашего успеха</span>
        </div>
      </div>
      <div class="items">
        <div class="triangle-container">
          <div class="triangle">
            <img alt="timer" src="@/assets/icons/scales.svg" />
          </div>
          <div class="triangle-title">РАВЕНСТВО И СПРАВЕДЛИВОСТЬ</div>
          <span>Наши инструменты справедливы и не дискриминируют ни одну из групп учеников</span>
        </div>
        <div class="triangle-container">
          <div class="triangle">
            <img alt="document" src="@/assets/icons/run.svg" />
          </div>
          <div class="triangle-title">СКОРОСТЬ</div>
          <span>Обратная связь полезна только если она предоставляется сразу после тестирования</span>
        </div>
        <div class="triangle-container">
          <div class="triangle">
            <img alt="pen" src="@/assets/icons/attention.svg" />
          </div>
          <div class="triangle-title">ОТВЕТСТВЕННОСТЬ</div>
          <span>Наша обратная связь создана так, чтобы по ней было сложно принять необоснованные решения</span>
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
  <div class="white-gap"></div>
  <div class="person">
    <div class="avatar">
      <div class="photo elena"></div>
      <div class="name">Елена Карданова, Ph.D.</div>
      <div class="position">Chief Executive Officer</div>
    </div>
    <div class="bio">
      <a target="_blank" href="https://scholar.google.com/citations?user=pivOY3sAAAAJ&&hl=ru&&oi=ao">Елена Карданова</a>,
      кандидат физико-математических наук, один из ведущих российских исследователей в области оценивания образовательных результатов
      и психометрики, автор многочисленных научных статей, стажировалась в STS (Scholastic Testing Service) и в UIC
      (University of Illinois at Chicago), более 10 лет руководила центром психометрики и измерений в образовании НИУ
      «Высшая школа экономики», являлась преподавателем и научным руководителем магистерской программы SOLA (Science of
      Learning and Assessment), первой в России программы, готовящей специалистов по измерениям в психологии и образовании,
      является руководителем ежегодной международной летней школы «Прикладная психометрика в образовании и психологии».
      Исследования Елены сосредоточены в области психометрического моделирования, оценки сложных конструктов, измерения
      индивидуального прогресса в обучении, межкультурной сопоставимости результатов тестирования.
    </div>
  </div>
  <div class="white-gap"></div>
  <div class="person">
    <div class="avatar">
      <div class="photo alina"></div>
      <div class="name">Алина Иванова, Ph.D.</div>
      <div class="position">Chief Research Officer</div>
    </div>
    <div class="bio">
      <a target="_blank" href="https://scholar.google.ru/citations?user=rjjynbsAAAAJ&hl=ru">Алина Иванова</a> закончила магистратуру
      НИУ «Высшая школа экономики» в 2013 году, а в 2021 году защитила здесь же кандидатскую диссертацию на тему  «Разработка и
      валидизация русскоязычной версии инструмента международного сравнительного исследования навыков учащихся на входе
      в школу и их прогресса за первый учебный год: проблемы адаптации и локализации». Алина ведет научную и
      преподавательскую деятельность в области анализа данных психологического и образовательного тестирования.
      Исследовательские интересы Алины связаны с анализом широкомасштабных мониторингов, кросс-культурных исследований,
      а также вопросов отслеживания динамики образовательных достижений.
    </div>
  </div>
  <div class="white-gap"></div>
  <div class="person">
    <div class="avatar">
      <div class="photo svetlana"></div>
      <div class="name">Светлана Авдеева, Ph.D.</div>
      <div class="position">Chief Development Officer</div>
    </div>
    <div class="bio">
      <a target="_blank" href="https://scholar.google.ru/citations?hl=ru&user=nSZ-txgAAAAJ">Светлана Авдеева</a>, кандидат технических наук,
      более 20 лет занимается вопросами цифровой трансформации образования, руководила крупными российскими проектами в
      сфере информатизации системы образования, в рамках которых были созданы <a href="http://school-collection.edu.ru">
      Единая коллекция цифровых образовательных ресурсов</a>, свыше 450 межшкольных методических центров, сетевые
      образовательные сообщества <a href="https://www.openclass.ru/">«Открытый класс»</a>, обучено свыше 200 000 школьных
      учителей и администраторов применению цифровых технологий в образовательной деятельности. Под ее руководством
      разработаны инструменты измерения навыков XXI века: универсальных компетенций 4К, <a href="http://www.ictlit.com/">
      информационно-коммуникационной компетентности</a>, решения проблем, <a href="https://dl.hse.ru/demos">цифровой
      грамотности</a> и др. Научные интересы Светланы связаны с разработкой методов и инструментов, измеряющих комплексные
      конструкты.
    </div>
  </div>
  <div class="white-gap"></div>
  <div class="person">
    <div class="avatar">
      <div class="photo denis"></div>
      <div class="name">Денис Федерякин, M.Sc.</div>
      <div class="position">Chief Technology Officer</div>
    </div>
    <div class="bio">
      <a target="_blank" href="https://scholar.google.ru/citations?hl=ru&user=9-iqAiwAAAAJ">Денис Федерякин</a> закончил психолого-педагогический
      факультет Смоленского Государственного Университета в 2015 году, психометрическую магистратуру НИУ «Высшая школа
      экономики» в 2017 году, и с тех пор ведет академическую карьеру в области анализа данных психологического и образовательного
      тестирования. На счету Дениса более 30 выступлений на международных конференциях (включая конференции ассоциаций-разработчиков
      стандартов тестирования), а также более 20 публикаций (включая публикации в наиболее известных и престижных международных
      академических журналах). Денис специализируется на способах обработки данных тестирования с помощью статистических
      и психометрических моделей и моделей машинного обучения.
    </div>
  </div>
  <div class="white-gap"></div>
  <div class="person">
    <div class="avatar">
      <div class="photo irina"></div>
      <div class="name">Ирина Брун, M.Sc.</div>
      <div class="position">Coordinator, test developer</div>
    </div>
    <div class="bio">
      Ирина Брун, магистр психометрики, бакалавр социологии. Больше 10 лет в психометрике, из них 4 года в оценке персонала.
      7 лет преподавала курс по разработке тестов в магистратуре. Вывела на рынок 10+ тестов на измерение различных конструктов,
      включая Soft Skills и 21st Century Skills. Основная специализация - проектирование дизайна теста под запрос заказчика
      и разработка тестовых материалов.
    </div>
  </div>
  <div class="white-gap"></div>
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
  width: 215px;
  height: 215px;
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
.person .avatar .irina {
  background-image: url('@/assets/people/irina.jpg');
}
.person .avatar .name {
  padding-top: 10px;
  width: 215px;
  text-align: center;
  color: var(--fas-blue);
  font-weight: 600;
  font-size: 18px;
}
.person .avatar .position {
  width: 215px;
  text-align: center;
  color: var(--vt-c-black-mute);
  font-weight: 400;
  font-size: 18px;
}
.person .bio {
  float: left;
  width: 80%;
  padding-left: 100px;
  font-size: 22px;
  line-height: 1.3;
}

.person .bio a {
  border: 0;
  border-bottom: 1px dotted var(--vt-c-black-soft);
  color: var(--vt-c-black-soft);
}

.person .bio a:hover {
  color: var(--fas-blue);
  border-bottom: 1px dotted var(--fas-blue);
}

.about {
  min-width: 600px;
}

#about-main-img {
  background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)),
      url('@/assets/photos/about_main.jpeg');
  width: 100%;
  min-width: 600px;
  height: 500px;
  background-size: cover;
}

#about-main-img .text {
  padding-left: 120px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
      transform: translateY(-50%);
}

#about-main-img .text .title {
  font-weight: 900;
  font-size: 40px;
  line-height: 1.1;
  color: var(--fas-blue);
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

#about-main-img .text .description {
  padding: 40px 0;
  min-width: 600px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  color: var(--vt-c-black-soft);
}

#about-main-img .text .subnavigation {
  font-size: 18px;
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
  width: 450px;
  min-width: 450px;
  margin: 0 auto;
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

  #our-team .name {
    font-weight: 900;
    font-size: 60px;
  }
}

@media (min-width: 1024px) {
  #about-main-img {
    height: 700px;
  }

  #about-main-img .text .title {
    font-size: 60px;
  }

  #about-main-img .text .description {
    font-size: 26px;
  }

  #about-main-img .text .subnavigation {
    font-size: 22px;
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
    width: 720px;
    margin: 0 auto;
  }

  #our-values .items:last-of-type {
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
    height: 1000px;
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

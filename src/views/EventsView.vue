<script setup lang="ts">

import { reactive } from "vue";

const faqs = reactive({
  faq1: false,
  faq2: false,
  faq3: false,
  faq4: false,
  faq5: false,
  faq6: false,
  faq7: false,
  faq8: false
});
</script>

<template>
  <div class="page-container">
    <div id="events-img" class="page-main-img">
      <div class="text">
        <div class="title">
          Олимпиада по<br>
          цифровой грамотности<br>
          школьников 13-15 лет
        </div>
        <div class="description">
          23-25 апреля 2024 г.
        </div>
        <div class="action">
          <a target="_blank" href="https://forms.gle/WNXSNypUb954xo3NA">Зарегистрироваться</a>
        </div>
      </div>
    </div>
    <div class="basic-container blue-container">
      <div class="title-no-padding">
        Проверь готовность к жизни в XXI веке!
      </div>
    </div>
    <div class="split-container">
      <div class="title">
        Об<br>
        Олимпиаде
      </div>
      <div class="description">
        •	Компьютерное оценивание<br>
        •	4 игровых тестовых задания на цифровую грамотность<br>
        •	5 коротких заданий на оценку устройчивости и концентрации внимания<br>
        •	Реалистичные и интересные задания: симуляторы интернета, мессенджеров, текстовых редакторов и др.<br>
        •	Время тестирования — 70-90 минут<br><br>
        Пример задания:<br><br>
        <img id="task-example" alt="task-example" src="@/assets/photos/task_example.png">
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="title">
        Почему олимпиада по цифровой грамотности?
      </div>
      <div class="description">
        <p>
          Цифровая грамотность — ключ к образованию и развитию в современном мире. Благодаря цифровой грамотности мы можем
          учиться на протяжении всей жизни, не ограничиваясь лишь школьной или университетской программой. В современном
          обществе цифровая грамотность становится неотъемлемой частью нашей жизни и позволяет нам адаптироваться к новым
          условиям и успешно справляться с вызовами цифрового мира.
        </p>
        <p>
          Узнать подробную информацию про тест Цифровой Грамотности вы можете <RouterLink class="inline-link-contrast" to="/tools/digital-skills">здесь</RouterLink>.
        </p>
      </div>
    </div>
    <div class="split-container">
      <div class="title">
        Результаты<br>
        Олимпиады
      </div>
      <div class="description">
        •	Индивидуальный отчет ученика по уровню цифровой грамотности<br>
        •	Групповой отчет по школе (<a class="inline-link" target="_blank" href="https://drive.google.com/file/d/1q7V_MYf8lMmM69CR1MUZa6qgCnhUkBgT/view">скачать пример отчета</a>)<br>
        •	Информация для родителей о цифровых навыках своих детей<br>
        •	Основа для построения стратегии школы по развитию цифровых навыков учеников<br>
        •	Опыт учеников решения тестовых заданий сценарного типа, похожих на задания международных исследований (PISA, TIMSS и др.)<br>
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="title">
        Часто задаваемые вопросы
      </div>
      <div class="description">

        •	<span @click="faqs.faq1 = !faqs.faq1" class="shifted-div-title">Сколько стоит участие в Олимпиаде?</span>
        <span v-if="faqs.faq1"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="faqs.faq1" class="shifted-div-details">В 2024 году участие для всех беслатное</div>

        •	<span @click="faqs.faq2 = !faqs.faq2" class="shifted-div-title">Кто может принять участие в Олимпиаде?</span>
        <span v-if="faqs.faq2"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="faqs.faq2" class="shifted-div-details">Русскоязычные ученики 7-8 класса, которые учатся в школах за пределами РФ</div>

        •	<span @click="faqs.faq3 = !faqs.faq3" class="shifted-div-title">Когда проходит Олимпиада?</span>
        <span v-if="faqs.faq3"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="faqs.faq3" class="shifted-div-details">23-25 апреля 2024 года</div>

        •	<span @click="faqs.faq4 = !faqs.faq4" class="shifted-div-title">Как проходит Олимпиада?</span>
        <span v-if="faqs.faq4"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="faqs.faq4" class="shifted-div-details">Олимпиада проходит онлайн, для прохождения необходим компьютер
        со стабильным доступом в интернет</div>

        •	<span @click="faqs.faq5 = !faqs.faq5" class="shifted-div-title">Как принять участие в Олимпиаде?</span>
        <span v-if="faqs.faq5"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="faqs.faq5" class="shifted-div-details">Зарегистрируйтесь на участие и ждите информации от администаторов</div>

        •	<span @click="faqs.faq6 = !faqs.faq6" class="shifted-div-title">Что необходимо для прохождения Олимпиады?</span>
        <span v-if="faqs.faq6"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="faqs.faq6" class="shifted-div-details">Для прохождения Олимпиады необходим компьютер с доступом в интернет и мышью</div>

        •	<span @click="faqs.faq7 = !faqs.faq7" class="shifted-div-title">Какие знания должен иметь ученик для прохождения Олимпиады?</span>
        <span v-if="faqs.faq7"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="faqs.faq7" class="shifted-div-details">Никакие специальные предментные знания для прохождения Олимпиады не нужны.
        Задания составлены на основании жизненных ситуаций, а не предметных знаний учеников</div>

        •	<span @click="faqs.faq8 = !faqs.faq8" class="shifted-div-title">Какие документы получит школа и ученики?</span>
        <span v-if="faqs.faq8"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="faqs.faq8" class="shifted-div-details">Ученики получат индивидуальные отчеты об уровне цифровой грамотности.
        Школы получат групповые отчеты с указанием уровня цифровой грамотности учеников, в том числе в сравнении с другими школами</div>
      </div>
    </div>
  </div>
</template>

<style>
  #events-img {
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)),
        url('@/assets/photos/events_main.jpeg');
  }

  #task-example {
    width: 100%;
    max-width: 1000px;
  }
</style>

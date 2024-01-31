<script setup lang="ts">
  import StartViewGraph from "@/views/tools/StartViewGraph.vue";
  import {RouterLink} from "vue-router";
</script>

<template>
  <div class="page-container">
    <div id="start-img" class="page-main-img">
      <div class="text">
        <div class="title">
          Инструмент
        </div>
        <div class="subtitle">
          СТАРТ
        </div>
      </div>
    </div>
    <div class="basic-container white-container">
      Первоклассники приходят в школу с разными знаниями и уровнем развития. СТАРТ оценивает <span class="bold-text">базовые
      навыки чтения и математики</span>, когда ребенок только начинает знакомиться с ними, и когда он или она уже многое умеет.
      Помимо этого, СТАРТ позволяет оценить <span class="bold-text">пассивный словарный запас</span> ребенка, а также
      <span class="bold-text">фонологическую грамотность</span> и некоторые <span class="bold-text">социально-эмоциональные навыки</span>.
    </div>
    <StartViewGraph/>
    <div class="basic-container blue-container">
      Учитель увидит зоны отставания и перспективы развития каждого ребенка, всего класса или параллели.<br>
      С помощью СТАРТ возможно отслеживать динамику результатов и персонализировать обучение.<br>
      Связь результатов нашего теста и успехов детей через несколько лет устойчива и значима — измерена в России для
      нескольких тысяч младших школьников из разных городов.
    </div>
    <div class="split-container">
      <div class="title">
        Процедура<br>
        оценивания
      </div>
      <div class="description">
        Инструмент спроектирован как игра, чтобы избежать психологического напряжения. В каждом блоке задания идут от
        простых к более сложным. Если ребенок ошибается, алгоритм переходит к оценке другого вида заданий. В середине теста —
        несколько минут игровых физических упражнений. Это помогает отвлечься и снять усталость.<br><br>
        Алгоритм внутри инструмента меняет задания, регулирует их сложность и озвучивает вопросы через голосового помощника
        Анфису. Роль взрослого — вводить ответы ребенка на компьютере и похвалить ребенка в конце. Если учеба дистанционная,
        вместо учителя тест могут провести родители. Если ребенок не хочет делать задания, устал или заплакал — на каждый
        случай предусмотрены сценарии, как действовать взрослому.
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="title">
        Обратная связь
      </div>
      По результатам оценки дается подробная обратная связь: для родителей и ребенка, для учителя (индивидуально для каждого
      ребенка и для всего класса).
      <div class="img-container">
        <img alt="report-example" src="@/assets/tools/report_example.png">
        <div>Пример отчета из личного кабинета</div>
      </div>
      СТАРТ-тестирование проводят в начале и завершении первого класса. Отследить динамику на большем отрезке времени помогают
      его модификации: инструменты <span id="start-link"><RouterLink to="/tools/progress">ПРОГРЕСС</RouterLink></span> для середины и конца начальной школы.
    </div>
    <div class="white-gap"></div>
    <div class="video-container">
      <div class="video">
        <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/hrYvjiXtI88?si=jcDSmbm0nCj8aL07"
                title="СТАРТ: проведение"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<style>
  #start-img {
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)),
        url('@/assets/photos/start_main.png');
  }

  #start-link a {
    border: 0;
    border-bottom: 1px dotted var(--vt-c-white);
    color: var(--vt-c-white);
  }

  #start-link a:hover {
    color: var(--vt-c-black-soft);
    border-bottom: 1px dotted var(--vt-c-black-soft);
  }
</style>

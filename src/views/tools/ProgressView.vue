<script setup lang="ts">
  import {RouterLink} from "vue-router";
</script>

<template>
  <div class="page-container">
    <div id="progress-img" class="page-main-img">
      <div class="text">
        <div class="title">
          Инструмент
        </div>
        <div class="subtitle">
          ПРОГРЕСС
        </div>
        <div class="description">
          Продвижение вперёд: увидеть динамику каждого ребёнка
        </div>
      </div>
    </div>
    <div class="basic-container white-container">
      Тестирование с помощью инструмента <span id="progress-link"><RouterLink to="/tools/start">СТАРТ</RouterLink></span> проводят
      в начале и в конце первого года обучения ребенка в школе. Отследить динамику каждого ребенка на большем отрезке времени помогают
      его модификации: инструменты ПРОГРЕСС для середины и конца начальной школы.<br><br>
      Первые годы обучения в школе очень важны для ребёнка. Ученые доказали, что результаты детей в начале обучения предсказывают их
      успешность вплоть до конца обучения в школе. Поэтому для учителей и родителей крайне важно иметь надежные средства диагностики
      и измерения прогресса учеников в начальной школе.<br><br>
      Инструмент ПРОГРЕСС позволяет измерить продвижение ребенка от базовых навыков в чтении к его или ее <span class="bold-text">читательской
      грамотности</span>, а также от базовых навыков математики — к <span class="bold-text">математической грамотности</span>.
    </div>
    <div class="basic-container blue-container">
      <div class="title">
        Процедура оценивания
      </div>
      Тестирование разделено на блоки, задания идут от простых к сложным. Если ребёнок несколько раз ошибается при оценке одного навыка,
      то адаптивный алгоритм внутри инструмента меняет задания, регулируя прохождение ребенком теста.<br><br>
      Каждый ребёнок сидит отдельно за своим компьютером. В классе присутствует учитель, который следит за безопасностью и порядком в классе,
      а также помогает ученикам справиться с техническими трудностями, в случае их возникновения.<br><br>
      Оценивание по двум областям проводится в разные дни. Длительность одного тестирования около 40 минут.
    </div>
    <div class="split-container">
      <div class="title">
        Обратная<br>
        связь
      </div>
      <div class="description">
        По результатам оценки дается подробная обратная связь: для родителей и ребенка, для учителя (индивидуально для каждого ребенка
        и для всего класса).
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="video-container">
      <div class="video">
        <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/ZLlhZ2rp9AU?si=al2tLuV2hlJ3wv3y"
                title="ПРОГРЕСС: проведение"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<style>
  #progress-img {
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)),
        url('@/assets/photos/progress_main.png');
  }

  #progress-link a {
    border: 0;
    border-bottom: 1px dotted var(--vt-c-black-soft);
    color: var(--vt-c-black-soft);
  }

  #progress-link a:hover {
    color: var(--fas-blue);
    border-bottom: 1px dotted var(--fas-blue);
  }
</style>

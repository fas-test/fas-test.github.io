<template>
  <div class="tools">
    <div id="tools-main-img">
      <div class="text">
        <div class="title">
          Наши решения<br>
          для измерения<br>
          образовательных<br>
          достижений
        </div>
        <div class="description">
          Путь к оценке успеха:<br>
          инновационные подходы к измерению<br>
          образовательных достижений
        </div>
      </div>
    </div>
    <div class="tools-gap"></div>
    <div id="tools-details">
      <div class="tools-container">
        <div class="tool">
          <div class="tool-grade">1 класс</div>
          <img alt="tool-1" src="@/assets/tools/tool_1.png">
          <div class="tool-texts">
            <div class="tool-title">«Старт»</div>
            <div class="tool-description">
              С первых шагов в школе — тестирование базовых навыков
            </div>
          </div>
          <div class="action">
            <RouterLink to="/tools/start">Подробнее</RouterLink>
          </div>
        </div>
        <div class="tool">
          <div class="tool-grade">4—8 классы</div>
          <img alt="tool-2" src="@/assets/tools/tool_2.png">
          <div class="tool-texts">
            <div class="tool-title">Мягкие навыки</div>
            <div class="tool-description">
              Критическое мышление, креативность, коммуникация, кооперация
            </div>
          </div>
          <div class="action">
            <RouterLink to="/tools/soft-skills">Подробнее</RouterLink>
          </div>
        </div>
        <div class="tool">
          <div class="tool-grade">6—10 классы</div>
          <img alt="tool-3" src="@/assets/tools/tool_3.png">
          <div class="tool-texts">
            <div class="tool-title">Цифровые компетенции</div>
            <div class="tool-description">
              Измерение навыков в цифровой области для успешной адаптации в современном мире технологий
            </div>
          </div>
          <div class="action">
            <RouterLink to="/tools/digital-skills">Подробнее</RouterLink>
          </div>
        </div>
      </div>
      <div class="tools-container">
        <div class="tool">
          <div class="tool-grade">4 класс</div>
          <img alt="tool-4" src="@/assets/tools/tool_4.png">
          <div class="tool-texts">
            <div class="tool-title">«Прогресс»</div>
            <div class="tool-description">
              Измеряем продвижение в обучении — тестирование базовых грамотностей
            </div>
          </div>
          <div class="action">
            <RouterLink to="/tools/progress">Подробнее</RouterLink>
          </div>
        </div>
        <div class="tool">
          <div class="tool-grade">7—10 классы</div>
          <img alt="tool-5" src="@/assets/tools/tool_5.png">
          <div class="tool-texts">
            <div class="tool-title">Информационно-коммуникационная компетентность</div>
            <div class="tool-description">
              Способность работать с информацией в цифровой среде
            </div>
          </div>
          <div class="action">
            <RouterLink to="/tools/communication-skills">Подробнее</RouterLink>
          </div>
        </div>
        <div class="tool-transparent">
          ✓ Все тесты проводятся на компьютерах школы<br><br>
          ✓ Легко настраиваются, понятны учителю-пользователю<br><br>
          ✓ Для ученика это игра — интересные сценарии вместо скучных вопросов<br><br>
          ✓ Обратная связь сразу после теста: разные типы отчётов адаптированы под учителя, ученика и органы управления образованием<br><br>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .tools {
    min-width: 600px;
  }

  #tools-main-img {
    background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)),
      url('@/assets/photos/tools_main.jpg');
    width: 100%;
    min-width: 600px;
    height: 500px;
    background-size: cover;
  }

  #tools-main-img .text {
    padding-left: 120px;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
        transform: translateY(-50%);

  }

  #tools-main-img .text .title {
    font-weight: 900;
    font-size: 40px;
    line-height: 1.1;
    color: var(--fas-blue);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }

  #tools-main-img .text .description {
    padding: 40px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.3;
    color: var(--vt-c-black-soft);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }

  .tools-gap {
    clear: left;
    height: 60px;
    background-color: white;
  }

  #tools-details {
    width: 100%;
    background-color: var(--fas-blue);
  }

  .tools .tools-container {
    display: flex;
    width: 600px;
    min-width: 600px;
    margin: 0 auto;
    padding: 5px 0;
  }

  .tools .tools-container:first-of-type {
    padding-top: 80px;
  }

  .tools .tools-container:last-of-type {
    padding-bottom: 80px;
  }

  .tools .tools-container .tool {
    position: relative;
    display: inline-block;
    width: 200px;
    margin: 0 5px;
    font-size: 12px;
    line-height: 1.3;
    background-color: var(--vt-c-white-soft);
    border-radius: 10px;
    overflow: hidden;
    -webkit-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
       -moz-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
            box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
  }

  .tools .tools-container .tool-transparent {
    display: inline-block;
    width: 200px;
    margin: 0 5px;
    padding: 25px 0 0 15px;
    font-size: 12px;
    line-height: 1.3;
    background-color: var(--fas-blue);
    color: var(--vt-c-white-soft);
    border-radius: 10px;
    overflow: hidden;
  }

  .tools .tools-container .tool img {
    width: 190px;
  }

  .tools .tools-container .tool .tool-grade {
    position: absolute;
    top: 80px;
    left: 10px;
    height: 20px;
    line-height: 20px;
    width: 70px;
    background-color: var(--vt-c-white-soft);
    text-align: center;
    font-size: 10px;
    border-radius: 5px;
    font-weight: 600;
  }

  .tools .tools-container .tool .tool-texts {
    height: 140px;
  }

  .tools .tools-container .tool .tool-texts .tool-title {
    padding: 10px 15px;
    font-weight: 600;
    color: var(--fas-blue);
  }

  .tools .tools-container .tool .tool-texts .tool-description {
    padding: 0 15px 15px 15px;
  }

  .tools .tools-container .tool .action {
    margin: 0 0 15px 15px;
    background-color: var(--vt-c-black-soft);
    width: 160px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
  }

  .tools .tools-container .tool .action a {
    display: block;
    color: var(--vt-c-white-mute);
    text-transform: uppercase;
    font-weight: 600;
    border-width: 0;
  }

  @media (min-width: 768px) {
    #tools-main-img {
      height: 600px;
    }
  }

  @media (min-width: 1024px) {
    #tools-main-img {
      height: 700px;
    }

    #tools-main-img .text .title {
      font-size: 60px;
    }

    #tools-main-img .text .description {
      font-size: 26px;
    }

    .tools .tools-container {
      width: 900px;
      padding: 10px 0;
    }

    .tools .tools-container .tool {
      width: 300px;
      margin: 0 10px;
      font-size: 16px;
    }

    .tools .tools-container .tool-transparent {
      width: 300px;
      margin: 0 10px;
      padding: 25px 0 0 20px;
      font-size: 16px;
    }

    .tools .tools-container .tool img {
      width: 280px;
    }

    .tools .tools-container .tool .tool-grade {
      top: 125px;
      left: 15px;
      height: 25px;
      line-height: 25px;
      width: 90px;
      font-size: 12px;
    }

    .tools .tools-container .tool .tool-texts {
      height: 160px;
    }

    .tools .tools-container .tool .action {
      width: 250px;
      height: 30px;
      line-height: 30px;
    }
  }

  @media (min-width: 1200px) {
    #tools-main-img {
      height: 1000px;
    }

    .tools .tools-container {
      width: 1050px;
      padding: 10px 0;
    }

    .tools .tools-container .tool {
      width: 350px;
      margin: 0 10px;
      font-size: 18px;
    }

    .tools .tools-container .tool-transparent {
      width: 350px;
      margin: 0 10px;
      padding: 40px 10px 0 30px;
      font-size: 18px;
    }

    .tools .tools-container .tool .tool-grade {
      top: 145px;
      height: 30px;
      line-height: 30px;
      width: 100px;
      font-size: 14px;
    }

    .tools .tools-container .tool img {
      width: 330px;
    }

    .tools .tools-container .tool .tool-texts {
      height: 190px;
    }

    .tools .tools-container .tool .action {
      width: 300px;
      height: 35px;
      line-height: 35px;
    }
  }
</style>
<script setup lang="ts">
</script>

<script setup lang="ts">
  import ToolsItemView from "@/views/ToolsItemView.vue";
</script>

<template>
  <div class="page-container">
    <div id="tools-img" class="page-main-img">
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
        <div class="action">
          <RouterLink to="/contacts">Связаться с нами</RouterLink>
        </div>
      </div>
    </div>
    <div class="white-gap"></div>
    <div id="tools-details">
      <div class="tools-container">
        <ToolsItemView
            grade="1 класс" title="«Старт»" label="start"
            description="С первых шагов в школе — тестирование базовых навыков"
        />
        <ToolsItemView
            grade="4—8 классы" title="Мягкие навыки" label="soft-skills"
            description="Критическое мышление, креативность, коммуникация, кооперация"
        />
        <ToolsItemView
            grade="6—10 классы" title="Цифровые компетенции" label="digital-skills"
            description="Измерение навыков в цифровой области для успешной адаптации в современном мире технологий"
        />
      </div>
      <div class="tools-container">
        <ToolsItemView
            grade="4 класс" title="«Прогресс»" label="progress"
            description="Измеряем продвижение в обучении — тестирование базовых грамотностей"
        />
        <ToolsItemView
            grade="7—10 классы" title="Информационно-коммуникационная компетентность" label="communication-skills"
            description="Способность работать с информацией в цифровой среде"
        />
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
  #tools-img {
    background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)),
      url('@/assets/photos/tools_main.jpg');
  }

  #tools-details {
    width: 100%;
    background-color: var(--fas-blue);
  }

  #tools-details .tools-container {
    display: flex;
    width: 600px;
    min-width: 600px;
    margin: 0 auto;
    padding: 5px 0;
  }

  #tools-details .tools-container:first-of-type {
    padding-top: 80px;
  }

  #tools-details .tools-container:last-of-type {
    padding-bottom: 80px;
  }

  #tools-details .tools-container .tool-transparent {
    display: inline-block;
    width: 200px;
    margin: 0 5px;
    padding: 40px 0 0 15px;
    font-size: 12px;
    line-height: 1.3;
    background-color: var(--fas-blue);
    color: var(--vt-c-white-soft);
    border-radius: 10px;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    #tools-details .tools-container {
      width: 900px;
      padding: 10px 0;
    }

    #tools-details .tools-container .tool-transparent {
      width: 300px;
      margin: 0 10px;
      padding: 50px 0 0 20px;
      font-size: 16px;
    }
  }

  @media (min-width: 1200px) {
    #tools-details .tools-container {
      width: 1050px;
      padding: 10px 0;
    }

    #tools-details .tools-container .tool-transparent {
      width: 350px;
      margin: 0 10px;
      padding: 60px 10px 0 30px;
      font-size: 18px;
    }
  }
</style>

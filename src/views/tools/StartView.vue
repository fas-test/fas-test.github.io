<template>
  <div class="start">
    <div id="start-img-1">
      <div class="text">
        <div class="title">
          Инструмент
        </div>
        <div class="subtitle">
          СТАРТ
        </div>
      </div>
    </div>
    <div id="start-details">
      Первоклассники приходят в школу с разными знаниями и уровнем развития. <span class="bold">СТАРТ</span> оценивает
      базовые навыки чтения и математики, когда ребенок только начинает знакомиться с ними, и когда он или она уже многое
      умеет. Помимо этого, <span class="bold">СТАРТ</span> позволяет оценить пассивный словарный запас ребенка, а также
      фонологическую грамотность и некоторые социально-эмоциональные навыки.
    </div>
    <div id="start-graph">
      <div class="label">
        Математика
      </div>
      <div class="item">
        <div class="dot dot1"></div>
      </div>
      <div class="label">
        Словарный запас
      </div>
      <div class="item">
        <div class="dot dot2"></div>
      </div>
      <div class="label">
        Фонематика
      </div>
      <div class="item">
        <div class="dot dot3"></div>
      </div>
      <div class="label">
        Чтение
      </div>
      <div class="item">
        <div class="dot dot4"></div>
      </div>
      <div class="gap"></div>
      <div class="label">
        Следование правилам
      </div>
      <div class="item">
        <div class="dot dot5"></div>
      </div>
      <div class="label">
        Общение с учителем
      </div>
      <div class="item">
        <div class="dot dot6"></div>
      </div>
      <div class="label">
        Контроль эмоций
      </div>
      <div class="item">
        <div class="dot dot7"></div>
      </div>
      <div class="label">
        Концентрация внимание
      </div>
      <div class="item">
        <div class="dot dot8"></div>
      </div>
    </div>
    <div id="start-legend">
      <div>
        БАЗОВАЯ ГРАМОТНОСТЬ
      </div>
      <div>
        СОЦИАЛЬНО-<br>
        ЭМОЦИОНАЛЬНЫЕ НАВЫКИ
      </div>
    </div>
  </div>
</template>

<style>
  .start {
    min-width: 600px;
  }

  #start-img-1 {
    background-image:
        linear-gradient(to bottom, rgba(63, 179, 245, 0.4), rgba(63, 179, 245, 1)),
        url('@/assets/photos/tools_main.jpg');
    width: 100%;
    min-width: 600px;
    height: 500px;
    background-size: cover;
  }

  #start-img-1 .text {
    padding-left: 40px;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    color: var(--vt-c-white-soft);
  }

  #start-img-1 .text .title {
    font-weight: 900;
    font-size: 40px;
    line-height: 1.1;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }

  #start-img-1 .text .subtitle {
    padding: 10px 0 40px;
    font-weight: 900;
    font-size: 60px;
    line-height: 1.1;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }

  #start-details {
    padding: 0 40px 40px;
    background-color: var(--fas-blue);
    color: var(--vt-c-white-soft);
    font-size: 20px;
    line-height: 1.3;
  }

  #start-graph {
    display: flex;
    width: 600px;
    min-width: 600px;
    margin: 0 auto;
    padding-top: 80px;
    background-color: var(--vt-c-white);
  }

  #start-graph .label {
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    padding-left: 10px;
    font-size: 20px;
    font-weight: 600;
    user-select: none;
  }

  #start-graph .label:not(:first-child) {
    padding-right: 20px;
  }

  #start-graph .item {
    height: 300px;
    width: 10px;
    background-color: var(--vt-c-divider-light-1);
    border-radius: 10px;
  }

  #start-graph .item .dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: -10px;
    position: absolute;
  }

  #start-graph .item .dot1 {
    background-color: #87ab69;
    margin-top: 140px;
  }

  #start-graph .item .dot2 {
    background-color: #e19b9f;
    margin-top: 40px;
  }

  #start-graph .item .dot3 {
    background-color: #3f829d;
    margin-top: 120px;
  }

  #start-graph .item .dot4 {
    background-color: #ff9800;
    margin-top: 160px;
  }

  #start-graph .item .dot5 {
    background-color: #c83030;
    margin-top: 180px;
  }

  #start-graph .item .dot6 {
    background-color: #0f3f4c;
    margin-top: 140px;
  }

  #start-graph .item .dot7 {
    background-color: #dcae96;
    margin-top: 170px;
  }

  #start-graph .item .dot8 {
    background-color: #ffeb3b;
    margin-top: 80px;
  }

  #start-graph .gap {
    height: 300px;
    width: 35px;
  }

  #start-legend {
    display: flex;
    width: 600px;
    min-width: 600px;
    margin: 0 auto;
    padding: 30px 0 80px;
    background-color: var(--vt-c-white);
  }

  #start-legend div {
    width: 300px;
    color: #87ab69;
    font-size: 19px;
    font-weight: 600;
    line-height: 1;
    padding-left: 8px;
  }

  #start-legend div:not(:first-child) {
    padding-left: 30px;
  }

  @media (min-width: 1024px) {
    #start-img-1 {
      height: 600px;
    }

    #start-img-1 .text {
      padding-left: 60px;
    }

    #start-img-1 .text .title {
      font-size: 60px;
    }

    #start-img-1 .text .subtitle {
      font-size: 80px;
    }

    #start-details {
      padding: 0 60px 40px;
      font-size: 24px;
    }
  }

  @media (min-width: 1200px) {
    #start-img-1 {
      height: 800px;
    }

    #start-img-1 .text {
      padding-left: 120px;
    }

    #start-img-1 .text .title {
      font-size: 80px;
    }

    #start-img-1 .text .subtitle {
      font-size: 100px;
    }

    #start-details {
      padding: 0 120px 80px;
      font-size: 30px;
    }
  }
</style>

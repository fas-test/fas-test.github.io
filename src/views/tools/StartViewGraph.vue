<template>
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
      Концентрация внимания
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
</template>

<style scoped>
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
</style>

<script setup lang="ts">
  defineProps<{
    title: string,
    label: string,
    icon: string
  }>()
</script>

<template>
  <div class="triangle-container">
    <div class="triangle">
      <img v-if="'lightbulb' === icon" src="@/assets/icons/lightbulb.svg" :alt="icon" />
      <img v-else-if="'award' === icon" src="@/assets/icons/award.svg" :alt="icon" />
      <img v-else-if="'handshake' === icon" src="@/assets/icons/handshake.svg" :alt="icon" />
      <img v-else-if="'scales' === icon" src="@/assets/icons/scales.svg" :alt="icon" />
      <img v-else-if="'run' === icon" src="@/assets/icons/run.svg" :alt="icon" />
      <img v-else-if="'attention' === icon" src="@/assets/icons/attention.svg" :alt="icon" />
    </div>
    <div class="triangle-title">{{ title }}</div>
    <span>{{ label }}</span>
  </div>
</template>

<style>
.triangle-container {
  display: inline-block;
  text-align: center;
  width: 150px;
  font-size: 12px;
  line-height: 1.3;
}

.triangle-container .triangle {
  width: 150px;
  height: 150px;
  background-image: url('@/assets/triangle.png');
  background-size: cover;
}

.triangle-container .triangle img {
  width: 50px;
  height: 50px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
      transform: translateY(-50%);
  filter: invert(77%) sepia(28%) saturate(7203%) hue-rotate(172deg) brightness(100%) contrast(93%);
}

.triangle-container .triangle-title {
  height: 50px;
  font-weight: bold;
}

@media (min-width: 1024px) {
  .triangle-container {
    width: 240px;
    font-size: 16px;
    padding: 0 20px;
  }

  .triangle-container .triangle {
    width: 200px;
    height: 200px;
  }

  .triangle-container .triangle img {
    width: 80px;
    height: 80px;
  }
}
</style>

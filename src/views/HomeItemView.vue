<script setup lang="ts">
  defineProps<{
    label: string,
    icon: string
  }>()
</script>

<template>
  <div class="triangle-container">
    <div class="triangle">
      <img v-if="'eye' === icon" src="@/assets/icons/eye.svg" :alt="icon" />
      <img v-else-if="'document' === icon" src="@/assets/icons/document.svg" :alt="icon" />
      <img v-else-if="'pen' === icon" src="@/assets/icons/pen.svg" :alt="icon" />
      <img v-else-if="'timer' === icon" src="@/assets/icons/timer.svg" :alt="icon" />
      <img v-else-if="'magnifier' === icon" src="@/assets/icons/magnifier.svg" :alt="icon" />
    </div>
    <span>{{ label }}</span>
  </div>
</template>

<style>
.triangle-container {
  display: inline-block;
  text-align: center;
  width: 120px;
  font-size: 12px;
  line-height: 1.3;
}

.triangle-container .triangle {
  width: 120px;
  height: 120px;
  background-image: url('@/assets/triangle.png');
  background-size: cover;
}

.triangle-container .triangle img {
  width: 40px;
  height: 40px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
      transform: translateY(-50%);
  filter: invert(77%) sepia(28%) saturate(7203%) hue-rotate(172deg) brightness(100%) contrast(93%);
}

@media (min-width: 1024px) {
  .triangle-container {
    width: 200px;
    font-size: 16px;
    padding: 0 10px;
  }

  .triangle-container .triangle {
    width: 180px;
    height: 180px;
  }

  .triangle-container .triangle img {
    width: 70px;
    height: 70px;
  }
}
</style>

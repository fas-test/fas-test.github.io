<script setup lang="ts">
defineProps<{
  itemToHide: string
}>()
</script>

<template>
  <div class="tools-menu">
    <div>Другие инструменты:</div>
    <div v-if="itemToHide !== 'start'">↪ «Старт»</div>
    <div>↪ Мягкие навыки</div>
    <div>↪ Цифровые компетенции</div>
    <div>↪ «Прогресс»</div>
    <div>↪ Информационно-коммуникационная компетентность</div>
  </div>
</template>

<style scoped>
.tools-menu {
  padding-top: 20px;
}
.tools-menu div:not(:first-of-type) {
  padding-left: 20px;
}
</style>

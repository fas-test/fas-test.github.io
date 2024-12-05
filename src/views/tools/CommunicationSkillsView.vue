<script setup lang="ts">

import { reactive } from "vue";

const textBlocks = reactive({
  developingLevel: false,
  lowLevel: false,
  baseLevel: false,
  highLevel: false,
  advancedLevel: false
});
</script>

<template>
  <div class="page-container">
    <div id="communication-skills-img" class="page-main-img">
      <div class="text">
        <div class="title">
          {{ $t('tools.tool') }}
        </div>
        <div class="subtitle">
          {{ $t('tools.comSkills.title') }}
        </div>
        <div class="description">
          {{ $t('tools.comSkills.subTitle') }}
        </div>
      </div>
    </div>
    <div class="basic-container white-container">
      <p>
        {{ $t('tools.comSkills.block1.part1') }}<span class="bold-text">{{ $t('tools.comSkills.block1.part2') }}</span>{{ $t('tools.comSkills.block1.part3') }}
      </p>
      <p>
        {{ $t('tools.comSkills.block1.part4') }}
      </p>
      <p>
        {{ $t('tools.comSkills.block1.part5') }}
      </p>
      <p>
        {{ $t('tools.comSkills.block1.part6') }}<span class="bold-text">{{ $t('tools.comSkills.block1.part7') }}</span>{{ $t('tools.comSkills.block1.part8') }}
      </p>
    </div>
    <div class="basic-container blue-container">
      <div class="title">
        {{ $t('tools.comSkills.block2.title1') }}<br>
        {{ $t('tools.comSkills.block2.title2') }}
      </div>
      <div class="img-container">
        <img alt="communication-skills-components" src="@/assets/tools/communication_skills_components.jpg" v-if="$i18n.locale == 'ru'">
        <img alt="communication-skills-components" src="@/assets/tools/communication_skills_components_en.png" v-if="$i18n.locale == 'en'">
      </div>
      <p>
        {{ $t('tools.comSkills.block2.part1') }}<span class="bold-text">{{ $t('tools.comSkills.block2.part2') }}</span>{{ $t('tools.comSkills.block2.part3') }}
      </p>
    </div>
    <div class="split-container">
      <div class="title">
        {{ $t('tools.comSkills.block3.title1') }}<br>
        {{ $t('tools.comSkills.block3.title2') }}
      </div>
      <div class="description">
        <p>
          {{ $t('tools.comSkills.block3.part1') }}<span class="bold-text">{{ $t('tools.comSkills.block3.part2') }}</span>{{ $t('tools.comSkills.block3.part3') }}
        </p>
        <p>
          {{ $t('tools.comSkills.block3.part4') }}<span class="bold-text">{{ $t('tools.comSkills.block3.part5') }}</span>{{ $t('tools.comSkills.block3.part6') }}
          <span class="bold-text">{{ $t('tools.comSkills.block3.part7') }}</span>{{ $t('tools.comSkills.block3.part8') }}
          <span class="bold-text">{{ $t('tools.comSkills.block3.part9') }}</span>{{ $t('tools.comSkills.block3.part10') }}
        </p>
        <p>{{ $t('tools.comSkills.block3.part11') }}</p>
        <p>{{ $t('tools.comSkills.block3.part12') }}</p>
        <p>
          <span class="bold-text">{{ $t('tools.comSkills.block3.part13') }}</span>{{ $t('tools.comSkills.block3.part14') }}
        </p>
        <p v-if="$i18n.locale == 'ru'">
          <span class="bold-text">Контекст заданий</span>: академический, деловой и личностный. Пример задания можно посмотреть
          <a class="inline-link" target="_blank" href="https://youtu.be/CgcQZ_cUMCY">здесь</a>.
        </p>
        <p v-if="$i18n.locale == 'en'">
          <span class="bold-text">The scenario contexts</span> are academic, business, and personal. The example of the task is
          <a class="inline-link" target="_blank" href="https://ce.ictlit.ru/task/gift/en">here</a>.
        </p>
        <p>
          <span class="bold-text">{{ $t('tools.comSkills.block3.part15') }}</span>{{ $t('tools.comSkills.block3.part16') }}
        </p>
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="title">
        {{ $t('tools.comSkills.block4.title') }}
      </div>
      <p>
        {{ $t('tools.comSkills.block4.part1') }}<span class="bold-text">{{ $t('tools.comSkills.block4.part2') }}</span>{{ $t('tools.comSkills.block4.part3') }}
      </p>
      <div class="shifted-div">
        •	<span @click="textBlocks.advancedLevel = !textBlocks.advancedLevel" class="shifted-div-title">{{ $t('tools.comSkills.block4.part4') }}</span>
        <span v-if="textBlocks.advancedLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.advancedLevel" class="shifted-div-details">
          {{ $t('tools.comSkills.block4.part5') }}
        </div>
        •	<span @click="textBlocks.highLevel = !textBlocks.highLevel" class="shifted-div-title">{{ $t('tools.comSkills.block4.part6') }}</span>
        <span v-if="textBlocks.highLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.highLevel" class="shifted-div-details">
          {{ $t('tools.comSkills.block4.part7') }}
        </div>
        •	<span @click="textBlocks.baseLevel = !textBlocks.baseLevel" class="shifted-div-title">{{ $t('tools.comSkills.block4.part8') }}</span>
        <span v-if="textBlocks.baseLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.baseLevel" class="shifted-div-details">
          {{ $t('tools.comSkills.block4.part9') }}
        </div>
        •	<span @click="textBlocks.lowLevel = !textBlocks.lowLevel" class="shifted-div-title">{{ $t('tools.comSkills.block4.part10') }}</span>
        <span v-if="textBlocks.lowLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.lowLevel" class="shifted-div-details">
          {{ $t('tools.comSkills.block4.part11') }}
        </div>
        •	<span @click="textBlocks.developingLevel = !textBlocks.developingLevel" class="shifted-div-title">{{ $t('tools.comSkills.block4.part12') }}</span>
        <span v-if="textBlocks.developingLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.developingLevel" class="shifted-div-details">
          {{ $t('tools.comSkills.block4.part13') }}
        </div>
      </div>
      <p>
        {{ $t('tools.comSkills.block4.part14') }}
      </p>
      <p>
        {{ $t('tools.comSkills.block4.part15') }}
      </p>
    </div>
  </div>
</template>

<style>
  #communication-skills-img {
    background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)),
      url('@/assets/photos/communication_skills_main.jpeg');
  }
</style>

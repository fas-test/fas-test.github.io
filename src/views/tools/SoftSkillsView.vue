<script setup lang="ts">

import { reactive } from "vue";

const textBlocks = reactive({
  developingLevel: false,
  baseLevel: false,
  advancedLevel: false,
});
</script>

<template>
  <div class="page-container">
    <div id="soft-skills-img" class="page-main-img">
      <div class="text">
        <div class="title">
          {{ $t('tools.tool') }}
        </div>
        <div class="subtitle">
          {{ $t('tools.softSkills.title') }}
        </div>
        <div class="description">
          {{ $t('tools.softSkills.subTitle') }}
        </div>
      </div>
    </div>
    <div class="basic-container white-container">
      <p>
        {{ $t('tools.softSkills.block1.part1') }}<span class="bold-text">{{ $t('tools.softSkills.block1.part2') }}</span>{{ $t('tools.softSkills.block1.part3') }}
      </p>
      <p>
        {{ $t('tools.softSkills.block1.part4') }}<span class="bold-text">{{ $t('tools.softSkills.block1.part5') }}</span>{{ $t('tools.softSkills.block1.part6') }}
      </p>
    </div>
    <div class="basic-container blue-container">
      <div class="title" v-if="$i18n.locale == 'ru'">
        Основные навыки,<br>
        которые измеряет 4K-тест:
      </div>
      <div class="img-container" v-if="$i18n.locale == 'ru'">
        <img alt="soft-skills-components" src="@/assets/tools/soft_skills_components.png">
      </div>
      <p>
        {{ $t('tools.softSkills.block2.part1') }}<span class="bold-text">{{ $t('tools.softSkills.block2.part2') }}</span>{{ $t('tools.softSkills.block2.part3') }}
      </p>
      <p>
        {{ $t('tools.softSkills.block2.part4') }}
      </p>
    </div>
    <div class="split-container">
      <div class="title">
        {{ $t('tools.softSkills.block3.title1') }}<br>
        {{ $t('tools.softSkills.block3.title2') }}
      </div>
      <div class="description">
        <p>
          {{ $t('tools.softSkills.block3.part1') }}<span class="bold-text">{{ $t('tools.softSkills.block3.part2') }}</span>{{ $t('tools.softSkills.block3.part3') }}
        </p>
        <p>
          {{ $t('tools.softSkills.block3.part4') }}<span class="bold-text">{{ $t('tools.softSkills.block3.part5') }}</span>{{ $t('tools.softSkills.block3.part6') }}
          <span class="bold-text">{{ $t('tools.softSkills.block3.part7') }}</span>{{ $t('tools.softSkills.block3.part8') }}
        </p>
        <p>
          <span class="bold-text">{{ $t('tools.softSkills.block3.part9') }}</span>{{ $t('tools.softSkills.block3.part10') }}
        </p>
        <p>
          {{ $t('tools.softSkills.block3.part11') }}
        </p>
        <p v-if="$i18n.locale == 'ru'">
          <span class="bold-text">Контекст заданий</span>: реальный и фантастический.
        </p>
        <p v-if="$i18n.locale == 'ru'">
          Демо-тестирование можно посмотреть <a class="inline-link" href="https://youtu.be/DC7GwnPH6Vs" target="_blank">здесь</a>,
          <a class="inline-link" href="https://youtu.be/hKRdn9fvYHs" target="_blank">здесь</a> и
          <a class="inline-link" href="https://youtu.be/6IFdkusM0I0" target="_blank">здесь</a>.
        </p>
        <p>
          <span class="bold-text">{{ $t('tools.softSkills.block3.part12') }}</span>{{ $t('tools.softSkills.block3.part13') }}
        </p>
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="title">
        {{ $t('tools.softSkills.block4.title') }}
      </div>
      <p>{{ $t('tools.softSkills.block4.part1') }}</p>
      <div class="shifted-div">
        •	<span @click="textBlocks.developingLevel = !textBlocks.developingLevel" class="shifted-div-title">{{ $t('tools.softSkills.block4.levels.lev1.title') }}</span>
        <span v-if="textBlocks.developingLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.developingLevel" class="shifted-div-details">
          <span class="bold-text">{{ $t('tools.softSkills.block4.levels.subTitle1') }}</span><br>
          {{ $t('tools.softSkills.block4.levels.lev1.part1') }}<br><br>
          <span class="bold-text">{{ $t('tools.softSkills.block4.levels.subTitle2') }}</span><br>
          {{ $t('tools.softSkills.block4.levels.lev1.part2') }}<br><br>
          <span class="bold-text">{{ $t('tools.softSkills.block4.levels.subTitle3') }}</span><br>
          {{ $t('tools.softSkills.block4.levels.lev1.part3') }}
        </div>
        •	<span @click="textBlocks.baseLevel = !textBlocks.baseLevel" class="shifted-div-title">{{ $t('tools.softSkills.block4.levels.lev2.title') }}</span>
        <span v-if="textBlocks.baseLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.baseLevel" class="shifted-div-details">
          <span class="bold-text">{{ $t('tools.softSkills.block4.levels.subTitle1') }}</span><br>
          {{ $t('tools.softSkills.block4.levels.lev2.part1') }}<br><br>
          <span class="bold-text">{{ $t('tools.softSkills.block4.levels.subTitle2') }}</span><br>
          {{ $t('tools.softSkills.block4.levels.lev2.part2') }}<br><br>
          <span class="bold-text">{{ $t('tools.softSkills.block4.levels.subTitle3') }}</span><br>
          {{ $t('tools.softSkills.block4.levels.lev2.part3') }}
        </div>
        •	<span @click="textBlocks.advancedLevel = !textBlocks.advancedLevel" class="shifted-div-title">{{ $t('tools.softSkills.block4.levels.lev3.title') }}</span>
        <span v-if="textBlocks.advancedLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.advancedLevel" class="shifted-div-details">
          <span class="bold-text">{{ $t('tools.softSkills.block4.levels.subTitle1') }}</span><br>
          {{ $t('tools.softSkills.block4.levels.lev3.part1') }}<br><br>
          <span class="bold-text">{{ $t('tools.softSkills.block4.levels.subTitle2') }}</span><br>
          {{ $t('tools.softSkills.block4.levels.lev3.part2') }}<br><br>
          <span class="bold-text">{{ $t('tools.softSkills.block4.levels.subTitle3') }}</span><br>
          {{ $t('tools.softSkills.block4.levels.lev3.part3') }}
        </div>
      </div>
      <p>{{ $t('tools.softSkills.block4.part2') }}</p>
      <p>{{ $t('tools.softSkills.block4.part3') }}</p>
    </div>
  </div>
</template>

<style>
  #soft-skills-img {
    background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)),
      url('@/assets/photos/soft_skills_main.jpeg');
  }
</style>

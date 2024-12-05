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
    <div id="digital-skills-img" class="page-main-img">
      <div class="text">
        <div class="title">
          {{ $t('tools.tool') }}
        </div>
        <div class="subtitle">
          {{ $t('tools.digSkills.title') }}
        </div>
        <div class="description">
          {{ $t('tools.digSkills.subTitle') }}
        </div>
      </div>
    </div>
    <div class="basic-container white-container">
      <p>
        {{ $t('tools.digSkills.block1.part1') }}<span class="bold-text">{{ $t('tools.digSkills.block1.part2') }}</span>{{ $t('tools.digSkills.block1.part3') }}
      </p>
      <p>
        {{ $t('tools.digSkills.block1.part4') }}<span class="bold-text">{{ $t('tools.digSkills.block1.part5') }}</span>{{ $t('tools.digSkills.block1.part6') }}
      </p>
    </div>
    <div class="basic-container blue-container">
      <div class="title">
        {{ $t('tools.digSkills.block2.title') }}
      </div>
      <div class="img-container">
        <img alt="digital-skills-components" src="@/assets/tools/digital_skills_components.jpg" v-if="$i18n.locale == 'ru'">
        <img alt="digital-skills-components" src="@/assets/tools/digital_skills_components_en.jpg" v-if="$i18n.locale == 'en'">
      </div>
      <p>
        {{ $t('tools.digSkills.block2.part1') }}<span class="bold-text">{{ $t('tools.digSkills.block2.part2') }}</span>{{ $t('tools.digSkills.block2.part3') }}
      </p>
      <p>
        {{ $t('tools.digSkills.block2.part4') }}<span class="bold-text">{{ $t('tools.digSkills.block2.part5') }}</span>{{ $t('tools.digSkills.block2.part6') }}
      </p>
    </div>
    <div class="split-container">
      <div class="title">
        {{ $t('tools.digSkills.block3.title1') }}<br>
        {{ $t('tools.digSkills.block3.title2') }}
      </div>
      <div class="description">
        <p>
          {{ $t('tools.digSkills.block3.part1') }}<span class="bold-text">{{ $t('tools.digSkills.block3.part2') }}</span>{{ $t('tools.digSkills.block3.part3') }}
        </p>
        <p>
          {{ $t('tools.digSkills.block3.part4') }}<span class="bold-text">{{ $t('tools.digSkills.block3.part5') }}</span>{{ $t('tools.digSkills.block3.part6') }}
          <span class="bold-text">{{ $t('tools.digSkills.block3.part7') }}</span>{{ $t('tools.digSkills.block3.part8') }}
        </p>
        <p>
          <span class="bold-text">{{ $t('tools.digSkills.block3.part9') }}</span>{{ $t('tools.digSkills.block3.part10') }}
        </p>
        <p>
          <span class="bold-text">{{ $t('tools.digSkills.block3.part11') }}</span>{{ $t('tools.digSkills.block3.part12') }}<span class="bold-text">{{ $t('tools.digSkills.block3.part13') }}</span>
        </p>
        <p>
          <span class="bold-text">{{ $t('tools.digSkills.block3.part14') }}</span>{{ $t('tools.digSkills.block3.part15') }}
        </p>
        <p v-if="$i18n.locale == 'ru'">
          Пример задания можно посмотреть <a class="inline-link" target="_blank" href="https://youtu.be/Hb2kNUn7X6k">здесь</a>.
        </p>
        <p v-if="$i18n.locale == 'en'">
          The example of the task is <a class="inline-link" target="_blank" href="https://dldev.hse.ru/demo/d93007a9d0c6ff70cdf85575852be70a">here</a>.
        </p>
        <p>
          <span class="bold-text">{{ $t('tools.digSkills.block3.part16') }}</span>{{ $t('tools.digSkills.block3.part17') }}
        </p>
        <p v-if="$i18n.locale == 'ru'">
          <span class="bold-text">Контекстная анкета</span> разработана для выявления факторов, связанных с развитием цифровых навыков
          в быстро меняющейся цифровой среде.
        </p>
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="title">
        {{ $t('tools.digSkills.block4.title') }}
      </div>
      <p>
        {{ $t('tools.digSkills.block4.part1') }}
      </p>
      <div class="shifted-div">
        •	<span @click="textBlocks.developingLevel = !textBlocks.developingLevel" class="shifted-div-title">{{ $t('tools.digSkills.block4.part2') }}</span>
          <span v-if="textBlocks.developingLevel"> ↖</span>
          <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.developingLevel" class="shifted-div-details">
          <span class="bold-text">{{ $t('tools.digSkills.block4.part3') }}</span><br>
          •	{{ $t('tools.digSkills.block4.part4') }}<br>
          •	{{ $t('tools.digSkills.block4.part5') }}<br>
          • {{ $t('tools.digSkills.block4.part6') }}<br>
          •	{{ $t('tools.digSkills.block4.part7') }}<br>
          •	{{ $t('tools.digSkills.block4.part8') }}
        </div>
        •	<span @click="textBlocks.baseLevel = !textBlocks.baseLevel" class="shifted-div-title">{{ $t('tools.digSkills.block4.part9') }}</span>
        <span v-if="textBlocks.baseLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.baseLevel" class="shifted-div-details">
          <span class="bold-text">{{ $t('tools.digSkills.block4.part10') }}</span><br>
          •	{{ $t('tools.digSkills.block4.part11') }}<br>
          •	{{ $t('tools.digSkills.block4.part12') }}<br>
          •	{{ $t('tools.digSkills.block4.part13') }}<br>
          •	{{ $t('tools.digSkills.block4.part14') }}<br>
          •	{{ $t('tools.digSkills.block4.part15') }}
        </div>
        •	<span @click="textBlocks.advancedLevel = !textBlocks.advancedLevel" class="shifted-div-title">{{ $t('tools.digSkills.block4.part16') }}</span>
        <span v-if="textBlocks.advancedLevel"> ↖</span>
        <span v-else> ↘</span>
        <br>
        <div v-if="textBlocks.advancedLevel" class="shifted-div-details">
          <span class="bold-text">{{ $t('tools.digSkills.block4.part17') }}</span><br>
          •	{{ $t('tools.digSkills.block4.part18') }}<br>
          •	{{ $t('tools.digSkills.block4.part19') }}<br>
          •	{{ $t('tools.digSkills.block4.part20') }}<br>
          •	{{ $t('tools.digSkills.block4.part21') }}<br>
          •	{{ $t('tools.digSkills.block4.part22') }}
        </div>
      </div>
      <p>
        {{ $t('tools.digSkills.block4.part23') }}
      </p>
      <p>
        {{ $t('tools.digSkills.block4.part24') }}
      </p>
      <div class="img-container">
        <img alt="digital-skills-report-example" src="@/assets/tools/digital_skills_report_example.jpg" v-if="$i18n.locale == 'ru'">
        <img alt="digital-skills-report-example" src="@/assets/tools/digital_skills_report_example_en.png" v-if="$i18n.locale == 'en'">
      </div>
    </div>
  </div>
</template>

<style>
  #digital-skills-img {
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)),
        url('@/assets/photos/digital_skills_main.jpeg');
  }
</style>

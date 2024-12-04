<script setup lang="ts">
  import {RouterLink} from "vue-router";
</script>

<template>
  <div class="page-container">
    <div id="progress-img" class="page-main-img">
      <div class="text">
        <div class="title">
          {{ $t('tools.tool') }}
        </div>
        <div class="subtitle">
          {{ $t('tools.progress.title') }}
        </div>
        <div class="description">
          {{ $t('tools.progress.subTitle') }}
        </div>
      </div>
    </div>
    <div class="basic-container white-container">
      {{ $t('tools.progress.block1.part1') }}<span id="progress-link"><RouterLink to="/tools/start">{{ $t('tools.progress.block1.part2') }}</RouterLink></span>
      {{ $t('tools.progress.block1.part3') }}<br><br>
      {{ $t('tools.progress.block1.part4') }}<br><br>
      {{ $t('tools.progress.block1.part5') }}<span class="bold-text">{{ $t('tools.progress.block1.part6') }}</span>{{ $t('tools.progress.block1.part7') }}
      <span class="bold-text">{{ $t('tools.progress.block1.part8') }}</span>.
    </div>
    <div class="basic-container blue-container">
      <div class="title">
        {{ $t('tools.progress.block2.title') }}
      </div>
      {{ $t('tools.progress.block2.part1') }}<br><br>
      {{ $t('tools.progress.block2.part2') }}<br><br>
      {{ $t('tools.progress.block2.part3') }}
    </div>
    <div class="split-container">
      <div class="title">
        {{ $t('tools.progress.block3.title1') }}<br>
        {{ $t('tools.progress.block3.title2') }}
      </div>
      <div class="description">
        {{ $t('tools.progress.block3.part1') }}
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="video-container" v-if="$i18n.locale == 'ru'">
      <div class="video">
        <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/ZLlhZ2rp9AU?si=al2tLuV2hlJ3wv3y"
                title="ПРОГРЕСС: проведение"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<style>
  #progress-img {
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)),
        url('@/assets/photos/progress_main.png');
  }

  #progress-link a {
    border: 0;
    border-bottom: 1px dotted var(--vt-c-black-soft);
    color: var(--vt-c-black-soft);
  }

  #progress-link a:hover {
    color: var(--fas-blue);
    border-bottom: 1px dotted var(--fas-blue);
  }
</style>

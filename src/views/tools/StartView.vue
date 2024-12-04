<script setup lang="ts">
  import StartViewGraph from "@/views/tools/StartViewGraph.vue";
  import {RouterLink} from "vue-router";
</script>

<template>
  <div class="page-container">
    <div id="start-img" class="page-main-img">
      <div class="text">
        <div class="title">
          {{ $t('tools.tool') }}
        </div>
        <div class="subtitle">
          {{ $t('tools.start.title') }}
        </div>
      </div>
    </div>
    <div class="basic-container white-container">
      {{ $t('tools.start.block1.part1') }}<span class="bold-text">{{ $t('tools.start.block1.part2') }}</span>
      {{ $t('tools.start.block1.part3') }}<span class="bold-text">{{ $t('tools.start.block1.part4') }}</span>{{ $t('tools.start.block1.part5') }}
      <span class="bold-text">{{ $t('tools.start.block1.part6') }}</span>
      {{ $t('tools.start.block1.part7') }}<span class="bold-text">{{ $t('tools.start.block1.part8') }}</span>.
    </div>
    <StartViewGraph v-if="$i18n.locale == 'ru'"/>
    <div class="basic-container blue-container">
      {{ $t('tools.start.block2.part1') }}<br>
      {{ $t('tools.start.block2.part2') }}<br>
      {{ $t('tools.start.block2.part3') }}
    </div>
    <div class="split-container">
      <div class="title">
        {{ $t('tools.start.block3.title1') }}<br>
        {{ $t('tools.start.block3.title2') }}
      </div>
      <div class="description">
        {{ $t('tools.start.block3.part1') }}<br><br>
        {{ $t('tools.start.block3.part2') }}
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="title">
        {{ $t('tools.start.block4.title') }}
      </div>
      {{ $t('tools.start.block4.part1') }}
      <div class="img-container" v-if="$i18n.locale == 'ru'">
        <img alt="report-example" src="@/assets/tools/report_example.png">
        <div>Пример отчета из личного кабинета</div>
      </div>
      {{ $t('tools.start.block4.part2') }}<span id="start-link"><RouterLink to="/tools/progress">{{ $t('tools.start.block4.part3') }}</RouterLink></span>{{ $t('tools.start.block4.part4') }}
    </div>
    <div class="white-gap" v-if="$i18n.locale == 'ru'"></div>
    <div class="video-container" v-if="$i18n.locale == 'ru'">
      <div class="video">
        <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/hrYvjiXtI88?si=jcDSmbm0nCj8aL07"
                title="СТАРТ: проведение"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<style>
  #start-img {
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)),
        url('@/assets/photos/start_main.png');
  }

  #start-link a {
    border: 0;
    border-bottom: 1px dotted var(--vt-c-white);
    color: var(--vt-c-white);
  }

  #start-link a:hover {
    color: var(--vt-c-black-soft);
    border-bottom: 1px dotted var(--vt-c-black-soft);
  }
</style>

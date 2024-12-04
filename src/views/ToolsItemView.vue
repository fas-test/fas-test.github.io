<script setup lang="ts">
  defineProps<{
    label: string,
    grade: string,
    title: string,
    description: string
  }>()
</script>

<template>
  <div class="tool">
    <div class="tool-grade">{{ $t(grade) }}</div>
    <img v-if="'start' === label" src="@/assets/tools/tool_1.png" :alt="label" />
    <img v-else-if="'soft-skills' === label" src="@/assets/tools/tool_2.png" :alt="label" />
    <img v-else-if="'digital-skills' === label" src="@/assets/tools/tool_3.png" :alt="label" />
    <img v-else-if="'progress' === label" src="@/assets/tools/tool_4.png" :alt="label" />
    <img v-else-if="'communication-skills' === label" src="@/assets/tools/tool_5.png" :alt="label" />
    <div class="tool-texts">
      <div class="tool-title">{{ $t(title) }}</div>
      <div class="tool-description">{{ $t(description) }}</div>
    </div>
    <div class="action">
      <RouterLink :to="'/tools/' + label">{{ $t('tools.moreInfo') }}</RouterLink>
    </div>
  </div>
</template>

<style>
  .tool {
    position: relative;
    display: inline-block;
    width: 200px;
    margin: 0 5px;
    font-size: 12px;
    line-height: 1.3;
    background-color: var(--vt-c-white-soft);
    border-radius: 10px;
    overflow: hidden;
    -webkit-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
       -moz-box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
            box-shadow: 0 0 20px 2px rgba(0,0,0,0.3);
  }

  .tool img {
    width: 190px;
  }

  .tool .tool-grade {
    position: absolute;
    top: 120px;
    left: 10px;
    height: 20px;
    line-height: 20px;
    width: 70px;
    background-color: var(--vt-c-white-soft);
    text-align: center;
    font-size: 10px;
    border-radius: 5px;
    font-weight: 600;
  }

  .tool .tool-texts {
    height: 140px;
  }

  .tool .tool-texts .tool-title {
    padding: 10px 15px;
    font-weight: 600;
    color: var(--fas-blue);
  }

  .tool .tool-texts .tool-description {
    padding: 0 15px 15px 15px;
  }

  .tool .action {
    margin: 0 0 15px 15px;
    background-color: var(--vt-c-black-soft);
    width: 160px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
  }

  .tool .action a {
    display: block;
    color: var(--vt-c-white-mute);
    text-transform: uppercase;
    font-weight: 600;
    border-width: 0;
  }

  @media (min-width: 1024px) {
    .tool {
      width: 300px;
      margin: 0 10px;
      font-size: 16px;
    }

    .tool img {
      width: 280px;
    }

    .tool .tool-grade {
      top: 170px;
      left: 15px;
      height: 25px;
      line-height: 25px;
      width: 90px;
      font-size: 12px;
    }

    .tool .tool-texts {
      height: 160px;
    }

    .tool .action {
      width: 250px;
      height: 30px;
      line-height: 30px;
    }
  }

  @media (min-width: 1200px) {
    .tool {
      width: 350px;
      margin: 0 10px;
      font-size: 18px;
    }

    .tool .tool-grade {
      top: 200px;
      height: 30px;
      line-height: 30px;
      width: 100px;
      font-size: 14px;
    }

    .tool img {
      width: 330px;
    }

    .tool .tool-texts {
      height: 190px;
    }

    .tool .action {
      width: 300px;
      height: 35px;
      line-height: 35px;
    }
  }
</style>

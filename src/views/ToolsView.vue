<script setup lang="ts">
  import ToolsItemView from "@/views/ToolsItemView.vue";
</script>

<template>
  <div class="page-container">
    <div id="tools-img" class="page-main-img">
      <div class="text">
        <div class="title">
          {{ $t('tools.main.title1') }}<br>
          {{ $t('tools.main.title2') }}<br>
          {{ $t('tools.main.title3') }}<br>
          {{ $t('tools.main.title4') }}
        </div>
        <div class="description">
          {{ $t('tools.main.subTitle1') }}<br>
          {{ $t('tools.main.subTitle2') }}<br>
          {{ $t('tools.main.subTitle3') }}
        </div>
        <div class="action">
          <RouterLink to="/contacts">{{ $t('tools.main.actionButton') }}</RouterLink>
        </div>
      </div>
    </div>
    <div class="white-gap"></div>
    <div id="tools-details">
      <div class="tools-container">
        <ToolsItemView
            grade="tools.block1.grade" title="tools.block1.title" label="start"
            description="tools.block1.description"
        />
        <ToolsItemView
            grade="tools.block2.grade" title="tools.block2.title" label="soft-skills"
            description="tools.block2.description"
        />
        <ToolsItemView
            grade="tools.block3.grade" title="tools.block3.title" label="digital-skills"
            description="tools.block3.description"
        />
      </div>
      <div class="tools-container">
        <ToolsItemView
            grade="tools.block4.grade" title="tools.block4.title" label="progress"
            description="tools.block4.description"
        />
        <ToolsItemView
            grade="tools.block5.grade" title="tools.block5.title" label="communication-skills"
            description="tools.block5.description"
        />
        <div class="tool-transparent">
          ✓ {{ $t('tools.block6.part1') }}<br><br>
          ✓ {{ $t('tools.block6.part2') }}<br><br>
          ✓ {{ $t('tools.block6.part3') }}<br><br>
          ✓ {{ $t('tools.block6.part4') }}<br><br>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #tools-img {
    background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)),
      url('@/assets/photos/tools_main.jpg');
  }

  #tools-details {
    width: 100%;
    background-color: var(--fas-blue);
  }

  #tools-details .tools-container {
    display: flex;
    width: 600px;
    min-width: 600px;
    margin: 0 auto;
    padding: 5px 0;
  }

  #tools-details .tools-container:first-of-type {
    padding-top: 80px;
  }

  #tools-details .tools-container:last-of-type {
    padding-bottom: 80px;
  }

  #tools-details .tools-container .tool-transparent {
    display: inline-block;
    width: 200px;
    margin: 0 5px;
    padding: 40px 0 0 15px;
    font-size: 12px;
    line-height: 1.3;
    background-color: var(--fas-blue);
    color: var(--vt-c-white-soft);
    border-radius: 10px;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    #tools-details .tools-container {
      width: 900px;
      padding: 10px 0;
    }

    #tools-details .tools-container .tool-transparent {
      width: 300px;
      margin: 0 10px;
      padding: 50px 0 0 20px;
      font-size: 16px;
    }
  }

  @media (min-width: 1200px) {
    #tools-details .tools-container {
      width: 1050px;
      padding: 10px 0;
    }

    #tools-details .tools-container .tool-transparent {
      width: 350px;
      margin: 0 10px;
      padding: 60px 10px 0 30px;
      font-size: 18px;
    }
  }
</style>

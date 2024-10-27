<template>
  <div class="page-container">
    <div id="consulting-img" class="page-main-img">
      <div class="text">
        <div class="title">
          {{ $t('consulting.main.title1') }}<br>
          {{ $t('consulting.main.title2') }}<br>
          {{ $t('consulting.main.title3') }}
        </div>
        <div class="empty"></div>
        <div class="action">
          <RouterLink to="/contacts">{{ $t('consulting.main.actionButton') }}</RouterLink>
        </div>
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container blue-container">
      <div class="mid-title">
        {{ $t('consulting.block1.title') }}
      </div>
    </div>
    <div class="very-basic-blue-container">
      <div class="container-with-blocks">
        <div class="consulting-block block">
          <div class="consulting-block-dot"></div>
          <div class="consulting-block-title">
            {{ $t('consulting.block1.part1_1') }}
          </div>
          <div class="consulting-block-description">
            {{ $t('consulting.block1.part1_2') }}
          </div>
        </div>
        <div class="consulting-block block">
          <div class="consulting-block-dot"></div>
          <div class="consulting-block-title">
            {{ $t('consulting.block1.part2_1') }}
          </div>
          <div class="consulting-block-description">
            {{ $t('consulting.block1.part2_2') }}
          </div>
        </div>
      </div>
      <div class="container-with-blocks">
        <div class="consulting-block block">
          <div class="consulting-block-dot"></div>
          <div class="consulting-block-title">
            {{ $t('consulting.block1.part3_1') }}
          </div>
          <div class="consulting-block-description">
            {{ $t('consulting.block1.part3_2') }}
          </div>
        </div>
        <div class="consulting-block block">
          <div class="consulting-block-dot"></div>
          <div class="consulting-block-title">
            {{ $t('consulting.block1.part4_1') }}
          </div>
          <div class="consulting-block-description">
            {{ $t('consulting.block1.part4_2') }}
          </div>
        </div>
      </div>
      <div class="container-with-blocks">
        <div class="consulting-block block">
          <div class="consulting-block-dot"></div>
          <div class="consulting-block-title">
            {{ $t('consulting.block1.part5_1') }}
          </div>
          <div class="consulting-block-description">
            {{ $t('consulting.block1.part5_2') }}
          </div>
        </div>
        <div class="consulting-block transparent-block"></div>
      </div>
    </div>
  </div>
</template>

<style>
  #consulting-img {
    background-image:
        linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)),
        url('@/assets/photos/consulting_main.png');
  }

  .consulting-block {
    color: var(--vt-c-black-soft);
    padding: 20px;
  }

  .consulting-block .consulting-block-dot {
    width: 20px;
    height: 20px;
    background-color: var(--fas-blue);
    border-radius: 50%;
    -webkit-box-shadow: 0 0 20px 1px rgba(0,0,0,0.3);
       -moz-box-shadow: 0 0 20px 1px rgba(0,0,0,0.3);
            box-shadow: 0 0 20px 1px rgba(0,0,0,0.3);
  }

  .consulting-block .consulting-block-title {
    padding-top: 10px;
    color: var(--fas-blue);
    font-size: 16px;
    font-weight: 500;
    height: 90px;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }

  .consulting-block .consulting-block-description {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    .consulting-block .consulting-block-dot {
      width: 30px;
      height: 30px;
    }

    .consulting-block .consulting-block-title {
      font-size: 22px;
      height: 120px;
    }

    .consulting-block .consulting-block-description {
      font-size: 18px;
      padding-bottom: 10px;
    }
  }

  @media (min-width: 1200px) {
    .consulting-block .consulting-block-dot {
      width: 40px;
      height: 40px;
    }

    .consulting-block .consulting-block-title {
      font-size: 26px;
      height: 150px;
      padding-top: 20px;
    }

    .consulting-block .consulting-block-description {
      font-size: 22px;
    }
  }
</style>

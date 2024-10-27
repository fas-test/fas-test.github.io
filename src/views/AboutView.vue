<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'
import AboutItemView from "@/views/AboutItemView.vue";

const scrollToEl = (elId: string) => {
  VueScrollTo.scrollTo(document.getElementById(elId), 500, {easing: 'ease-in'});
};
</script>

<template>
  <div class="page-container">
    <div id="about-img" class="page-main-img">
      <div class="text">
        <div class="title">
          Future<br>
          Assessment<br>
          Service
        </div>
        <div class="description">
          {{ $t('about.main.subTitle1') }}<br>
          {{ $t('about.main.subTitle2') }}<br>
          {{ $t('about.main.subTitle3') }}<br>
          {{ $t('about.main.subTitle4') }}
        </div>
        <div class="subnavigation">
          <span @click="scrollToEl('our-mission')">{{ $t('about.main.nav.item1') }}</span>
          <span @click="scrollToEl('our-values')">{{ $t('about.main.nav.item2') }}</span>
          <span @click="scrollToEl('our-team')">{{ $t('about.main.nav.item3') }}</span>
        </div>
      </div>
    </div>
    <div id="our-mission" class="split-container">
      <div class="title">
        {{ $t('about.block1.title1') }}<br>
        {{ $t('about.block1.title2') }}
      </div>
      <div class="description">
        <p>
          {{ $t('about.block1.part1_1') }}
          <span class="bold-text">{{ $t('about.block1.part1_2') }}</span>
          {{ $t('about.block1.part1_3') }}
          <span class="bold-text">{{ $t('about.block1.part1_4') }}</span>{{ $t('about.block1.part1_5') }}
        </p>
        <p>
          {{ $t('about.block1.part2_1') }}
          <span class="bold-text">{{ $t('about.block1.part2_2') }}</span>.
        </p>
        <p>{{ $t('about.block1.part3') }}</p>
      </div>
    </div>
    <div class="white-gap"></div>
    <div class="basic-container soft-white-container">
      <div class="title">{{ $t('about.block2.part1_1') }}</div>
      <p>{{ $t('about.block2.part1_2') }}</p>
      <div class="title">{{ $t('about.block2.part2_1') }}</div>
      <p>{{ $t('about.block2.part2_2') }}</p>
      <div class="title">{{ $t('about.block2.part3_1') }}</div>
      <p>
        {{ $t('about.block2.part3_2') }}<a class="inline-link" target="_blank" href="https://www.apa.org/science/programs/testing/standards">
        {{ $t('about.block2.part3_3') }}</a>; <a class="inline-link" target="_blank" href="https://www.intestcom.org/page/28">
        {{ $t('about.block2.part3_4') }}</a>; <a class="inline-link" target="_blank" href="https://www.efpa.eu/sites/default/files/2023-06/110c_EFPA_BOA_TEST_REVIEW_MODEL_version426.pdf">
        {{ $t('about.block2.part3_5') }}</a>; <a class="inline-link" target="_blank" href="https://aea-europe.net/standards-for-assessment/">
        {{ $t('about.block2.part3_6') }}</a>. {{ $t('about.block2.part3_7') }}
      </p>
    </div>
    <div id="our-values" class="basic-container blue-container">
      <div class="title">{{ $t('about.block3.part1_1') }}</div>
      <div class="subtitle">{{ $t('about.block3.part1_2') }}</div>
      <div class="about-items">
        <AboutItemView
            icon="lightbulb"
            title="about.block3.item1_1"
            label="about.block3.item1_2"
        />
        <AboutItemView
            icon="award"
            title="about.block3.item2_1"
            label="about.block3.item2_2"
        />
        <AboutItemView
            icon="handshake"
            title="about.block3.item3_1"
            label="about.block3.item3_2"
        />
      </div>
      <div class="about-items">
        <AboutItemView
            icon="scales"
            title="about.block3.item4_1"
            label="about.block3.item4_2"
        />
        <AboutItemView
            icon="run"
            title="about.block3.item5_1"
            label="about.block3.item5_2"
        />
        <AboutItemView
            icon="attention"
            title="about.block3.item6_1"
            label="about.block3.item6_2"
        />
      </div>
    </div>
    <div id="our-team" class="split-container">
      <div class="title">
        {{ $t('about.block4.part1_1') }}<br>
        {{ $t('about.block4.part1_2') }}
      </div>
      <div class="description">{{ $t('about.block4.part1_3') }}</div>
    </div>
    <div class="white-gap-mini"></div>
    <div class="split-container">
      <div class="person">
        <div class="avatar">
          <div class="photo elena"></div>
          <div class="name">{{ $t('about.block4.part2_1') }}, Ph.D.</div>
          <div class="position">Chief Executive Officer</div>
        </div>
      </div>
      <div class="description">
        <a target="_blank" class="inline-link" href="https://scholar.google.com/citations?user=pivOY3sAAAAJ&&hl=ru&&oi=ao">{{ $t('about.block4.part2_1') }}</a>{{ $t('about.block4.part2_2') }}
      </div>
    </div>
    <div class="white-gap-mini"></div>
    <div class="split-container">
      <div class="person">
        <div class="avatar">
          <div class="photo alina"></div>
          <div class="name">{{ $t('about.block4.part3_1') }}, Ph.D.</div>
          <div class="position">Chief Research Officer</div>
        </div>
      </div>
      <div class="description">
        <a target="_blank" class="inline-link" href="https://scholar.google.ru/citations?user=rjjynbsAAAAJ&hl=ru">{{ $t('about.block4.part3_1') }}</a>{{ $t('about.block4.part3_2') }}
      </div>
    </div>
    <div class="white-gap-mini"></div>
    <div class="split-container">
      <div class="person">
        <div class="avatar">
          <div class="photo svetlana"></div>
          <div class="name">{{ $t('about.block4.part4_1') }}, Ph.D.</div>
          <div class="position">Chief Development Officer</div>
        </div>
      </div>
      <div class="description">
        <a target="_blank" class="inline-link" href="https://scholar.google.ru/citations?hl=ru&user=nSZ-txgAAAAJ">{{ $t('about.block4.part4_1') }}</a>{{ $t('about.block4.part4_2') }}
        <a target="_blank" class="inline-link" href="http://school-collection.edu.ru">{{ $t('about.block4.part4_3') }}</a>{{ $t('about.block4.part4_4') }}
        <a target="_blank" class="inline-link" href="https://www.openclass.ru/">{{ $t('about.block4.part4_5') }}</a>{{ $t('about.block4.part4_6') }}
        <a target="_blank" class="inline-link" href="http://www.ictlit.com/">{{ $t('about.block4.part4_7') }}</a>{{ $t('about.block4.part4_8') }}
        <a target="_blank" class="inline-link" href="https://dl.hse.ru/demos">{{ $t('about.block4.part4_9') }}</a>{{ $t('about.block4.part4_10') }}
      </div>
    </div>
    <div class="white-gap-mini"></div>
    <div class="split-container">
      <div class="person">
        <div class="avatar">
          <div class="photo denis"></div>
          <div class="name">{{ $t('about.block4.part5_1') }}, Ph.D.</div>
          <div class="position">Chief Technology Officer</div>
        </div>
      </div>
      <div class="description">
        <a target="_blank" class="inline-link" href="https://scholar.google.ru/citations?hl=ru&user=9-iqAiwAAAAJ">{{ $t('about.block4.part5_1') }}</a>{{ $t('about.block4.part5_2') }}
      </div>
    </div>
    <div class="white-gap-mini"></div>
    <div class="split-container">
      <div class="person">
        <div class="avatar">
          <div class="photo irina"></div>
          <div class="name">{{ $t('about.block4.part6_1') }}, M.Sc.</div>
          <div class="position">Coordinator, test developer</div>
        </div>
      </div>
      <div class="description">
        {{ $t('about.block4.part6_1') }}{{ $t('about.block4.part6_2') }}
      </div>
    </div>
    <div class="white-gap"></div>
  </div>
</template>

<style>
  #about-img {
    background-image:
      linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)),
      url('@/assets/photos/about_main.jpeg');
  }

  .about-items {
    display: flex;
    width: 450px;
    min-width: 450px;
    margin: 0 auto;
    padding-bottom: 40px;
  }

  .about-items:last-of-type {
    padding-bottom: 0;
  }

  .person .avatar .denis {
    background-image: url('@/assets/people/denis.png');
  }
  .person .avatar .alina {
    background-image: url('@/assets/people/alina.jpg');
  }
  .person .avatar .elena {
    background-image: url('@/assets/people/elena.jpg');
  }
  .person .avatar .svetlana {
    background-image: url('@/assets/people/svetlana.jpg');
  }
  .person .avatar .irina {
    background-image: url('@/assets/people/irina.jpg');
  }

  @media (min-width: 1024px) {
    .about-items {
      width: 720px;
    }
  }
</style>

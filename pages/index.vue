<template>
  <div class="w-full max-w-4xl mx-auto py-10">
    <SelectedGameInfoSkeleton v-if="loading" />
    <swiper
      v-else
      ref="mainSwiper"
      :thumbs="{ swiper: thumbsSwiper }"
      v-bind="slideOptions"
      @slideChange="onSlideChange"
      class="mb-4"
    >
      <swiper-slide v-for="(game, index) in gameList" :key="'main-' + index">
        <SelectedGameInfo
          :gameNo="index"
          :image="game.image"
          :title="game.title"
          :genre="game.genre"
          :tags="game.tags"
          :price="game.price"
          @buyGame="openDialog"
        />
      </swiper-slide>
    </swiper>


    <ThumbSkeleton v-if="loading" />
    <div class="hidden md:block m-2" v-else>
      <swiper
        ref="thumbsSwiperRef"
        class="cursor-pointer"
        v-bind="thumbOptions"
        :modules="[FreeMode, Thumbs]"
        @swiper="setThumbsSwiper"
      >

        <swiper-slide
          v-for="(game, index) in gameList"
          :key="'thumb-' + index"
          class="opacity-50 [&.swiper-slide-thumb-active]:opacity-100"
        >
          <img :src="game.image" :alt="'Thumb ' + index" class="w-full h-24 object-cover rounded-lg" />
        </swiper-slide>

        <!-- Navigation buttons for thumbs swiper -->
        <div v-show="!loading">
          <div class="swiper-button-next md:block"></div>
          <div class="swiper-button-prev md:block"></div>
        </div>
      </swiper>
    </div>
  </div>
  <DialogsBuyGameDialog 
    title="Would you like to purchase this game?" 
    :is-open="isOpen" 
    :game-info="gameList?.[mainSwiper?.value?.swiper?.realIndex ?? 0] ?? {}"
    :use-dimmid="true"
    @close="isOpen = !isOpen" 
    @confirm="isOpen = !isOpen" 
  />
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, FreeMode, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const { $api } = useNuxtApp();

import SelectedGameInfo from '../components/game-info/SelectedGameInfo.vue';
import SelectedGameInfoSkeleton from '../components/skeletons/SelectedGameInfoSkeleton.vue';
import ThumbSkeleton from '../components/skeletons/ThumbSkeleton.vue';


import type { SwiperOptions } from 'swiper/types'

const { data, pending, error: fetchError } = await $api.games.getListGame({
  server: false,
  lazy: true
});

if (fetchError.value) throw fetchError.value

const loading = computed(() => pending.value);
const gameList = computed(() => data.value?.data || []);

const isOpen = ref(false)

const openDialog = () => isOpen.value = true;

const slideOptions: SwiperOptions = {
  modules: [Thumbs, Autoplay, Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  allowTouchMove: false,
  speed: 1,
}

const thumbOptions: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 25,
  watchSlidesProgress: true,
  loop: true,
}

const thumbsSwiper = ref<any>(null);

const setThumbsSwiper = (swiperInstance: any) => {
  thumbsSwiper.value = swiperInstance
}

const mainSwiper = ref<any>(null)

const onSlideChange = () => {
  const main = mainSwiper.value?.swiper
  const thumbs = thumbsSwiper.value

  if (main && thumbs) {
    // Get the current real index of the main swiper
    const realIndex = main.realIndex

    // The number of slides in the thumbs swiper
    const slidesPerView = 3

    // Calculate the index of the thumbnail that should be active
    const targetThumbIndex = Math.floor(realIndex / slidesPerView) * slidesPerView

    // Slide to the corresponding position in the thumbs swiper
    thumbs.slideTo(targetThumbIndex)
  }
}

// Ensure thumbs swiper is initialized on mounted
onMounted(async () => {
  if (thumbsSwiper.value) {
    const thumbsSwiperInstance = thumbsSwiper.value?.swiper
    if (thumbsSwiperInstance) {
      // Enable navigation for the thumbs swiper
      thumbsSwiperInstance.navigation.update()
    }
  }
})
</script>

<style scoped>
</style>

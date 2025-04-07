<template>
  <div class="w-full max-w-4xl mx-auto py-10">
    <swiper
      ref="mainSwiper"
      :modules="[Thumbs, Autoplay]"
      :thumbs="{ swiper: thumbsSwiper }"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      class="mb-4"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="'main-' + index">
        <img :src="slide.image" :alt="'Slide ' + index" class="w-full h-64 object-cover rounded-xl" />
      </swiper-slide>
    </swiper>

    <swiper
      ref="thumbsSwiperRef"
      :modules="[FreeMode, Thumbs]"
      @swiper="setThumbsSwiper"
      :slides-per-view="3"
      :space-between="10"
      :watch-slides-progress="true"
      :loop="true"
      class="cursor-pointer"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="'thumb-' + index">
        <img :src="slide.image" :alt="'Thumb ' + index" class="w-full h-24 object-cover rounded-lg" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/autoplay'

const slides = [
  { image: 'https://picsum.photos/id/1011/800/400' },
  { image: 'https://picsum.photos/id/1015/800/400' },
  { image: 'https://picsum.photos/id/1016/800/400' },
  { image: 'https://picsum.photos/id/1021/800/400' },
  { image: 'https://picsum.photos/id/1024/800/400' },
]

const thumbsSwiper = ref<any>(null)
const setThumbsSwiper = (swiperInstance: any) => {
  thumbsSwiper.value = swiperInstance
}
</script>

<style scoped>
.swiper-slide-thumb-active {
  border: 2px solid #3b82f6;
  border-radius: 0.5rem;
}
</style>

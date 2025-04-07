<template>
  <div class="w-full max-w-4xl mx-auto py-10">
    <swiper
      ref="mainSwiper"
      :modules="[Thumbs, Autoplay]"
      :thumbs="{ swiper: thumbsSwiper }"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :allow-touch-move="false"
      @slideChange="onSlideChange"
      class="mb-4"
    >
      <swiper-slide v-for="(game, index) in gameList" :key="'main-' + index">
        <div class="flex gap-10">
          <div class="w-2/3">
            <img :src="game.image" :alt="'Slide ' + index" class="w-full h-64 object-cover rounded-xl" />
          </div>
          <div class="game-info w-1/3">
            <div class="game-title text-2xl font-semibold">{{ game.title }} - {{ index + 1 }}</div>
            <div class="game-genre text-lg mt-2">
              Genre | {{ game.genre }}
            </div>
            <div class="game-tag mt-2">
              <div class="game-tag__item text-sm inline-block py-1 px-3 bg-gray-200 rounded-full m-1" v-for="tag in game.tags" :key="'tag-' + tag">{{ tag }}</div>
            </div>
            <div class="game-price__group flex gap-4 mt-2">
              <div class="game-price__origin text-lg line-through">{{ game.price }}</div> =>
              <div class="game-price__sale text-lg font-bold text-red-500">FREE</div>
            </div>
            <div class="game-buy mt-4">
              <button class="game-buy__button bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Buy Now</button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <swiper
      ref="thumbsSwiperRef"
      :modules="[FreeMode, Thumbs, Navigation]"
      @swiper="setThumbsSwiper"
      :slides-per-view="3"
      :space-between="10"
      :watch-slides-progress="true"
      :loop="true"
      class="cursor-pointer"
    >
      <swiper-slide v-for="(game, index) in gameList" :key="'thumb-' + index">
        <img :src="game.image" :alt="'Thumb ' + index" class="w-full h-24 object-cover rounded-lg" />
      </swiper-slide>

      <!-- Navigation buttons for thumbs swiper -->
      <div class="swiper-button-next md:block md:hidden"></div>
      <div class="swiper-button-prev md:block md:hidden"></div>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs, FreeMode, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const gameList = [
  {
    title: 'Game Defender',
    image: 'https://picsum.photos/id/1011/800/400',
    genre: 'Action, Fiction',
    price: 'W 1000',
    tags: ['Action', 'Game', 'Adventure'],
    gameNo: 1,
    isReceive: false,
  },
  {
    title: 'Game Defender',
    image: 'https://picsum.photos/id/1012/800/400',
    genre: 'Action, Fiction',
    price: 'W 1000',
    tags: ['Action', 'Game', 'Adventure'],
    gameNo: 1,
    isReceive: false,
  },
  {
    title: 'Game Defender',
    image: 'https://picsum.photos/id/1013/800/400',
    genre: 'Action, Fiction',
    price: 'W 1000',
    tags: ['Action', 'Game', 'Adventure'],
    gameNo: 1,
    isReceive: false,
  },
  {
    title: 'Game Defender',
    image: 'https://picsum.photos/id/1014/800/400',
    genre: 'Action, Fiction',
    price: 'W 1000',
    tags: ['Action', 'Game', 'Adventure'],
    gameNo: 1,
    isReceive: false,
  },
  {
    title: 'Game Defender',
    image: 'https://picsum.photos/id/1015/800/400',
    genre: 'Action, Fiction',
    price: 'W 1000',
    tags: ['Action', 'Game', 'Adventure'],
    gameNo: 1,
    isReceive: false,
  },
  {
    title: 'Game Defender',
    image: 'https://picsum.photos/id/1016/800/400',
    genre: 'Action, Fiction',
    price: 'W 1000',
    tags: ['Action', 'Game', 'Adventure'],
    gameNo: 1,
    isReceive: false,
  }
]

const thumbsSwiper = ref<any>(null)
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
onMounted(() => {
  const thumbsSwiperInstance = thumbsSwiper.value.swiper
  if (thumbsSwiperInstance) {
    // Enable navigation for the thumbs swiper
    thumbsSwiperInstance.navigation.update()
  }
})
</script>

<style scoped>
.swiper-slide-thumb-active {
  border: 2px solid #3b82f6;
  border-radius: 0.5rem;
}
</style>

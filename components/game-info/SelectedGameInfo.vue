<template>
  <div class="block md:flex gap-10 m-2">
    <div class="w-full md:w-2/3 mb-2 md:mb-0">
      <img :src="image" alt="Slide" class="w-full h-64 object-cover rounded-xl" />
    </div>
    <div class="game-info w-full md:w-1/3 flex justify-between flex-col">
      <div>
        <div class="game-title text-2xl font-semibold">{{ title }}</div>
        <div class="game-genre text-lg mt-2">
          Genre | {{ genre }}
        </div>
        <div class="game-tag mt-2">
          <div class="game-tag__item text-sm inline-block py-1 px-3 bg-gray-200 rounded-full mr-1" v-for="tag in tags" :key="'tag-' + tag">#{{ tag }}</div>
        </div>
      </div>
      <div>
        <div class="game-price__group flex gap-4 mt-2">
          <div class="game-price__origin text-lg line-through">₩ {{ price }}</div>&#8594;
          <div class="game-price__sale text-lg font-bold text-red-500">FREE</div>
        </div>
        <div class="game-buy mt-4">
          <button @click="onClickBuyGame" class="game-buy__button w-full rounded-sm bg-orange-600 text-white px-6 py-2 hover:bg-orange-700">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  gameNo: number,
  title: string,
  image: string,
  genre: string,
  tags: string[],
  price: string
}>()

const emit = defineEmits<{
  (e: 'buyGame'): void
}>()

const onClickBuyGame = () => {
  emit('buyGame');
}
</script>
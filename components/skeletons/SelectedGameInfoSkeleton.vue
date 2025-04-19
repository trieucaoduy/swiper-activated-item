<template>
  <div class="block md:flex gap-10 m-2">
    <div class="w-full md:w-2/3 mb-2 md:mb-">
      <div alt="Slide" class="bg-gray-200 w-full h-64 object-cover rounded-xl animate-pulse" />
    </div>
    <div class="game-info w-full md:w-1/3 flex justify-between flex-col">
      <div>
        <div class="game-title text-2xl font-semibold bg-gray-200 h-[32px] animate-pulse "></div>
        <div class="game-genre text-lg mt-2 bg-gray-200 h-[28px] animate-pulse ">
        </div>
        <div class="game-tag mt-2">
          <div class="game-tag__item text-sm inline-block py-1 px-3 rounded-full mr-1 bg-gray-200 h-[28px] w-[60px] animate-pulse "></div>
          <div class="game-tag__item text-sm inline-block py-1 px-3 rounded-full mr-1 bg-gray-200 h-[28px] w-[60px] animate-pulse "></div>
          <div class="game-tag__item text-sm inline-block py-1 px-3 rounded-full mr-1 bg-gray-200 h-[28px] w-[60px] animate-pulse "></div>
        </div>
      </div>
      <div>
        <div class="game-price__group flex gap-4 mt-2">
          <div class="game-price__origin text-lg line-through bg-gray-200 h-[20px] w-[100px] animate-pulse "></div>
          <div class="game-price__sale text-lg font-bold text-red-500 bg-gray-200 h-[20px] w-[100px] animate-pulse "></div>
        </div>
        <div class="game-buy mt-4">
          <button class="game-buy__button w-full rounded-sm text-white px-6 py-2 hover:bg-gray-200 bg-gray-200 h-[40px] animate-pulse "></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
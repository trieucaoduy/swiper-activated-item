<template>
  <div 
    class="fixed inset-0 bg-gray-500/50 bg-opacity-90 flex items-center justify-center z-50" 
    v-if="isOpen"
    @click.self="useDimmid ? $emit('close') : null"
  >
    <div class="bg-white rounded-lg p-8 max-w-md w-full">
      <div class="flex justify-between items-baseline mb-6">
        <h2 class="text-2xl font-bold text-center">{{ title }}</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex justify-center items-center gap-5 mb-6">
        <img :src="gameInfo.image" class="rounded w-[150px] h-[150px] object-cover">
        <div class="font-bold text-5xl">+</div>
        <img
          src="https://thumbs.dreamstime.com/b/gold-coins-bag-golden-coin-wealth-big-cash-sack-money-bonus-d-realistic-vector-illustration-treasure-chest-currency-game-141652609.jpg"
          class="rounded w-[150px] h-[150px] object-cover border-solid border-[1px] border-amber-600"
        >
      </div>

      <div class="flex justify-end gap-4">
        <button 
          @click="$emit('close')"
          class="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button 
          @click="$emit('confirm')"
          class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          Confirm Purchase
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  isOpen: boolean
  gameInfo: any
  useDimmid?: boolean
}>()

defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()
</script>

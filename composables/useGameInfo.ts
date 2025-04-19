interface Game {
  title: string
  image: string
  genre: string
  tags: string[]
  price: string
}

import { ref } from 'vue'

export const useGameInfo = () => {
  const { $api } = useNuxtApp()
  
  const gameList = ref<Game[]>([])
  const error = ref<Error | null>(null)
  const loading = ref(true)

  const fetchGames = async () => {
    try {
      const { data, pending, error: fetchError } = await $api.games.getListGame()

      loading.value = pending.value
      
      if (fetchError.value) {
        throw fetchError.value
      }
      
      gameList.value = data.value?.data || []

      console.log({ data, gameList: gameList.value });
    } catch (err) {
      error.value = err as Error
      console.error('Error fetching games:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    gameList,
    error,
    loading,
    fetchGames
  }
}
import { $fetch, type FetchOptions } from "ofetch";
import GameModule from "~/repository/modules/games";

interface IApiInstance {
  games: GameModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: process.env.NODE_ENV === 'development' ? config.public.apiBaseUrlDev : config.public.apiBaseUrl
  }
  
  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    games: new GameModule(apiFetcher)
  }

  return {
    provide: {
      api: modules
    }
  }
})


import type { FetchOptions } from 'ofetch';
import type { AsyncDataOptions } from '#app';
import FetchFactory, { HTTP_OPTION } from '../factory';

interface IApiResponse<T> {
  status: number,
  data: T
}

interface IGameReponse {
  title: string
  image: string
  genre: string
  tags: string[]
  price: string
}

class GameModule extends FetchFactory<IApiResponse<IGameReponse[]>> {
  private resource = '/games'

  async getListGame(
    asyncDataOptions?: AsyncDataOptions<IApiResponse<IGameReponse[]>>
  ) {
    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          // headers: {
          //   'Content-Type': 'application/json'
          // }
        };
        return this.call(
          HTTP_OPTION.GET,
          `${this.resource}`,
          undefined,
          fetchOptions,
        )
      },
      asyncDataOptions
    )

    // return $fetch<IApiResponse<IGameReponse[]>>(this.resource, {
    //   method: HTTP_OPTION.GET,
    //   body: undefined,
    // })
  }
}

export default GameModule;
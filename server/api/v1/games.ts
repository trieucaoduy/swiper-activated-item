import gameInfo from '../../../openAPI/gameInfo.json'

export default defineEventHandler((event) => {
  return {
    data: gameInfo
  }
})
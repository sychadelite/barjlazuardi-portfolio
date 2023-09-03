export default defineNuxtPlugin((nuxtApp) => {
  const convertToCamelCase = (str: string) => {
    var words = str.split('-')
    var capitalizedWords = words.map(function (word: string) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return capitalizedWords.join('')
  }

  return {
    provide: {
      convertToCamelCase: (str: string) => convertToCamelCase(str),
    }
  }
})
export default defineNuxtPlugin(() => {
  const convertToCamelCase = (str: string) => {
    const words = str.split('-')
    const capitalizedWords = words.map(function (word: string) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return capitalizedWords.join('')
  }

  return {
    provide: {
      convertToCamelCase: (str: string) => convertToCamelCase(str)
    }
  }
})
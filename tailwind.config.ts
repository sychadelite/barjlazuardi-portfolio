import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {}
      }
    },
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1792px',
      // => @media (min-width: 1792px) { ... }

      '4xl': '2048px',
      // => @media (min-width: 2048px) { ... }

      '5xl': '2304px',
      // => @media (min-width: 2304px) { ... }

      '6xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    }
  }
}
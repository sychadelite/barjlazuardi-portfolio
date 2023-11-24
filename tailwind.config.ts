import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './node_modules/@flavorly/vanilla-components/dist/presets/tailwind/all.json', 
  ],
  theme: {
    extend: {
      colors: {
        black: '#030303',
        white: '#FFFFFF',
        primary: {
          '50': '#f2f7fb',
          '100': '#e7f0f8',
          '200': '#d3e2f2',
          '300': '#b9cfe8',
          '400': '#9cb6dd',
          '500': '#839dd1',
          '600': '#6a7fc1',
          '700': '#6374ae',
          '800': '#4a5989',
          '900': '#414e6e',
          '950': '#262c40',
        },
        secondary: {
          '50': '#fbf6f5',
          '100': '#f6ecea',
          '200': '#f0dcd8',
          '300': '#e4c3bd',
          '400': '#d3a096',
          '500': '#ba7264',
          '600': '#aa6558',
          '700': '#8e5347',
          '800': '#77463d',
          '900': '#643f38',
          '950': '#351e1a',
        },
        'waikawa-gray': {
          '50': '#f2f7fb',
          '100': '#e7f0f8',
          '200': '#d3e2f2',
          '300': '#b9cfe8',
          '400': '#9cb6dd',
          '500': '#839dd1',
          '600': '#6a7fc1',
          '700': '#6374ae',
          '800': '#4a5989',
          '900': '#414e6e',
          '950': '#262c40',
        },
        'contessa': {
          '50': '#fbf6f5',
          '100': '#f6ecea',
          '200': '#f0dcd8',
          '300': '#e4c3bd',
          '400': '#d3a096',
          '500': '#ba7264',
          '600': '#aa6558',
          '700': '#8e5347',
          '800': '#77463d',
          '900': '#643f38',
          '950': '#351e1a',
        },      
      }
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1792px',
      '4xl': '2048px',
      '5xl': '2304px',
      '6xl': '2560px'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),

    // Forms plugin is required if you are using the tailwind preset
    require('@tailwindcss/forms'), 
  ],
}
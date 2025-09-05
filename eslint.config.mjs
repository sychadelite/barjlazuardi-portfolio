// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      semi: [
        'warn',
        'never'
      ],
      quotes: [
        'warn',
        'single'
      ],
      'comma-dangle': [
        'warn',
        'never'
      ],
      'vue/multi-word-component-names': 'off', // <- allow single-word components
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all', // Check all variables
          varsIgnorePattern: 'Types', // Ignore variables with 'Types' in their name
          args: 'after-used', // Check arguments only if they are used
          argsIgnorePattern: '^_', // Ignore arguments starting with an underscore
          ignoreRestSiblings: true // Ignore rest siblings in destructuring
        }
      ],
      '@typescript-eslint/no-this-alias': [
        'off', // or 'warn' if you want a warning
        {
          allowDestructuring: true, // allow `const { props } = this`
          allowedNames: ['self', 'that', 'vm'] // allow aliasing this to these names
        }
      ]
    }
  }
)

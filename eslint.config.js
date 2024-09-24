import antfu from '@antfu/eslint-config'

export default await antfu({
  overrides: { vue: { 'vue/attributes-order': 'off' } },
  rules: {
    'import/order': 'off',
    'perfectionist/sort-array-includes': 'error',
    'perfectionist/sort-astro-attributes': 'error',
    'perfectionist/sort-classes': 'error',
    'perfectionist/sort-enums': 'error',
    'perfectionist/sort-exports': 'error',
    'perfectionist/sort-imports': 'error',
    'perfectionist/sort-interfaces': 'error',
    'perfectionist/sort-maps': 'error',
    'perfectionist/sort-named-exports': 'error',
    'perfectionist/sort-named-imports': 'error',
    'perfectionist/sort-object-types': 'error',
    'perfectionist/sort-objects': 'error',
    'perfectionist/sort-union-types': 'error',
    'perfectionist/sort-vue-attributes': ['error', {
      'custom-groups': { atCallback: '@*', onCallback: ':on*', vDirective: 'v-*', vSpecialAttribute: ':{is,key,ref}=*' },
      'groups': ['vDirective', 'vSpecialAttribute', 'unknown', 'onCallback', 'atCallback'],
    }],
    'sort-imports': 'off',
  },
})

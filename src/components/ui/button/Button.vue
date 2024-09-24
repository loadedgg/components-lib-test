<script setup lang="ts">
import { buttonVariants, type ButtonVariants } from '.'
import { cn } from '@/lib/utils'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { BoxContent, BoxRoot, BoxTitle } from '@/components'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="home dark">
    <BoxRoot>
      <BoxTitle>Title</BoxTitle>
      <BoxContent>
        <div>Content</div>
        <Button variant="destructive">
          Click me!
        </Button>
      </BoxContent>
    </BoxRoot>
  </div>
</template>

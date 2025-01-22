<template>
  <div class="relative">
    <NuxtImg :src="`landing/${image}.jpg`" :alt="image" />
    <UContainer class="flex flex-col justify-center items-start absolute inset-0">
      <h6 v-if="days" class="font-extralight capitalize italic tracking-widest leading-3">{{ days }}</h6>
      <h1 class="font-bold uppercase">{{ title }}</h1>
      <h5 class="font-extralight capitalize italic tracking-wider">{{ subtitle }}</h5>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  days: { type: String, required: false },
})
</script>
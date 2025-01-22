<template>
  <div class="relative">
    <NuxtImg :src="`landing/${image}.jpg`" :alt="image" />
    <UContainer class="flex flex-col justify-center items-start absolute inset-0">
      <h6 v-if="days"
        class="font-extralight capitalize italic tracking-widest leading-2 md:leading-4 xl:leading-5">{{
        days }}</h6>
      <h1 class="font-bold uppercase leading-6 md:leading-10 lg:leading-13 xl:leading-16">{{ title }}</h1>
      <h5 class="font-extralight capitalize italic tracking-wider leading-4 md:leading-6 lg:leading-8 xl:leading-10">{{ subtitle }}</h5>
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
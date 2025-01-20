<template>
  <div class="relative">
    <NuxtImg :src="`landing/${image}.jpg`" :alt="image" />
    <UContainer class="flex flex-col justify-center items-start absolute inset-0">
      <h1>{{ title }}</h1>
      <h5>{{ subtitle }}.</h5>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
})
</script>

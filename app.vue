<script lang="ts" setup>
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n();
</script>

<template>
  <UApp :locale="locales[locale]">
    <NavHeader />
    <NuxtPage keepalive />
    <NavFooter />
  </UApp>
</template>

<style>
@import "tailwindcss/theme" theme(reference);

h1 {
  @apply text-2xl md:text-4xl lg:text-5xl xl:text-7xl;
}

h2 {
  @apply text-xl md:text-3xl lg:text-4xl xl:text-6xl;
}

h3 {
  @apply text-lg md:text-2xl lg:text-3xl xl:text-5xl;
}

h4 {
  @apply text-base md:text-xl lg:text-2xl xl:text-4xl;
}

h5 {
  @apply text-sm md:text-lg lg:text-xl xl:text-3xl;
}

h6 {
  @apply text-xs md:text-base lg:text-lg xl:text-2xl;
}

p {
  @apply text-base lg:text-lg xl:text-xl;
}

.u-button {
  @apply text-white font-medium m-1 py-2.5 px-4 md:mx-5 lg:px-6 xl:px-7 capitalize;
}

.u-my-sm {
  @apply my-0.5 md:my-1 lg:my-1.5 xl:my-2;
}

.u-my-md {
  @apply my-1 md:my-2 lg:my-3 xl:my-4;
}

.u-my-lg {
  @apply my-2 md:my-4 lg:my-6 xl:my-8;
}

.u-my-xl {
  @apply my-3 md:my-6 lg:my-9 xl:my-12;
}

.u-py-sm {
  @apply py-0.5 md:py-1 lg:py-1.5 xl:py-2;
}

.u-py-md {
  @apply py-1 md:py-2 lg:py-3 xl:py-4;
}

.u-py-lg {
  @apply py-2 md:py-4 lg:py-6 xl:py-8;
}

.u-py-xl {
  @apply py-3 md:py-6 lg:py-9 xl:py-12;
}
</style>

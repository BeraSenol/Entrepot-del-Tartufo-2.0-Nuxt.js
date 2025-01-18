<template>
  <div class="w-screen backdrop-blur-xl z-50">
    <UContainer class="flex justify-between items-center">
      <UButton v-for="route in routes" :key="route.label" :label="route.label" :to="route.to" :icon="route.icon"
        class="text-xl font-extrabold uppercase flex justify-center items-center my-4" variant="ghost" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const routes = ref([
  { label: 'home', to: '/', icon: 'i-line-md:home-simple-twotone' },
  { label: 'menu', to: '/menu', icon: 'i-hugeicons:menu-restaurant' },
  { label: 'info', to: '/info', icon: 'i-ph:info-duotone' },
  { label: 'contact', to: '/contact', icon: 'i-mdi:contact' },
  { label: 'parmigiano@casa', to: '/parmigiano', icon: 'i-tdesign:cheese' }
])
</script>
<template>
  <USlideover class="max-h-screen">
    <UButton class="text-white" icon="i-heroicons-outline:menu" variant="ghost"/>
    <template #header>
      <UButton class="text-2xl font-extrabold uppercase tracking-wider text-white my-1" label="entrepot del
        tartufo" variant="ghost" />
    </template>
    <template #body>
      <div class="flex flex-col">
        <UButton v-for="route in routes" :key="route.label" :label="route.label" :to="route.to"
          class="text-xl font-semibold uppercase tracking-wide text-white my-1" variant="link" />
      </div>
    </template>
    <template #footer>
      <div class="flex justify-center w-full">
        <UButton v-for="social in socials" :key="social.label" :icon="social.icon" :to="social.to"
          class="text-2xl mx-2 font-extrabold uppercase tracking-wide text-white" variant="link" size="xl" />
      </div>
    </template>
  </USlideover>
</template>

<script lang="ts" setup>
const routes = ref([
  { label: 'home', to: '/', icon: 'i-line-md:home-simple-twotone' },
  { label: 'menu', to: '/menu', icon: 'i-hugeicons:menu-restaurant' },
  { label: 'info', to: '/info', icon: 'i-ph:info-duotone' },
  { label: 'contact', to: '/contact', icon: 'i-mdi:contact' },
  { label: 'parmigiano@casa', to: '/parmigiano', icon: 'i-tdesign:cheese' }
])

const socials = ref([
  { label: 'facebook', to: '', icon: 'i-uil:facebook' },
  { label: 'instagram', to: '', icon: 'i-akar-icons:instagram-fill' },
])
</script>

<style></style>
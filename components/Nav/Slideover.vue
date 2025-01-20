<template>
  <USlideover v-model:open="isOpen" class="max-h-screen" close-icon="i-lucide-arrow-right">
    <UButton class="py-1 md:scale-110 lg:scale-125 xl:scale-150" icon="i-heroicons-outline:menu" variant="soft" />

    <template #header>
      <div class="flex justify-between py-0">
        <UButton class="text-white text-xl pr-0 md:text-2xl font-extrabold uppercase tracking-wide" label="entrepot del
        tartufo" to="/" variant="link" />
        <UButton class="text-white px-1 md:scale-110 lg:scale-125" icon="i-material-symbols:close-rounded"
          variant="link" @click="close()" />
      </div>
    </template>

    <template #body>
      <div class="flex flex-col">
        <UButton v-for="route in routes" :key="route.label" :to="route.to"
          class="text-white font-extrabold uppercase py-0.5" variant="link" @click="close()">
          <p>{{ route.label }}</p>
        </UButton>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-center w-full">
        <UButton v-for="social in socials" :key="social.label" :icon="social.icon" :to="social.to"
          class="text-white mx-1" variant="ghost" size="xl" target="_blank"></UButton>
      </div>
    </template>

  </USlideover>
</template>

<script lang="ts" setup>
const isOpen = ref(false);
const close = () => isOpen.value = !isOpen.value;

const routes = ref([
  { label: 'home', to: '/' },
  { label: 'menu', to: '/menu' },
  { label: 'info', to: '/info' },
  { label: 'contact', to: '/contact' },
  { label: 'parmigiano@casa', to: '/parmigiano' }
])

const socials = ref([
  { label: 'facebook', to: 'https://www.facebook.com/entrepotdeltartufo/', icon: 'i-uil:facebook' },
  { label: 'instagram', to: 'https://www.instagram.com/entrepotdeltartufo/', icon: 'i-akar-icons:instagram-fill' },
  { label: 'linked in', to: 'https://www.linkedin.com/company/entrepot-del-tartufo', icon: 'i-uil:linkedin' }
])
</script>

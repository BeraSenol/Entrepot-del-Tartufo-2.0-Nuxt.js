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
      <div class="flex flex-col gap-y-1 lg:gap-y-1.5 xl:gap-y-2">
        <UButton v-for="page in pages" :key="page.label" :to="page.to" class="text-white font-extrabold uppercase"
          variant="link" @click="close()">
          <p>{{ page.label }}</p>
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

const pages = usePages();
const socials = useSocials();
</script>

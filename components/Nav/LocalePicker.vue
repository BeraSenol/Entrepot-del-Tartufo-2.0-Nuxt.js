<template>
  <UPopover v-model:open="isOpen">
    <UButton class="uppercase" :label="locale" variant="soft" />
    <template #content>
      <div class="flex flex-col p-0.5 md:p-1.5 lg:p-2.5 space-y-1 md:space-y-2 lg:space-y-3">
        <UButton class="scale-90 md:scale-110 lg:scale-125" variant="subtle" @click="setLocale('en'); isOpen = false">EN</UButton>
        <UButton class="scale-90 md:scale-110 lg:scale-125" variant="subtle" @click="setLocale('nl'); isOpen = false">NL</UButton>
      </div>
    </template>
  </UPopover>
</template>

<script lang="ts" setup>
const { setLocale, locale } = useI18n();
const isOpen = ref(false);
</script>

<template>
  <UPopover v-model:open="open">
    <UButton class="uppercase" :label="locale" variant="subtle" />
    <template #content>
      <div class="flex flex-col p-2 space-y-2">
        <UButton variant="subtle" @click="setLocale('en'); open = false">EN</UButton>
        <UButton variant="subtle" @click="setLocale('nl'); open = false">NL</UButton>
      </div>
    </template>
  </UPopover>
</template>

<script lang="ts" setup>
const { setLocale, locale } = useI18n();
const open = ref(false);
</script>

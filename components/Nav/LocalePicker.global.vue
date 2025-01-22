<template>
  <UPopover v-model:open="isOpen">
    <UTooltip :text="$t('tooltip.choose_lang')">
      <UButton class="px-2.75 uppercase" :label="locale" variant="soft" @click="isOpen = !isOpen" size="xl"/>
    </UTooltip>
    <template #content>
      <div class="flex flex-col p-1.5 md:p-2 space-y-2 md:space-y-2.5">
        <UTooltip :text="$t('tooltip.choose_en')">
          <UButton variant="subtle" @click="setLocale('en'); isOpen = false" size="xl">
            EN
          </UButton>
        </UTooltip>
        <UTooltip :text="$t('tooltip.choose_nl')">
          <UButton variant="subtle" @click="setLocale('nl'); isOpen = false" size="xl">
            NL
          </UButton>
        </UTooltip>
      </div>
    </template>
  </UPopover>
</template>

<script lang="ts" setup>
const { setLocale, locale } = useI18n();
const isOpen = ref(false);
</script>

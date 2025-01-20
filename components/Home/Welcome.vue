<template>
  <UContainer class="flex flex-col items-center justify-center mb-6 lg:mb-9 xl:mb-12">
    <TruffleTitled class="my-4 md:my-6 lg:my-8 xl:my-10" />
    <p class="text-center mb-6 lg:mb-8 xl:mb-10">{{ $t('index.welcome') }}</p>
    <UButton class="u-button" to="/info" variant="soft" size="xl"
      trailing-icon="i-duo-icons:info">
      <p>{{ $t('index.info_button') }}</p>
    </UButton>
  </UContainer>
</template>

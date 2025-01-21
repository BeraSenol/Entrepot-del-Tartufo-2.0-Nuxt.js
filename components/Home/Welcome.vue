<template>
  <UContainer class="flex flex-col items-center justify-center w-full u-my-xl">
    <TruffleTitled />
    <p class="text-center capitalize u-my-xl">{{ $t('index.welcome') }}</p>
    <UButton class="u-button" to="/info" variant="soft" size="xl"
      trailing-icon="i-duo-icons:info">
      <p>{{ $t('index.info_button') }}</p>
    </UButton>
  </UContainer>
</template>

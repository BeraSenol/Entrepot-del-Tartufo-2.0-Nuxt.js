<template>
  <UContainer class="flex flex-col items-center justify-center w-full my-8 md:my-10 lg:my-12 xl:my-14">
    <TruffleTitled class="scale-125 md:scale-110 lg:scale-100" />
    <p class="text-left capitalize my-8 md:my-10 lg:my-12 xl:my-14 max-w-xs md:max-w-7xl">{{ $t('index.welcome') }}</p>
    <UButton class="u-button" to="/info" variant="soft" size="xl" trailing-icon="i-duo-icons:info">
      <p>{{ $t('index.info_button') }}</p>
    </UButton>
  </UContainer>
</template>

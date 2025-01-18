<template>
  <UContainer class="flex flex-col items-center justify-center mb-2 md:mb-4 lg:mb-6 xl:mb-8">
    <TruffleTitled class="my-4 md:my-6 lg:my-8 xl:my-10" />
    <p class="md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 xl:mb-10">
      {{ $t('index.welcome') }}
    </p>
    <UButton class="text-white text-sm md:text-base my-2 lg:text-lg px-4" to="/info" variant="ghost" size="xl" trailing-icon="i-duo-icons:info">Meer Info</UButton>
  </UContainer>
</template>

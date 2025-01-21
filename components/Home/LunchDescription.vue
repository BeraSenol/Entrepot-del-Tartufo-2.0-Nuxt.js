<template>
  <UContainer class="flex flex-col items-center justify-center w-full u-my-xl">
    <h2>{{ $t('lunch.description') }}</h2>
    <div class="grid grid-cols-2 w-full max-w-xs lg:max-w-xl xl:max-w-xl gap-0 font-light italic u-my-xl">
      <p class="capitalize">{{ $t('lunch.two_courses') }}</p>
      <p class="text-right">{{ $t('lunch.two_courses_price') }}</p>
      <p class="capitalize">{{ $t('lunch.three_courses') }}</p>
      <p class="text-right">{{ $t('lunch.three_courses_price') }}</p>
    </div>
    <div class="flex flex-col mb-3 md:mb-6 lg:mb-9 xl:mb-12;">
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">{{ $t('index.reservation_button') }}</p>
      </UButton>
      <USeparator class="uppercase u-my-sm">{{ $t('general.seperator_or') }}</USeparator>
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">{{ $t('index.dinner_button') }}</p>
      </UButton>
    </div>
    <p class="!text-xs lg:!text-base text-center capitalize italic font-light">{{ $t('lunch.disclaimer') }}</p>
  </UContainer>
</template>
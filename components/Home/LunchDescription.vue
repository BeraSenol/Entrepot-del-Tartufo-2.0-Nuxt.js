<template>
  <UContainer class="flex flex-col items-center justify-center w-full my-6 lg:my-9 xl:my-12">
    <h2 class="my-6 lg:my-8 xl:my-10">{{ $t('index.lunch.description') }}</h2>
    <div class="grid grid-cols-2 italic w-full max-w-md lg:max-w-lg xl:max-w-2xl gap-0 font-light px-2">
      <p class="capitalize">{{ $t('index.lunch.two_courses') }}</p>
      <p class="text-right">{{ $t('index.lunch.two_courses_price') }}</p>
      <p class="capitalize">{{ $t('index.lunch.three_courses') }}</p>
      <p class="text-right">{{ $t('index.lunch.three_courses_price') }}</p>
    </div>
    <div class="flex flex-col my-4 lg:my-6 xl:my-8">
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">{{ $t('index.reservation_button') }}</p>
      </UButton>
      <USeparator class="my-1 lg:my-2 xl:my-3 uppercase">{{ $t('general.seperator.or') }}</USeparator>
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">{{ $t('index.dinner_button') }}</p>
      </UButton>
    </div>
    <p class="!text-xs lg:!text-base text-center px-2 !leading-4 capitalize italic font-light">{{ $t('index.lunch.disclaimer') }}</p>
  </UContainer>
</template>
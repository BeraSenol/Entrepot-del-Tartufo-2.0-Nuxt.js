<template>
  <div class="relative">
    <NuxtImg src="landing/1.jpg" alt="1" />
    <UContainer class="flex flex-col justify-center items-start absolute inset-0">
      <h1
        class="text-xl md:text-4xl lg:text-5xl xl:text-7xl leading-5 md:leading-9 lg:leading-12 xl:leading-20 font-semibold uppercase">
        {{ $t('index.title') }}
      </h1>
      <h2 class="md:text-xl lg:text-2xl xl:text-3xl font-extralight italic capitalize">
        {{ $t('index.subtitle') }}.
      </h2>
    </UContainer>
  </div>
</template>


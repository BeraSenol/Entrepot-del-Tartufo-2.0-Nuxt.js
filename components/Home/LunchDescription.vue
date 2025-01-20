<template>
  <UContainer class="flex flex-col items-center justify-center w-full my-6 lg:my-9 xl:my-12">
    <h2 class="my-6 lg:my-8 xl:my-10">lunch experience</h2>
    <div class="grid grid-cols-2 italic w-full max-w-md lg:max-w-lg xl:max-w-2xl gap-0 font-light px-2">
      <p class="capitalize">twee gangen</p>
      <p class="text-right">€30</p>
      <p class="capitalize">drie gangen</p>
      <p class="text-right">€40</p>
    </div>
    <div class="flex flex-col my-4 lg:my-6 xl:my-8">
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">reserveer hier</p>
      </UButton>
      <USeparator class="my-1 lg:my-2 xl:my-3">OF</USeparator>
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">bekijk diner menu</p>
      </UButton>
    </div>
    <p class="!text-xs lg:!text-base text-center px-2 !leading-4 capitalize italic font-light">lunch kan dagelijks
      variëren en is afhankelijk van het
      markt aanbod</p>
  </UContainer>
</template>
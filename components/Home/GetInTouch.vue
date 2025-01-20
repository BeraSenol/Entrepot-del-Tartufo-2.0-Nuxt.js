<template>
  <UContainer class="flex flex-col items-center w-full mt-6 lg:mt-8 xl:mt-10">
    <h2>{{ $t('index.contact.get_in_touch') }}</h2>
    <p class="text-center my-3 md:my-4 lg:my-6 xl:my-8">{{ $t('index.contact.further_questions') }}</p>
    <div class="flex flex-col my-2 lg:my-3 xl:my-4">
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">{{ $t('index.contact.contact_button') }}</p>
      </UButton>
      <USeparator class="my-1 lg:my-2 xl:my-3">OF</USeparator>
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">{{ $t('index.contact.email_button') }}</p>
      </UButton>
    </div>
  </UContainer>
</template>
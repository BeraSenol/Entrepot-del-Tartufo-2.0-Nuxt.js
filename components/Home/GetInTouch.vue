<template>
  <UContainer class="flex flex-col items-center w-full u-my-xl">
    <h2>{{ $t('index.get_in_touch') }}</h2>
    <p class="text-center capitalize u-my-xl">{{ $t('index.further_questions') }}</p>
    <div class="flex flex-col">
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">{{ $t('index.contact_button') }}</p>
      </UButton>
      <USeparator class="u-my-sm">OF</USeparator>
      <UButton class="u-button" variant="soft" size="xl">
        <p class="text-center w-full">{{ $t('index.email_button') }}</p>
      </UButton>
    </div>
  </UContainer>
</template>
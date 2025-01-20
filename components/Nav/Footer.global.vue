<template>
  <div>
    <TruffleSeperator />
    <UContainer class="flex flex-col md:flex-row mb-2 md:mb-4 lg:mb-6 xl:mb-8">
      <div class="flex flex-col text-center basis-1/3 mb-8 lg:mb-0">
        <h2 class="md:!text-xl lg:!text-2xl xl:!text-3xl">{{ $t('general.restaurant.name') }}</h2>
        <p class="font-extralight mt-1.5 italic">{{ $t('general.restaurant.slogan') }}</p>
        <div class="my-2">
          <UTooltip v-for="social in socials" :text="social.label">
            <UButton :key="social.label" :icon="social.icon" :to="social.to"
            class="text-white mx-0.5" variant="ghost" size="xl" target="_blank" />
          </UTooltip>
        </div>
      </div>
      <div class="flex flex-col gap-y-1.5 text-center font-extralight basis-1/3 mb-8 md:mb-0">
        <NuxtLink to="/contact">
          <h2 class="md:!text-xl lg:!text-2xl xl:!text-3xl">contact</h2>
        </NuxtLink>
        <NuxtLink href="https://maps.app.goo.gl/i2vfzT5QpC8Rm1QT8" target="_blank">
          <p>Hemelrijk 22 / 3500 Hasselt</p>
        </NuxtLink>
        <NuxtLink href="tel:0472930869">
          <p>0472 93 08 69</p>
        </NuxtLink>
        <NuxtLink href="mailto:info@entrepotdeltartufo.com">
          <p>info@entrepotdeltartufo.com</p>
        </NuxtLink>
        <p>BTW: OD BV BE0734.961.476</p>
      </div>
      <div class="flex flex-col text-center basis-1/3 mb-8 lg:mb-0">
        <h2 class="md:!text-xl lg:!text-2xl xl:!text-3xl">openingsuren</h2>
        <div class="grid grid-cols-2 gap-x-10 gap-y-1.5 font-extralight tracking-wide mt-1.5 capitalize">
          <p class="text-right tracking-wide">{{ $t('general.date.lunch') }}</p>
          <p class="text-left">12h - 14h<br>18h - 22h</p>
          <p class="text-right tracking-wide">{{ $t('general.date.weekend') }}</p>
          <p class="text-left">18h - 22h</p>
          <p class="text-right tracking-wide">{{ $t('general.date.closed') }}</p>
          <p class="pl-1 text-left italic">{{ $t('footer.closed') }}</p>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const socials = useSocials();
</script>

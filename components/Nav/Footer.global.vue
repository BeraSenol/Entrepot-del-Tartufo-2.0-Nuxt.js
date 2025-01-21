<template>
  <div>
    <TruffleSeperator />
    <UContainer class="flex flex-col md:flex-row u-my-xl">
      <div class="flex flex-col text-center basis-1/3 mb-8 md:mb-0">
        <UButton class="text-white font-extrabold mx-auto uppercase py-0" to="/" variant="link">
          <h2 class="md:!text-xl lg:!text-2xl xl:!text-3xl ">{{ $t('general.restaurant_name') }}</h2>
        </UButton>
        <p class="font-extralight mt-1.5 italic capitalize">{{ $t('general.restaurant_slogan') }}</p>
        <div class="my-2">
          <UTooltip v-for="social in socials" :text="social.label">
            <UButton :key="social.label" :icon="social.icon" :to="social.to" class="text-white xl:scale-125 xl:mx-1.5"
              variant="ghost" size="xl" target="_blank" />
          </UTooltip>
        </div>
      </div>
      <div class="flex flex-col gap-y-1.5 text-center font-extralight basis-1/3 mb-8 md:mb-0">
        <UButton class="text-white font-extrabold mx-auto uppercase py-0" to="/contact" variant="link">
          <h2 class="md:!text-xl lg:!text-2xl xl:!text-3xl">{{ $t('pages.contact') }}</h2>
        </UButton>
        <UTooltip :text="$t('tooltip.footer_address')">
          <NuxtLink href="https://maps.app.goo.gl/2S2d9SCUbcEq5sST8" target="_blank">
            <p>Hemelrijk 22 / 3500 Hasselt</p>
          </NuxtLink>
        </UTooltip>
        <UTooltip :text="$t('tooltip.footer_phone')">
          <NuxtLink href="tel:0472930869">
            <p>+32/472 93 08 69</p>
          </NuxtLink>
        </UTooltip>
        <UTooltip :text="$t('tooltip.footer_email')">
          <NuxtLink href="mailto:info@entrepotdeltartufo.com">
            <p>info@entrepotdeltartufo.com</p>
          </NuxtLink>
        </UTooltip>
        <UTooltip :text="$t('tooltip.footer_vat')">
          <p>BTW: OD BV BE0734.961.476</p>
        </UTooltip>
      </div>
      <div class="flex flex-col text-center basis-1/3 mb-8 md:mb-0">
        <h2 class="md:!text-xl lg:!text-2xl xl:!text-3xl">{{ $t('footer.opening_hour') }}</h2>
        <div class="grid grid-cols-2 gap-x-10 gap-y-1.5 font-extralight tracking-wider mt-1.5 capitalize">
          <p class="text-right">{{ $t('general.lunch_date') }}</p>
          <p class="text-left italic">{{ $t('general.lunch_hour') }}<br>{{ $t('general.dinner_hour') }}</p>
          <p class="text-right">{{ $t('general.weekend_date') }}</p>
          <p class="text-left italic">{{ $t('general.lunch_hour') }}</p>
          <p class="text-right">{{ $t('general.closed_date') }}</p>
          <p class="pl-1 text-left italic">{{ $t('footer.closed') }}</p>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import { UTooltip } from '#components';

const socials = useSocials();
</script>

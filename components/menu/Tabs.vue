<template>
  <div class="flex flex-col justify-center items-center w-full">
    <p
      class="!text-sm md:!text-base lg:!text-lg capitalize font-extralight mt-3 md:mt-6 lg:mt-9 xl:mt-12 tracking-widest">
      {{ $t('general.dinner_date') }}
    </p>
    <USeparator>
      <h3 class="font-bold uppercase">dinner</h3>
    </USeparator>
    <p
      class="!text-lg md:!text-xl lg:!text-2xl capitalize font-extralight mb-3 md:mb-6 lg:mb-9 xl:mb-12 tracking-widest italic">
      {{ $t('general.dinner_hour') }}
    </p>
    <UContainer class="w-full flex">
      <UTabs :items="menus" class="w-full flex-col" orientation="vertical">
        <template #default="{ item }">
          <UContainer>
            <p class="uppercase">{{ item.label }}</p>
          </UContainer>
        </template>
        <template #content="{ item }">
          <UContainer class="bg-neutral-800 rounded-md u-py-md">
            <UContainer v-for="dish in item.dishes" class="grid grid-cols-8 tracking-wide items-start my-4 capitalize">
              <div class="col-span-7 block">
                <p class="font-bold inline">{{ dish.name }}</p>
                <div class="inline">
                  <UBadge v-if="dish.double" :class="dish.vegetarian ? 'rounded-s-full' : 'rounded-full'" class="ml-1.5"
                    color="info" icon="i-bi:people" variant="soft" :size="isWindowBellowMd ? 'sm' : 'md'" />
                  <UBadge v-if="dish.vegetarian" :class="dish.double ? 'rounded-e-full' : 'rounded-full ml-2'"
                    color="success" icon="i-ph:plant-duotone" variant="soft" :size="isWindowBellowMd ? 'sm' : 'md'" />
                  <UBadge v-if="dish.spicy" :class="dish.double ? 'rounded-e-full' : 'rounded-full ml-2'" color="error"
                    icon="i-ph:pepper-duotone" variant="soft" :size="isWindowBellowMd ? 'sm' : 'md'" />
                </div>
              </div>
              <p class="col-span-1 text-right font-light italic">{{ dish.price }}</p>
              <p class="col-span-7 font-light italic">{{ dish.description }}</p>
            </UContainer>
          </UContainer>
        </template>
      </UTabs>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

defineProps({
  menus: { type: Object as Record<string, any>, required: true, validator: ... }
})

const isWindowBellowMd = computed(() => useWindowSize().width.value < 640 ? true : false);
</script>

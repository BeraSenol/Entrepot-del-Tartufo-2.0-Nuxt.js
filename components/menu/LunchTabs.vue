<template>
  <div class="flex flex-col justify-center items-center w-full">
    <p class="!text-sm md:!text-base lg:!text-lg capitalize font-extralight mt-3 md:mt-6 lg:mt-9 xl:mt-12 tracking-widest">{{ $t('general.lunch_date') }}
    </p>
    <USeparator>
      <h3 class="font-bold uppercase">lunch</h3>
    </USeparator>
    <p class="!text-lg md:!text-xl lg:!text-2xl capitalize font-extralight mb-3 md:mb-6 lg:mb-9 xl:mb-12 tracking-widest italic">{{ $t('general.lunch_hour') }}
    </p>
    <UContainer class="w-full">
      <UTabs :items="menus" class="w-full u-my-xl">
        <template #default="{ item }">
          <p class="uppercase">{{ item.label }}</p>
        </template>
        <template #content="{ item }">
          <UContainer class="text-center bg-neutral-800 rounded-md u-py-md">
            <h4 class="uppercase font-bold u-my-md">{{ item.label }}</h4>
            <UContainer v-for="dish in item.dishes"
              class="grid grid-cols-8 tracking-wide items-start my-4 capitalize">
              <p class="col-span-7 text-left font-bold">{{ dish.name }}</p>
              <p class="col-span-1 text-right font-light italic">{{ dish.price }}</p>
              <p class="col-span-7 text-left font-light italic">{{ dish.description }}</p>
            </UContainer>
          </UContainer>
        </template>
      </UTabs>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const menus = ref([
  {
    label: 'pesce',
    icon: 'i-ph:fish-simple-duotone',
    dishes: [
      {
        name: 'vitello tonnato',
        description: 'kalfsvlees | tonijnmayo',
        price: 18.5,
      },
      {
        name: 'carpaccio di manzo tartufo estivo',
        description: 'rundscarpaccio | zomer truffel',
        price: 29,
      }, {
        name: 'melanzane parmigiana',
        description: 'aubergine | tomatensaus | parmezaan',
        price: 17,
      }, {
        name: 'moscardini aglio olio peperoncini',
        description: 'octopusjes | look | olijfolie | pikant pepers',
        price: 19.5,
      },
    ]
  },
  {
    label: 'carne',
    icon: 'i-hugeicons:steak',
    dishes: [
      {
        name: 'gramigna modenese',
        description: 'gramigna pasta | venkelworst | mascarpone',
        price: 17,
      },
      {
        name: 'papardelle ragu vitello',
        description: 'papardelle pasta | kalfsragout',
        price: 23,
      }, {
        name: 'tagliolini | tartufo estivo',
        description: 'verse tagliolini pasta | zomer truffel',
        price: 18,
      }, {
        name: 'linguine nero di seppia seppioline',
        description: 'linguine pasta | inkt | inktvis',
        price: 21.5,
      },
    ]
  }
])
</script>i
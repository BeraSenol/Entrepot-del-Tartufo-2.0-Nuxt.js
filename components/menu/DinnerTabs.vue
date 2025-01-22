<template>
  <div class="flex flex-col justify-center items-center w-full">
    <p class="capitalize font-extralight mt-3 md:mt-6 lg:mt-9 xl:mt-12 tracking-widest">{{ $t('general.dinner_date') }}
    </p>
    <USeparator>
      <h3 class="font-bold uppercase">dinner</h3>
    </USeparator>
    <p class="capitalize font-extralight mb-3 md:mb-6 lg:mb-9 xl:mb-12 tracking-widest italic">{{
      $t('general.dinner_hour') }}
    </p>
    <UContainer class="w-full">
      <UTabs :items="menus" class="w-full">
        <template #default="{ item }">
          <p class="uppercase">{{ item.label }}</p>
        </template>
        <template #content="{ item }">
          <UContainer class="text-center bg-neutral-800 rounded-md u-py-md">
            <h6 class="uppercase font-bold">{{ item.label }}</h6>
            <UContainer v-for="dish in item.dishes"
              class="grid grid-cols-2 grid-rows-2 tracking-wide u-my-lg capitalize">
              <div class="inline-flex">
                <p class="text-left font-bold">{{ dish.name }}</p>
                <UBadge v-if="dish.double" :class="dish.vegetarian ? 'rounded-s-full' : 'rounded-full'" class="ml-2"
                  color="info" icon="i-bi:people" variant="soft" />
                <UBadge v-if="dish.vegetarian" :class="dish.double ? 'rounded-e-full' : 'rounded-full ml-2'"
                  color="success" icon="i-ph:plant-duotone" variant="soft" />
                <UBadge v-if="dish.spicy" :class="dish.double ? 'rounded-e-full' : 'rounded-full ml-2'" color="error"
                  icon="i-ph:pepper-duotone" variant="soft" />
              </div>
              <p class="text-right font-light italic">{{ dish.price }}</p>
              <p class="text-left font-light italic">{{ dish.description }}</p>
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
    label: 'anti pasti',
    icon: 'i-hugeicons:menu-restaurant',
    dishes: [
      {
        name: 'vitello tonnato',
        description: 'kalfsvlees | tonijnmayo',
        price: 18.5,
        vegetarian: true,
        double: true,
        spicy: false,
      },
      {
        name: 'carpaccio di manzo tartufo estivo',
        description: 'rundscarpaccio | zomer truffel',
        price: 29,
        vegetarian: false,
        double: false,
        spicy: false,
      },
      {
        name: 'melanzane parmigiana',
        description: 'aubergine | tomatensaus | parmezaan',
        price: 17,
        vegetarian: false,
        double: false,
        spicy: false,
      },
      {
        name: 'moscardini aglio olio peperoncini',
        description: 'octopusjes | look | olijfolie | pikant pepers',
        price: 19.5,
        vegetarian: false,
        double: false,
        spicy: true,
      },
    ]
  },
  {
    label: 'primi piatti',
    icon: 'i-material-symbols:dinner-dining-rounded',
    dishes: [
      {
        name: 'gramigna modenese',
        description: 'gramigna pasta | venkelworst | mascarpone',
        price: 17,
        vegetarian: false,
        double: false,
        spicy: false,
      },
      {
        name: 'papardelle ragu vitello',
        description: 'papardelle pasta | kalfsragout',
        price: 23,
        vegetarian: false,
        double: false,
        spicy: false,
      },
      {
        name: 'tagliolini | tartufo estivo',
        description: 'verse tagliolini pasta | zomer truffel',
        price: 18,
        vegetarian: true,
        double: false,
        spicy: false,
      },
      {
        name: 'linguine nero di seppia seppioline',
        description: 'linguine pasta | inkt | inktvis',
        price: 21.5,
        vegetarian: false,
        double: false,
        spicy: false,
      },
    ]
  },
  {
    label: 'secondi pesce',
    icon: 'i-ph:fish-simple-duotone',
    dishes: [
      {
        name: 'branzino ligure',
        description: 'zeebaars | puntpaprika | olijf | kapper',
        price: 20,
        vegetarian: false,
        double: true,
        spicy: false,
      },
      {
        name: 'orata soto sale',
        description: 'rundscarpaccio | zomer truffel',
        price: 26,
        vegetarian: false,
        double: true,
        spicy: false,
      },
      {
        name: 'rana pescatrice pepe verde',
        description: 'zeeduivel | groene peper',
        price: 22,
        vegetarian: false,
        double: false,
        spicy: false,
      },
      {
        name: 'pesce misto | griglia | salsa verde',
        description: 'mix gegrilde vis',
        price: 21.5,
        vegetarian: false,
        double: true,
        spicy: false,
      },
    ]
  },
  {
    label: 'secondi carne',
    icon: 'i-hugeicons:steak',
    dishes: [
      {
        name: 'tagliata toscana',
        description: 'kalfsvlees | tonijnmayo',
        price: 23.5,
        vegetarian: false,
        double: false,
        spicy: false,
      },
      {
        name: 'filetto di manzo rossini',
        description: 'rundsfillet | foie gras | truffel',
        price: 24,
        vegetarian: false,
        double: false,
        spicy: false,
      },
      {
        name: 'carree di agnello pesto',
        description: 'lamskroon | pesto',
        price: 27,
        vegetarian: false,
        double: false,
        spicy: false,
      },
      {
        name: 'saltimbocca romana',
        description: 'kalfslapje | parmaham | salie',
        price: 29.5,
        vegetarian: false,
        double: false,
        spicy: false,
      },
    ]
  }
])
</script>

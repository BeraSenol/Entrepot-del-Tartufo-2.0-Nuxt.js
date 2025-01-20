<template>
  <div>
    <TruffleSeperator />
    <UContainer class="flex flex-col md:flex-row">
      <div class="flex flex-col text-center basis-1/3 mb-8 lg:mb-0">
        <h2 class="md:!text-xl lg:!text-2xl xl:!text-3xl">entrepot del tartufo</h2>
        <p class="font-extralight mt-1.5 italic">italian food with a touch of truffle</p>
        <div class="my-2">
          <UButton v-for="social in socials" :key="social.label" :icon="social.icon" :to="social.to"
            class="text-white mx-0.5" variant="ghost" size="xl" target="_blank" />
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
        <div class="grid grid-cols-2 gap-x-10 gap-y-1.5 font-extralight tracking-wide mt-1.5">
          <p class="text-right tracking-wide">Ma / Do / Vr</p>
          <p class="text-left">12h - 14h<br>18h - 22h</p>
          <p class="text-right tracking-wide">Za / Zo</p>
          <p class="text-left">18h - 22h</p>
          <p class="text-right tracking-wide">Di / Wo</p>
          <p class="pl-0.5 text-left italic">Gesloten</p>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const socials = ref([
  { label: 'facebook', to: 'https://www.facebook.com/entrepotdeltartufo/', icon: 'i-uil:facebook' },
  { label: 'instagram', to: 'https://www.instagram.com/entrepotdeltartufo/', icon: 'i-akar-icons:instagram-fill' },
  { label: 'linked in', to: 'https://www.linkedin.com/company/entrepot-del-tartufo', icon: 'i-uil:linkedin' }
])
</script>

<template>
  <UApp>
    <NavHeader />
    <NuxtPage />
  </UApp>
</template>

<style>
@import "tailwindcss/theme" theme(reference);

h1 {
  @apply text-2xl md:text-4xl lg:text-5xl xl:text-7xl leading-6 md:leading-9 lg:leading-11 xl:leading-16 font-bold uppercase;
}

h2 {
  @apply text-xl md:text-3xl lg:text-4xl xl:text-6xl leading-6 md:leading-7 lg:leading-9 xl:leading-10 font-bold uppercase;
}

h3 {
  @apply text-lg md:text-2xl lg:text-3xl xl:text-5xl leading-5 md:leading-6 lg:leading-7 xl:leading-8 font-medium uppercase;
}

h4 {
  @apply text-sm md:text-lg lg:text-2xl xl:text-3xl leading-4 md:leading-5 lg:leading-6 xl:leading-8 font-light xl:font-extralight capitalize italic;
}

h5 {
  @apply text-sm md:text-lg lg:text-2xl xl:text-3xl leading-4 md:leading-5 lg:leading-6 xl:leading-8 tracking-wider font-extralight xl:font-thin capitalize italic;
}

h6 {
  @apply text-xs md:text-base lg:text-lg xl:text-2xl leading-2 md:leading-3 lg:leading-4 xl:leading-5 tracking-widest font-extralight xl:font-thin capitalize;
}

p {
  @apply text-base lg:text-lg xl:text-xl leading-7 lg:leading-8 xl:leading-10;
}

.u-button {
  @apply text-white m-1 px-5 py-1.5 lg:px-6 xl:px-7 capitalize;
}
</style>

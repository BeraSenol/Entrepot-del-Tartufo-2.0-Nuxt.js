<template>
  <div>
    <USeparator></USeparator>
    <div class="flex flex-col justify-center items-center">
      <SubjectImage :image="'4'" :title="$t('menu.image_title_0')" :subtitle="$t('menu.image_subtitle_0')" />
      <MenuLunchTabs />
      <MenuDinnerTabs />
    </div>
  </div>
</template>
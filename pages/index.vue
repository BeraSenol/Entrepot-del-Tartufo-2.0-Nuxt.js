<template>
    <div class="flex flex-col justify-center items-center">
        <SubjectImage :image="'1'" :title="$t('index.title')" :subtitle="$t('index.subtitle')" />
        <HomeWelcome />
        <SubjectImage :image="'2'" :title="$t('index.image_title_1')" :subtitle="$t('general.lunch_hour')"
            :days="$t('general.lunch_date')" />
        <HomeLunchDescription />
        <SubjectImage :image="'7'" :title="$t('index.image_title_2')" :subtitle="$t('general.parmigiano_hour')"
            :days="$t('general.dinner_date')" />
        <HomeGetInTouch />
    </div>
</template>

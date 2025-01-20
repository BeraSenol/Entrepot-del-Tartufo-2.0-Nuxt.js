<template>
    <div class="flex flex-col justify-center items-center">
        <SubjectImage :image="'1'" :title="$t('index.title')" :subtitle="$t('index.subtitle')" />
        <HomeWelcome />
        <SubjectImage :image="'2'" :title="$t('index.subject.title_1')" :subtitle="$t('general.hour.lunch')"
            :days="$t('general.date.lunch')" />
        <HomeLunchDescription />
        <SubjectImage :image="'7'" :title="$t('index.subject.title_2')" :subtitle="$t('general.hour.parmigiano')"
            :days="$t('general.date.dinner')" />
        <HomeGetInTouch />
    </div>
</template>

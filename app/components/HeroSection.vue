<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroCaption = 'Welcome To'
  const heroTitle = 'Vue Designer'
  const heroDescription =
    'A desktop drag-and-drop editor for Mac, Windows and Linux that lets you visually design your Vue apps.'
</script>
<template>
  <section
    data-pg-name="Visual image with heading"
    class="bg-primary-100 dark:bg-primary-700"
  >
    <div
      class="grid grid-cols-[1fr] grid-rows-auto max-w-screen-xl mx-auto px-4 py-12 lg:gap-8 lg:grid-cols-12 lg:py-16 xl:gap-0"
    >
      <div class="flex flex-col items-center lg:block lg:col-span-7 lg:mr-auto">
        <h4
          class="dark:text-secondary-200 font-bold font-serif mb-1 text-secondary-600 uppercase"
        >
          Welcome to
        </h4>
        <h1 class="capitalize">Vue Designer</h1>
        <p
          class="font-light max-w-2xl mb-6 text-center text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-left lg:text-xl"
        >
          A desktop drag-and-drop editor for Mac, Windows and Linux that lets
          you visually design your Vue apps.
        </p>
        <BaseButton
          class="px-6 py-4"
          to="https://vuedesigner.com"
          trailing
          target="_blank"
          trailing-icon="i-material-symbols-open-in-new"
          size="xl"
          label="Learn More!"
        />
      </div>
      <div class="hidden max-h-[400px] lg:col-span-5 lg:flex lg:mt-0">
        <NuxtImg alt="mockup" :src="heroImageUrl" class="lg:object-cover" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>

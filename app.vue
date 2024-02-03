<template>
  <div class="fixed inset-0 black text-lime-900 font-sans tracking-wider">
    <div class="flex flex-col w-full h-full max-w-[768px] mx-auto bg-[#fef2e9] overflow-y-auto">
      <NuxtPage class="flex flex-col items-stretch grow" />
    </div>

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: 'preconnect', href: 'https://use.typekit.net' },
    { rel: 'preconnect', href: 'https://p.typekit.net' },
    { rel: 'preload', href: '/vendor/typekit.js', as: 'script' },
  ],
  script: [
    { src: '/vendor/typekit.js', type: 'text/javascript' },
  ],
})

useSeoMeta({
  title: '咖啡散步學',
  ogTitle: '咖啡散步學',
  description: '喝一杯咖啡給自己散步的空檔',
  ogDescription: '喝一杯咖啡給自己散步的空檔',
  ogUrl: 'https://citywalkxcoffee.netlify.app',
  ogType: 'website',
  ogImage: 'https://citywalkxcoffee.netlify.app/og.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

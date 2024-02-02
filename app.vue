<template>
  <div class="fixed inset-0 black text-lime-900 font-serif">
    <div class="w-full h-full max-w-[768px] mx-auto bg-[#fef2e9] overflow-y-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '咖啡散步學',
  meta: [
    { name: 'description', content: '喝一杯咖啡給自己散步的空檔' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://use.typekit.net' },
    { rel: 'preconnect', href: 'https://p.typekit.net' },
    { rel: 'preload', href: '/vendor/typekit.js', as: 'script' },
  ],
  script: [
    { src: '/vendor/typekit.js', type: 'text/javascript' },
  ],
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

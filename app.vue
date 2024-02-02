<template>
  <div class="fixed inset-0 black text-lime-900 font-serif">
    <div class="w-full h-full max-w-[768px] mx-auto bg-[#fef2e9] overflow-y-auto">
      <NuxtPage />
    </div>
  </div>
</template>

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

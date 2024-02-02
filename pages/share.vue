<template>
  <div class="bg-[#ABAB8A] text-white">

    <main class="flex flex-col justify-center grow gap-4 p-8 text-left">

      <p class="mb-8 text-xl">和我們分享你的散步學體驗。看看其他人在散步時看到什麼。</p>

      <p class="text-xl font-mono">@liker.land @until_coffee</p>
      <p class="text-xl font-mono">#咖啡散步學 #urbanstrollology #likerland</p>

    </main>

    <footer class="flex flex-col items-center p-8">
      <UButton size="xl" :to="{ name: 'index' }">重新開始</UButton>
    </footer>

  </div>
</template>

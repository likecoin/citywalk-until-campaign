<template>
  <main>

    <div class="flex flex-col justify-center items-stretch grow py-8 overflow-hidden">
  
      <div class="relative">
        <div class="absolute inset-x-0 bottom-full h-[50vh]">
          <img class="w-full object-cover" src="~assets/images/bg-top.png" />
        </div>
  
        <div class="space-y-4 p-8 text-center">
          <h1 class="text-4xl font-bold">咖啡散步學</h1>
          <h2 class="text-lime-800 text-xl">喝一杯咖啡給自己散步的空檔</h2>
        </div>

        <div class="absolute inset-x-0 top-full h-[50vh]">
          <img class="w-full object-cover " src="~assets/images/bg-bottom.png" />
        </div>
      </div>

    </div>

    <footer class="flex justify-center p-8 relative bg-[#AE7546]">
      <UButton size="xl" :to="{ name: 'preface' }">進入</UButton>
    </footer>

  </main>
</template>

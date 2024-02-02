<template>
  <div class="flex flex-col items-stretch h-full bg-[#ABAB8A] text-white">

    <main class="flex flex-col justify-center grow gap-4 p-8 text-left">

      <h1 class="font-bold text-4xl ml-[-4px] mb-10">空間</h1>

      <h2 class="text-xl font-bold">散步學：如何欣賞地點三</h2>

      <p>在工廠區正中的遊樂場，立起了一座全新的兩層高滑梯，形成鮮明對比。</p>
      <p>這個在唐樓和工廠大廈之間的公共空間，讓小朋友嬉戲的同時，大朋友也有一個在石屎森林中喘息的空間。</p>
      <p>路徑讓人通過，空間則讓人逗留。城市中的空間可以是上至下規劃，也可以是下至上，由市民自發製造。各種在城市中的留白空間，是人與人交流和發生關係的地方。觀測各種空間的存在，從何而形成，讓你更瞭解一個城市的特色。</p>

    </main>

    <footer class="flex justify-between p-8">
      <PurchaseButton />

      <UButton size="xl" :to="{ name: 'summary' }">繼續</UButton>
    </footer>

  </div>
</template>

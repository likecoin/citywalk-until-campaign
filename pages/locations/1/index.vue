<template>
  <div>

    <header class="p-8 bg-[#ABAB8A] text-center text-white">
      <h1 class="flex justify-between tracking-widest">
        <span class="text-2xl font-cursive">地點 1</span><span class="text-3xl font-bold font-serif">自然</span>
      </h1>
    </header>

    <main class="flex flex-col justify-center items-center text-left grow gap-4 p-8 pb-0">
      <img class="rounded-2xl w-full max-w-[40vh]" src="~assets/images/location-1.jpg" />

      <div class="text-center">
        <div class="font-bold text-lg">山頂亭</div>
        <div>步行距離約 3 分鐘</div>
      </div>

      <UButton @click="onClickMap" size="xl" variant="outline" color="black" target="_blank" rel="noopener"
        to="https://maps.app.goo.gl/znjVCqha7GH8vGm88">
        打開地圖
      </UButton>
    </main>

    <footer class="flex justify-center p-8">
      <UButton @click="onClickArrive" size="xl" :to="{ name: 'locations-1-description' }">我到了</UButton>
    </footer>

  </div>
</template>

<script setup lang="ts">
function onClickMap() {
  useTrackEvent('OpenMapLocation1')
}

function onClickArrive() {
  useTrackEvent('ArriveLocation1')
}
</script>

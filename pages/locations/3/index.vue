<template>
  <div>

    <header class="flex items-center gap-4 p-8 bg-[#ABAB8A] text-center text-white">
      <BackButton from="Location3" />

      <h1 class="flex justify-between tracking-widest grow">
        <span class="text-3xl font-cursive">地點 3</span><span class="text-3xl font-bold font-serif">空間</span>
      </h1>
    </header>

    <main class="flex flex-col text-left grow">
      <div class="relative overflow-hidden grow border-t-8 border-b-white">
        <img class="absolute w-full h-full object-cover" src="~assets/images/location-3.jpg" />
      </div>

      <div class="flex flex-col p-8 pb-0 gap-4 justify-center items-center">
        <div class="text-center">
          <div class="font-bold text-lg">遊樂場</div>
          <div>步行距離約 5 分鐘</div>
        </div>

        <UButton
          to="https://maps.app.goo.gl/LkPrSCL1SswYxUny8"
          variant="outline"
          size="xl"
          color="black"
          target="_blank"
          rel="noopener"
          @click="onClickMap"
        >
          打開地圖
        </UButton>
      </div>
    </main>

    <footer class="flex justify-center p-8">
      <UButton @click="onClickArrive" size="xl" :to="{ name: 'locations-3-description' }">我到了</UButton>
    </footer>

  </div>
</template>

<script setup lang="ts">
function onClickMap() {
  useTrackEvent('OpenMapLocation3')
}

function onClickArrive() {
  useTrackEvent('ArriveLocation3')
}
</script>

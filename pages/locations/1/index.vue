<template>
  <div>

    <header class="p-4 py-8 bg-[#ABAB8A] text-center text-white">
      <h1 class="font-bold text-2xl">地點 1 - 自然</h1>
    </header>

    <main class="flex flex-col justify-center items-center text-left grow gap-4 p-8">
      <img class="rounded-2xl" src="~assets/images/location-1.jpg" />

      <div class="text-center">
        <div class="font-bold text-lg">山頂</div>
        <div>步行距離約 3 分鐘</div>
      </div>

      <UButton @click="onClickMap" size="xl" variant="outline" color="black" target="_blank" rel="noopener"
        to="https://www.google.com/maps/dir/Until+coffee,+%E9%91%BD%E7%9F%B3%E5%B1%B1/%E6%96%B0%E8%92%B2%E5%B4%97%E9%9B%99%E5%96%9C%E8%A1%97%E7%B6%B2%E7%90%83%E5%A0%B4/@22.3383238,114.1971496,19z/data=!4m14!4m13!1m5!1m1!1s0x3404075cb192b285:0xe5753b37e7c71d12!2m2!1d114.1981629!2d22.338325!1m5!1m1!1s0x340406d755143647:0x2b66904baab6b424!2m2!1d114.1973333!2d22.3379852!3e2?entry=ttu">
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

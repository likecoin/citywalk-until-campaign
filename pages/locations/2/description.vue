<template>
  <div
    class="relative pt-8 bg-[#ABAB8A] text-white bg-cover"
    :style="`background-image: url(${BackgroundImage})`"
  >
    <BackButton class="absolute top-8 left-8" from="Location2Description" />
    
    <main class="relative flex flex-col justify-center items-start grow gap-4 p-8 pb-0 text-left">

      <h1 class="font-bold text-6xl mb-4 font-serif">路徑</h1>

      <h2 class="text-xl font-bold">散步學：如何欣賞地點二</h2>

      <p>彩虹道遊樂場連接運動場的一段有蓋道路，道路寬闊，樓底極高，一旁設有休憩座椅，甚有幾何學的美觀感覺。</p>
      <p>道路是兩層式的，但上層除了運動場觀眾，平常甚少人經過。不妨嘗試登上一層，體驗一個不同角度的彩虹道遊樂場。</p>
      <p>城市由各種不同的路徑構成，有平常車來人往，地圖標明的道路；也有由各種建築和地形組合而成的約定俗成通道。路徑是由人因地制而走出來的，你每天來往的地方，會不會隱藏有別的路徑，可以帶來不同的過路體驗？</p>

    </main>

    <footer class="flex justify-between p-8">
      <PurchaseButton from="Location2" :is-to-summary="true" />

      <UButton @click="onClickContinue" size="xl" :to="{ name: 'locations-3' }">繼續</UButton>
    </footer>

  </div>
</template>

<script setup lang="ts">
import BackgroundImage from '~/assets/images/location-2-bg.svg'

function onClickContinue() {
  useTrackEvent('CompleteLocation2')
}
</script>

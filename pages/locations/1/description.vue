<template>
  <div
    class="bg-[#ABAB8A] text-white pt-8 bg-cover"
    :style="`background-image: url(${BackgroundImage})`"
  >

    <BackButton class="absolute top-8 left-8" from="Location1Description" />

    <main class="relative flex flex-col justify-center items-start grow gap-4 p-8 pb-0 text-left">

      <h1 class="font-bold text-6xl mb-4 font-serif">自然</h1>

      <h2 class="text-xl font-bold">散步學：如何欣賞地點一</h2>

      <p>彩虹道遊樂場，位於工廠大廈和黃大仙邨之間。如果你走向山頂亭，望向西南方，會發現一排宮粉羊蹄甲融入在週遭樹木中。花季來臨時，會形成一道天然的粉紅屏障，隔開山頂公園和週遭的事物，築起一個季節性小桃源。</p>
      <p>在城市出現的各種自然，有為公眾美化而種，也有社區無心插柳之作。在生活中，你有否留意身邊的自然事物從何而來，如何受週遭事物影響和互動？</p>

    </main>

    <footer class="flex justify-between p-8">
      <PurchaseButton from="Location1" :is-to-summary="true" />

      <UButton @click="onClickContinue" size="xl" :to="{ name: 'locations-2' }">繼續</UButton>
    </footer>

  </div>
</template>

<script setup lang="ts">
import BackgroundImage from '~/assets/images/location-1-bg.svg'

function onClickContinue() {
  useTrackEvent('CompleteLocation1')
}
</script>

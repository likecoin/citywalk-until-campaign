<template>
  <div class="bg-[#ABAB8A] text-white pt-8">

    <BackButton class="absolute top-8 left-8" from="Summary" />

    <main class="flex flex-col justify-center items-center grow gap-4 p-8 text-left">

      <h1 class="mb-4 font-cursive text-5xl text-center">散步是認真的事</h1>

      <p class="text-xl font-bold text-center font-serif">建築．路徑．空間</p>
      <p class="text-xl font-bold text-center font-serif">物件．信息．自然</p>
      <p class="mt-4">在日常中觀察，深入認識身居其中的城市，繼而喜歡上自己生活的這個地方。</p>
      <p>城市散步學，學習如何在城市中散步，與香港重新建立深刻的關係。</p>

    </main>

    <footer class="flex flex-col p-8 pt-0 gap-4">
      <img class="w-[96px] self-center" src="~assets/images/book.webp" />

      <PurchaseButton from="Summary" block />

      <div class="grid grid-cols-5 gap-4">
        <RestartButton from="Summary" size="md" block />
  
        <UButton
          class="col-span-2"
          icon="i-heroicons-share-16-solid"
          size="md"
          :to="{ name: 'share' }"
          block
          @click="onClickShare"
        >分享</UButton>

        <SubscribeButton class="col-span-2" from="Summary" size="md" block />
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
function onClickShare() {
  useTrackEvent('GoToShare')
}
</script>

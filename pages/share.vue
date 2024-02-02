<template>
  <div class="bg-[#ABAB8A] text-white">

    <main class="flex flex-col justify-center grow gap-4 p-8 text-left">

      <p class="mb-8 text-xl">和我們分享你的散步學體驗。看看其他人在散步時看到什麼。</p>

      <p class="text-xl font-mono">
        <a @click="onClickIgPage('LikerLand')" href="https://www.instagram.com/liker.land/" target="_blank"
          rel="noopener">@liker.land</a>
        <a @click="onClickIgPage('UntilCoffee')" href="https://www.instagram.com/until_coffee/" target="_blank"
          rel="noopener">@until_coffee</a>
      </p>
      <p class="text-xl font-mono">
        <a @click="onClickIgTag('Coffeecitywalk')" href="https://www.instagram.com/explore/tags/咖啡散步學/" target="_blank"
          rel="noopener">#咖啡散步學</a>
        <a @click="onClickIgTag('Urbanstrollology')" href="https://www.instagram.com/explore/tags/urbanstrollology/"
          target="_blank" rel="noopener">#urbanstrollology</a>
        <a @click="onClickIgTag('Likerland')" href="https://www.instagram.com/explore/tags/likerland/" target="_blank"
          rel="noopener">#likerland</a>
      </p>

    </main>

    <footer class="flex flex-col items-center p-8">
      <UButton @click="onClickRestart" size="xl" :to="{ name: 'index' }">重新開始</UButton>
    </footer>

  </div>
</template>
<script setup lang="ts">
function onClickIgPage(page: string) {
  useTrackEvent(`ClickIgPage$${page}`)
}

function onClickIgTag(tag: string) {
  useTrackEvent(`ClickIgTag${tag}`)
}

function onClickRestart() {
  useTrackEvent('RestartFromShare')
}
</script>

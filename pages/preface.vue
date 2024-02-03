<template>
  <main>

    <header class="p-4 py-8 bg-[#ABAB8A] text-center text-white">
      <h1 class="font-display text-2xl tracking-widest">前言</h1>
    </header>

    <div class="flex flex-col justify-center items-stretch grow gap-4 p-8 text-xl text-left">
      <p class="text-4xl font-cursive leading-12">散步時，<br>應該看什麼？</p>
      <p class="mt-4">可能你每天都往來這裏，但有曾花時間抬頭觀察過這個社區嗎？</p>
      <p class="mt-4">喝一杯<span class="font-bold">咖啡</span>，<br>給自己五分鐘的自由時間；</p>
      <p>用放鬆的心情，以<span class="font-bold">城市散步</span>重新認識新蒲崗的不同面貌。</p>
    </div>

    <footer class="flex justify-center p-8">
      <UButton @click="onClickStart" size="xl" :to="{ name: 'locations-1' }">開始</UButton>
    </footer>

  </main>
</template>

<script setup lang="ts">
function onClickStart() {
  useTrackEvent('LeavePreface')
}
</script>

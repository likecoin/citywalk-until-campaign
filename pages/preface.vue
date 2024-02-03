<template>
  <main>

    <header class="p-4 py-8 bg-[#ABAB8A] text-center text-white">
      <h1 class="font-display text-2xl tracking-widest">前言</h1>
    </header>

    <div class="flex flex-col justify-center items-stretch grow gap-4 p-8 text-xl text-left">
      <p class="text-2xl font-cursive">散步時，應該看什麼？</p>
      <p>可能你每天都往來這裏，但有曾花時間抬頭觀察過這個社區嗎？</p>
      <p class="mt-16 text-2xl font-cursive">喝一杯咖啡，<br>給自己五分鐘的自由時間；</p>
      <p>用放鬆的心情，以城市散步重新認識新蒲崗的不同面貌。</p>
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

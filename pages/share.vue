<template>
  <div class="bg-[#ABAB8A] text-white">

    <main class="flex flex-col justify-center grow gap-4 p-8 text-left">

      <p class="mb-8 text-xl">和我們分享你的散步學體驗。看看其他人在散步時看到什麼。</p>

      <ul class="font-mono">
        <li v-for="(id, index) in igAccounts" :key="id" class="inline">
          <template v-if="index > 0">&nbsp;</template>
          <UButton
            :label="`@${id}`"
            :to="`https://www.instagram.com/${id}`"
            target="_blank"
            rel="noopener"
            variant="link"
            size="xl"
            :padded="false"
            color="white"
            @click="onClickIgAccount(id)"
          />
        </li>
      </ul>

      <ul class="font-mono">
        <li v-for="(tag, index) in igTags" :key="tag" class="inline">
          <template v-if="index > 0">&nbsp;</template>
          <UButton
            :label="`#${tag}`"
            :to="`https://www.instagram.com/explore/tags/${tag}`"
            target="_blank"
            rel="noopener"
            variant="link"
            size="xl"
            :padded="false"
            color="white"
            @click="onClickIgTag(tag)"
          />
        </li>
      </ul>

    </main>

    <footer class="flex flex-col items-center p-8">
      <UButton @click="onClickRestart" size="xl" :to="{ name: 'index' }">重新開始</UButton>
    </footer>

  </div>
</template>

<script setup lang="ts">
const igAccounts = ['liker.land', 'until_coffee']
const igTags = ['咖啡散步學', 'urbanstrollology', 'likerland']

function onClickIgAccount(id: string) {
  useTrackEvent(`ClickIgAccount${id}`)
}

function onClickIgTag(tag: string) {
  useTrackEvent(`ClickIgTag${tag}`)
}

function onClickRestart() {
  useTrackEvent('RestartFromShare')
}
</script>

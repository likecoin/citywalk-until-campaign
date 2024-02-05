<template>
  <div class="bg-[#ABAB8A] text-white">

    <BackButton class="absolute top-8 left-8" from="Share" />

    <main class="flex flex-col justify-center items-start grow gap-4 p-8 text-left">

      <p class="mb-8 text-4xl font-cursive">和我們分享你的散步學體驗。看看其他人在散步時看到什麼。</p>

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

      <UButton
        label="複製"
        variant="outline"
        color="white"
        @click="onClickCopy"
      />

    </main>

    <footer class="flex flex-row justify-center gap-4 p-8">
      <RestartButton from="Share" />
      <PurchaseButton from="Share" />
    </footer>
  </div>
</template>

<script setup lang="ts">
const igAccounts = ['liker.land', 'until_coffee']
const igTags = ['咖啡散步學', 'urbanstrollology', 'likerland']

const toast = useToast()

function onClickIgAccount(id: string) {
  useTrackEvent(`ClickIgAccount${id}`)
}

function onClickIgTag(tag: string) {
  useTrackEvent(`ClickIgTag${tag}`)
}

function onClickCopy() {
  useTrackEvent('CopyShare')
  try {
    navigator.clipboard.writeText(`${igAccounts.map(id => `@${id}`).join(' ')} ${igTags.map(tag => `#${tag}`).join(' ')}`)
    toast.add({ title: '已複製！' })
  } catch {
    toast.add({ title: '複製失敗' })
  }
}
</script>

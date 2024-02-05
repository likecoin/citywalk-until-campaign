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

    <footer class="flex flex-col items-center p-8">
      <UButton @click="onClickRestart" size="xl">再走一趟</UButton>
    </footer>

    <UModal v-model="isRestartMenuOpen">
      <UCard
        :ui="{
          header: { base: 'flex justify-between' },
          body: { base: 'flex flex-col gap-4' },
        }"
      >
        <template #header>
          <span class="font-display">重新開始？</span>
          <UButton @click="isRestartMenuOpen = false" variant="ghost" icon="i-heroicons-x-mark" />
        </template>

        <UButton @click="onClickRestartAtBeginning" size="xl" block :to="{ name: 'index' }">從頭開始</UButton>
        <UButton
          v-for="i in 3"
          :to="{ name: `locations-${i}` }"
          variant="outline"
          size="xl"
          block
          @click="onClickRestartAtLocation(i)"
        >從地點 {{ i }} 開始</UButton>
      </UCard>
    </UModal>

  </div>
</template>

<script setup lang="ts">
const igAccounts = ['liker.land', 'until_coffee']
const igTags = ['咖啡散步學', 'urbanstrollology', 'likerland']

const toast = useToast()

const isRestartMenuOpen = ref(false)

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

function onClickRestart() {
  isRestartMenuOpen.value = true
  useTrackEvent('RestartFromShare')
}

function onClickRestartAtBeginning() {
  useTrackEvent('RestartFromShareAtBeginning')
}

function onClickRestartAtLocation(index: number) {
  useTrackEvent(`RestartFromShareAtLocation${index}`)
}
</script>

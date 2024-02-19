<template>
  <UButton
    icon="i-heroicons-arrow-uturn-left-16-solid"
    size="xl"
    v-bind="$attrs"
    @click="onClick"
  />

  <UModal v-model="isRestartMenuOpen">
    <UCard
      :ui="{
        header: { base: 'flex justify-between' },
        body: { base: 'flex flex-col gap-4' },
      }"
    >
      <template #header>
        <span class="font-display">再走一趟？</span>
        <UButton @click="isRestartMenuOpen = false" variant="ghost" icon="i-heroicons-x-mark" />
      </template>

      <UButton @click="onClickRestartAtBeginning" size="xl" block :to="{ name: 'index' }">從頭開始</UButton>
      <UButton
        v-for="(location, i) in locations"
        :to="{ name: `locations-${i + 1}` }"
        variant="outline"
        size="xl"
        block
        @click="onClickRestartAtLocation(i + 1)"
      >從地點 {{ i + 1 }} - {{ location }}開始</UButton>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const isRestartMenuOpen = ref(false)

const props = defineProps({
  from: {
    type: String,
    default: '',
  }
})

const locations = [
  '山頂亭',
  '通道',
  '遊樂場',
]

function onClick() {
  isRestartMenuOpen.value = true
  useTrackEvent(`RestartFrom${props.from}`)
}

function onClickRestartAtBeginning() {
  useTrackEvent(`RestartFrom${props.from}AtBeginning`)
}

function onClickRestartAtLocation(index: number) {
  useTrackEvent(`RestartFrom${props.from}AtLocation${index}`)
}
</script>

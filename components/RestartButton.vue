<template>
  <UButton
    size="xl"
    v-bind="$attrs"
    @click="onClick"
  >再走一趟</UButton>

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
        v-for="i in 3"
        :to="{ name: `locations-${i}` }"
        variant="outline"
        size="xl"
        block
        @click="onClickRestartAtLocation(i)"
      >從地點 {{ i }} 開始</UButton>
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
